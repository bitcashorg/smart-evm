import { EVMContractData } from "./types";

export const TestnetEasyAuction: EVMContractData = {
  address: "0x8d37219725eB0088360f744A5d894035D0f88F82",
  indexFromBlock: 12239067,
  chainId: 15557,
  chainType: "evm",
  chainName: "EOS EVM Tesnet",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint96",
          name: "soldAuctioningTokens",
          type: "uint96",
        },
        {
          indexed: false,
          internalType: "uint96",
          name: "soldBiddingTokens",
          type: "uint96",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "clearingPriceOrder",
          type: "bytes32",
        },
      ],
      name: "AuctionCleared",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint64",
          name: "userId",
          type: "uint64",
        },
        {
          indexed: false,
          internalType: "uint96",
          name: "buyAmount",
          type: "uint96",
        },
        {
          indexed: false,
          internalType: "uint96",
          name: "sellAmount",
          type: "uint96",
        },
      ],
      name: "CancellationSellOrder",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint64",
          name: "userId",
          type: "uint64",
        },
        {
          indexed: false,
          internalType: "uint96",
          name: "buyAmount",
          type: "uint96",
        },
        {
          indexed: false,
          internalType: "uint96",
          name: "sellAmount",
          type: "uint96",
        },
      ],
      name: "ClaimedFromOrder",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "contract IERC20",
          name: "_auctioningToken",
          type: "address",
        },
        {
          indexed: true,
          internalType: "contract IERC20",
          name: "_biddingToken",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "orderCancellationEndDate",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "auctionEndDate",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint64",
          name: "userId",
          type: "uint64",
        },
        {
          indexed: false,
          internalType: "uint96",
          name: "_auctionedSellAmount",
          type: "uint96",
        },
        {
          indexed: false,
          internalType: "uint96",
          name: "_minBuyAmount",
          type: "uint96",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "minimumBiddingAmountPerOrder",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "minFundingThreshold",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "allowListContract",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "allowListData",
          type: "bytes",
        },
      ],
      name: "NewAuction",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint64",
          name: "userId",
          type: "uint64",
        },
        {
          indexed: false,
          internalType: "uint96",
          name: "buyAmount",
          type: "uint96",
        },
        {
          indexed: false,
          internalType: "uint96",
          name: "sellAmount",
          type: "uint96",
        },
      ],
      name: "NewSellOrder",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint64",
          name: "userId",
          type: "uint64",
        },
        {
          indexed: true,
          internalType: "address",
          name: "userAddress",
          type: "address",
        },
      ],
      name: "NewUser",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint64",
          name: "userId",
          type: "uint64",
        },
      ],
      name: "UserRegistration",
      type: "event",
    },
    {
      inputs: [],
      name: "FEE_DENOMINATOR",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "auctionAccessData",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "auctionAccessManager",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "auctionCounter",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "auctionData",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "auctioningToken",
          type: "address",
        },
        {
          internalType: "contract IERC20",
          name: "biddingToken",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "orderCancellationEndDate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "auctionEndDate",
          type: "uint256",
        },
        {
          internalType: "bytes32",
          name: "initialAuctionOrder",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "minimumBiddingAmountPerOrder",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "interimSumBidAmount",
          type: "uint256",
        },
        {
          internalType: "bytes32",
          name: "interimOrder",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "clearingPriceOrder",
          type: "bytes32",
        },
        {
          internalType: "uint96",
          name: "volumeClearingPriceOrder",
          type: "uint96",
        },
        {
          internalType: "bool",
          name: "minFundingThresholdNotReached",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "isAtomicClosureAllowed",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "feeNumerator",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minFundingThreshold",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          internalType: "bytes32[]",
          name: "_sellOrders",
          type: "bytes32[]",
        },
      ],
      name: "cancelSellOrders",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          internalType: "bytes32[]",
          name: "orders",
          type: "bytes32[]",
        },
      ],
      name: "claimFromParticipantOrder",
      outputs: [
        {
          internalType: "uint256",
          name: "sumAuctioningTokenAmount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "sumBiddingTokenAmount",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          internalType: "bytes32",
          name: "order",
          type: "bytes32",
        },
      ],
      name: "containsOrder",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "feeNumerator",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "feeReceiverUserId",
      outputs: [
        {
          internalType: "uint64",
          name: "",
          type: "uint64",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
      ],
      name: "getSecondsRemainingInBatch",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getUserId",
      outputs: [
        {
          internalType: "uint64",
          name: "userId",
          type: "uint64",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IERC20",
          name: "_auctioningToken",
          type: "address",
        },
        {
          internalType: "contract IERC20",
          name: "_biddingToken",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "orderCancellationEndDate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "auctionEndDate",
          type: "uint256",
        },
        {
          internalType: "uint96",
          name: "_auctionedSellAmount",
          type: "uint96",
        },
        {
          internalType: "uint96",
          name: "_minBuyAmount",
          type: "uint96",
        },
        {
          internalType: "uint256",
          name: "minimumBiddingAmountPerOrder",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minFundingThreshold",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "isAtomicClosureAllowed",
          type: "bool",
        },
        {
          internalType: "address",
          name: "accessManagerContract",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "accessManagerEVMContractData",
          type: "bytes",
        },
      ],
      name: "initiateAuction",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "numUsers",
      outputs: [
        {
          internalType: "uint64",
          name: "",
          type: "uint64",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          internalType: "uint96[]",
          name: "_minBuyAmounts",
          type: "uint96[]",
        },
        {
          internalType: "uint96[]",
          name: "_sellAmounts",
          type: "uint96[]",
        },
        {
          internalType: "bytes32[]",
          name: "_prevSellOrders",
          type: "bytes32[]",
        },
        {
          internalType: "bytes",
          name: "allowListCallData",
          type: "bytes",
        },
      ],
      name: "placeSellOrders",
      outputs: [
        {
          internalType: "uint64",
          name: "userId",
          type: "uint64",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          internalType: "uint96[]",
          name: "_minBuyAmounts",
          type: "uint96[]",
        },
        {
          internalType: "uint96[]",
          name: "_sellAmounts",
          type: "uint96[]",
        },
        {
          internalType: "bytes32[]",
          name: "_prevSellOrders",
          type: "bytes32[]",
        },
        {
          internalType: "bytes",
          name: "allowListCallData",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "orderSubmitter",
          type: "address",
        },
      ],
      name: "placeSellOrdersOnBehalf",
      outputs: [
        {
          internalType: "uint64",
          name: "userId",
          type: "uint64",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "iterationSteps",
          type: "uint256",
        },
      ],
      name: "precalculateSellAmountSum",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "registerUser",
      outputs: [
        {
          internalType: "uint64",
          name: "userId",
          type: "uint64",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "newFeeNumerator",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "newfeeReceiverAddress",
          type: "address",
        },
      ],
      name: "setFeeParameters",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
      ],
      name: "settleAuction",
      outputs: [
        {
          internalType: "bytes32",
          name: "clearingOrder",
          type: "bytes32",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "auctionId",
          type: "uint256",
        },
        {
          internalType: "uint96[]",
          name: "_minBuyAmount",
          type: "uint96[]",
        },
        {
          internalType: "uint96[]",
          name: "_sellAmount",
          type: "uint96[]",
        },
        {
          internalType: "bytes32[]",
          name: "_prevSellOrder",
          type: "bytes32[]",
        },
        {
          internalType: "bytes",
          name: "allowListCallData",
          type: "bytes",
        },
      ],
      name: "settleAuctionAtomically",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};
