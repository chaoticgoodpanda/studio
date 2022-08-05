interface Address {
  name: string;
  mainAddress: string;
  refAddress: string;
  walletAddress: string;
  poolAddress: string;
  stakingAddress: string;
  oMainAddress: string;
  oRefAddress: string;
  HedgeX: number;
  HedgeLTV: number;
}

type AddressList = Address[];

//  USDT(1) - MATIC(0)
const USDT_MATIC: Address = {
  name: "USDT_MATIC",
  mainAddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  refAddress: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  walletAddress: "0xc4b224eeb92b376cc2e15d4196ce2f3db905d2a0",
  poolAddress: "0x604229c960e5cacf2aaeac8be68ac07ba9df81c3",
  stakingAddress: "0xc0eb5d1316b835f4b584b59f922d9c87ca5053e5",
  oMainAddress: "0x1372c34acc14f1e8644c72dad82e3a21c211729f",
  oRefAddress: "0xe554e874c9c60e45f1debd479389c76230ae25a8",
  HedgeX: 0.407,
  HedgeLTV: 0.419,
};

//USDC(1) - wBTC(0)
const USDC_WBTC: Address = {
  name: "USDC_WBTC",
  mainAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  refAddress: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
  walletAddress: "0x222e90b3e08ac94c9b8eb3ee79a0a0d6a87536cb",
  poolAddress: "0xf6a637525402643b0654a54bead2cb9a83c8b498",
  stakingAddress: "0xbf0b0def82c1d473e6b8770458ddc82f5c8c7504",
  oMainAddress: "0xebb865bf286e6ea8abf5ac97e1b56a76530f3fbe",
  oRefAddress: "0x3b9128ddd834ce06a60b0ec31ccfb11582d8ee18",
  HedgeX: 0.285,
  HedgeLTV: 0.555,
};

// USDC(0) - ETH(1)
const USDC_WETH: Address = {
  name: "USDC_WETH",
  mainAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  refAddress: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  walletAddress: "0x35676ccea96f80ac3c372ff8215857b12e581e73",
  poolAddress: "0x853ee4b2a13f8a742d64c8f088be7ba2131f670d",
  stakingAddress: "0xbb703e95348424ff9e94fbe4fb524f6d280331b8",
  oMainAddress: "0xebb865bf286e6ea8abf5ac97e1b56a76530f3fbe",
  oRefAddress: "0xb2d9646a1394bf784e376612136b3686e74a325f",
  HedgeX: 0.285,
  HedgeLTV: 0.555,
};

// USDC(1) - MATIC(0)
const USDC_MATIC: Address = {
  name: "USDC_MATIC",
  mainAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  refAddress: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  walletAddress: "0xdf29335b4aeccedc9f34b0e53ec1d0c6ef7b3590",
  poolAddress: "0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827",
  stakingAddress: "0x14977e7e263ff79c4c3159f497d9551fbe769625",
  oMainAddress: "0xebb865bf286e6ea8abf5ac97e1b56a76530f3fbe",
  oRefAddress: "0xe554e874c9c60e45f1debd479389c76230ae25a8",
  HedgeX: 0.285,
  HedgeLTV: 0.555,
};

// USDT(1) - ETH(0)
const USDT_WETH: Address = {
  name: "USDT_WETH",
  mainAddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  refAddress: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  walletAddress: "0xa85c9A5464955481c47247d58776BC086127c061",
  poolAddress: "0xf6422b997c7f54d1c6a6e103bcb1499eea0a7046",
  stakingAddress: "0x2912a338df9877905e54c557e4d826f84365602e",
  oMainAddress: "0x1372c34acc14f1e8644c72dad82e3a21c211729f",
  oRefAddress: "0xb2d9646a1394bf784e376612136b3686e74a325f",
  HedgeX: 0.407,
  HedgeLTV: 0.419,
};

const ADDRESSES: { [key: string]: Address } = {
  [USDT_MATIC.name]: USDT_MATIC,
  [USDC_WBTC.name]: USDC_WBTC,
  [USDC_WETH.name]: USDC_WETH,
  [USDC_MATIC.name]: USDC_MATIC,
  [USDT_WETH.name]: USDT_WETH,
};

export {
  USDT_MATIC,
  USDC_WBTC,
  USDC_WETH,
  USDC_MATIC,
  USDT_WETH,
  Address,
  AddressList,
  ADDRESSES,
};
