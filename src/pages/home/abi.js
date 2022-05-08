const abi = [
    {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "EGGS_TO_HATCH_1MINERS",
    "inputs": []
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "address",
    "name": "",
    "internalType": "contract IERC20"
    }
    ],
    "name": "FBT",
    "inputs": []
    },
    {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "buyEggs",
    "inputs": [
    {
    "type": "address",
    "name": "ref",
    "internalType": "address"
    },
    {
    "type": "uint256",
    "name": "value",
    "internalType": "uint256"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "calculateEggBuy",
    "inputs": [
    {
    "type": "uint256",
    "name": "eth",
    "internalType": "uint256"
    },
    {
    "type": "uint256",
    "name": "contractBalance",
    "internalType": "uint256"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "calculateEggBuySimple",
    "inputs": [
    {
    "type": "uint256",
    "name": "eth",
    "internalType": "uint256"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "calculateEggSell",
    "inputs": [
    {
    "type": "uint256",
    "name": "eggs",
    "internalType": "uint256"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "calculateTrade",
    "inputs": [
    {
    "type": "uint256",
    "name": "rt",
    "internalType": "uint256"
    },
    {
    "type": "uint256",
    "name": "rs",
    "internalType": "uint256"
    },
    {
    "type": "uint256",
    "name": "bs",
    "internalType": "uint256"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "address",
    "name": "",
    "internalType": "address"
    }
    ],
    "name": "ceoAddress",
    "inputs": []
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "claimedEggs",
    "inputs": [
    {
    "type": "address",
    "name": "",
    "internalType": "address"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "pure",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "devFee",
    "inputs": [
    {
    "type": "uint256",
    "name": "amount",
    "internalType": "uint256"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "getBalance",
    "inputs": []
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "getEggsSinceLastHatch",
    "inputs": [
    {
    "type": "address",
    "name": "adr",
    "internalType": "address"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "getMyEggs",
    "inputs": []
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "getMyMiners",
    "inputs": []
    },
    {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "hatchEggs",
    "inputs": [
    {
    "type": "address",
    "name": "ref",
    "internalType": "address"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "hatcheryMiners",
    "inputs": [
    {
    "type": "address",
    "name": "",
    "internalType": "address"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "bool",
    "name": "",
    "internalType": "bool"
    }
    ],
    "name": "initialized",
    "inputs": []
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "lastHatch",
    "inputs": [
    {
    "type": "address",
    "name": "",
    "internalType": "address"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "uint256",
    "name": "",
    "internalType": "uint256"
    }
    ],
    "name": "marketEggs",
    "inputs": []
    },
    {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
    {
    "type": "address",
    "name": "",
    "internalType": "address"
    }
    ],
    "name": "referrals",
    "inputs": [
    {
    "type": "address",
    "name": "",
    "internalType": "address"
    }
    ]
    },
    {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "seedMarket",
    "inputs": []
    },
    {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "sellEggs",
    "inputs": []
    },
    {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setCEO",
    "inputs": [
    {
    "type": "address",
    "name": "newCEO",
    "internalType": "address"
    }
    ]
    }
    ]

const NORMAL_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'base',
    outputs: [
      {
        name: 'base',
        type: 'uint256',
      },
      // {
      //   internalType: 'string',
      //   name: '',
      //   type: 'string',
      // },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{
      internalType: 'uint8',
      name: '',
      type: 'uint8',
    }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{
      internalType: 'address',
      name: '_spender',
      type: 'address',
    }, {
      internalType: 'uint256',
      name: '_value',
      type: 'uint256',
    }],
    name: 'approve',
    outputs: [{
      internalType: 'bool',
      name: 'success',
      type: 'bool',
    }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
export {
  abi,
  NORMAL_ABI
}