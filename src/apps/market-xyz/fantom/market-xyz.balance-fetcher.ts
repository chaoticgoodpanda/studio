import { Inject } from '@nestjs/common';

import { Register } from '~app-toolkit/decorators';
import { presentBalanceFetcherResponse } from '~app-toolkit/helpers/presentation/balance-fetcher-response.present';
import { CompoundContractFactory } from '~apps/compound';
import { CompoundLendingMetaHelper } from '~apps/compound/helper/compound.lending.meta-helper';
import { BalanceFetcher } from '~balance/balance-fetcher.interface';
import { Network } from '~types/network.interface';

import { MarketXyzLendingBalanceHelper } from '../helpers/market-xyz.lending.balance-helper';
import { MARKET_XYZ_DEFINITION } from '../market-xyz.definition';

@Register.BalanceFetcher(MARKET_XYZ_DEFINITION.id, Network.FANTOM_OPERA_MAINNET)
export class FantomMarketXyzBalanceFetcher implements BalanceFetcher {
  constructor(
    @Inject(CompoundContractFactory)
    private readonly compoundContractFactory: CompoundContractFactory,
    @Inject(MarketXyzLendingBalanceHelper)
    private readonly marketXyzLendingBalanceHelper: MarketXyzLendingBalanceHelper,
    @Inject(CompoundLendingMetaHelper)
    private readonly compoundLendingMetaHelper: CompoundLendingMetaHelper,
  ) {}

  async getLendingBalances(address: string) {
    return this.marketXyzLendingBalanceHelper.getBalances({
      address,
      appId: MARKET_XYZ_DEFINITION.id,
      supplyGroupId: MARKET_XYZ_DEFINITION.groups.supply.id,
      borrowGroupId: MARKET_XYZ_DEFINITION.groups.borrow.id,
      network: Network.FANTOM_OPERA_MAINNET,
      fuseLensAddress: '0x5ab6215ab8344c28b899efde93bee47b124200fb',
      getTokenContract: ({ address, network }) => this.compoundContractFactory.compoundCToken({ address, network }),
      getBalanceRaw: ({ contract, address, multicall }) => multicall.wrap(contract).balanceOf(address),
      getBorrowBalanceRaw: ({ contract, address, multicall }) =>
        multicall
          .wrap(contract)
          .borrowBalanceCurrent(address)
          .catch(() => '0'),
    });
  }

  async getBalances(address: string) {
    const [lendingBalances] = await Promise.all([this.getLendingBalances(address)]);

    const meta = this.compoundLendingMetaHelper.getMeta({ balances: lendingBalances });

    return presentBalanceFetcherResponse([
      {
        label: 'Lending',
        assets: lendingBalances,
        meta: meta,
      },
    ]);
  }
}
