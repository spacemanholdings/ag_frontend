export const ENS_RESOLVER_ABI = [ { "constant": true, "inputs": [ { "name": "node", "type": "bytes32" } ], "name": "resolver", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "node", "type": "bytes32" } ], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "node", "type": "bytes32" }, { "name": "label", "type": "bytes32" }, { "name": "owner", "type": "address" } ], "name": "setSubnodeOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "node", "type": "bytes32" }, { "name": "ttl", "type": "uint64" } ], "name": "setTTL", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "node", "type": "bytes32" } ], "name": "ttl", "outputs": [ { "name": "", "type": "uint64" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "node", "type": "bytes32" }, { "name": "resolver", "type": "address" } ], "name": "setResolver", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "node", "type": "bytes32" }, { "name": "owner", "type": "address" } ], "name": "setOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "_rootNode", "type": "bytes32" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "node", "type": "bytes32" }, { "indexed": true, "name": "label", "type": "bytes32" }, { "indexed": false, "name": "owner", "type": "address" } ], "name": "NewOwner", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "node", "type": "bytes32" }, { "indexed": false, "name": "owner", "type": "address" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "node", "type": "bytes32" }, { "indexed": false, "name": "resolver", "type": "address" } ], "name": "NewResolver", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "node", "type": "bytes32" }, { "indexed": false, "name": "ttl", "type": "uint64" } ], "name": "NewTTL", "type": "event" } ];
export const ENS_RESOLVER_ADDRESS = 'eb3b8911f31372d597f32206fe731a148d57043c';

export const IDENTITY_ABI = [ { "constant": true, "inputs": [ { "name": "interfaceID", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newOwn", "type": "address" } ], "name": "setOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getName", "outputs": [ { "name": "_name", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newAddr", "type": "address" }, { "name": "_newName", "type": "string" }, { "name": "_newEmail", "type": "string" }, { "name": "_newIpfsHash", "type": "bytes32" } ], "name": "setInfo", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newEmail", "type": "string" } ], "name": "setEmail", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "node", "type": "bytes32" } ], "name": "addr", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getContent", "outputs": [ { "name": "_ipfsHash", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getInfo", "outputs": [ { "name": "_addr", "type": "address" }, { "name": "_name", "type": "string" }, { "name": "_email", "type": "string" }, { "name": "_ipfsHash", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newIpfsHash", "type": "bytes32" } ], "name": "setIpfsHash", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getEmail", "outputs": [ { "name": "_email", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getAddr", "outputs": [ { "name": "_addr", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newName", "type": "string" } ], "name": "setName", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newAddr", "type": "address" } ], "name": "setAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "_ownerLabel", "type": "bytes32" }, { "name": "_ownerNode", "type": "bytes32" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_newOwner", "type": "address" } ], "name": "NewOwner", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_newAddress", "type": "address" } ], "name": "NewAddress", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_newName", "type": "string" } ], "name": "NewName", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_newEmail", "type": "string" } ], "name": "NewEmail", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_newIpfsHash", "type": "bytes32" } ], "name": "NewContentHash", "type": "event" } ];
export const IDENTITY_BYTECODE = '608060405234801561001057600080fd5b506040516040806111ea833981016040818152825160209384015160048054600061010081900a600160a060020a0381810219938416338216928302908117865583800180549095161790935563d22057a963ffffffff81167c010000000000000000000000000000000000000000000000000000000002895282198088161694909801938452821692880192835294519396929573eb3b8911f31372d597f32206fe731a148d57043c9573db515ec28da84b38e033667bc0f1878b327406519592861694919390910191808303818387803b1580156100ef57600080fd5b5060325a03f115801561010157600080fd5b5050505081600160a060020a0316631896f70a84306040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180836000191660001916815260200182600160a060020a0316600160a060020a0316815260200192505050600060405180830381600087803b15801561018957600080fd5b5060325a03f115801561019b57600080fd5b5050505050505050611038806101b26000396000f3006080604052600436106100ab5763ffffffff60e060020a60003504166301ffc9a781146100b057806313af4035146100e957806317d7de7c1461010c5780631c8235a814610196578063282b065a1461024f5780633b3b57de146102b157806359016c79146102f55780635a9b0b891461032557806363f19936146104405780637e79e8ba1461045c578063a74c2bb614610471578063c47f002714610486578063e30081a0146104e8575b600080fd5b3480156100bc57600080fd5b506100d2600160e060020a031960043516610509565b604080519115151515825251602090910181900390f35b3480156100f557600080fd5b5061010a600160a060020a0360043516610522565b005b34801561011857600080fd5b5061012161061b565b6040516020808201828103835283518152835183929182019185019080838360005b8381101561015b578181015183820152602001610143565b50505050905090810190601f1680156101885780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101a257600080fd5b5061010a6004803603810190808035600160a060020a03169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375050604080516020601f89358b018035918201839004830283018401909452808352979a999881019791965091820194509250829150840183828082843750949750505092356000191693506106b392505050565b34801561025b57600080fd5b5061010a600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437509497506109479650505050505050565b3480156102bd57600080fd5b506102cd60001960043516610a7a565b6040518082600160a060020a0316600160a060020a0316815260200191505060405180910390f35b34801561030157600080fd5b5061030a610a7f565b60408051600019928316909216825251602090910181900390f35b34801561033157600080fd5b5061033a610a88565b6040518085600160a060020a0316600160a060020a0316815260200180602001806020018460001916600019168152602001838103835286818151815260200191508051906020019080838360005b838110156103a1578181015183820152602001610389565b50505050905090810190601f1680156103ce5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156104015781810151838201526020016103e9565b50505050905090810190601f16801561042e5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561044c57600080fd5b5061010a60001960043516610be7565b34801561046857600080fd5b50610121610caa565b34801561047d57600080fd5b506102cd610d09565b34801561049257600080fd5b5061010a600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949750610d249650505050505050565b3480156104f457600080fd5b5061010a600160a060020a0360043516610e57565b600160e060020a031916633b3b57de60e060020a021490565b33600460009054906101000a9004600160a060020a0316600160a060020a031681600160a060020a03161415156105a5576040805160e560020a62461bcd028152600401602080820182810390925260268252600080516020610fed83398151915291810191825260d060020a65656e7469747902908201528151910181900390fd5b81600460006101000a815481600160a060020a030219169083600160a060020a03160217905550600460009054906101000a9004600160a060020a0316600160a060020a03167f3edd90e7770f06fafde38004653b33870066c33bfc923ff6102acd601f85dfbc60405160405180910390a25050565b600060019081018054604080516020600284871615610100029690960390931694909404601f810183900483028301850190915280845260609392918301828280156106a85780601f1061067d576101008083540402835291602001916106a8565b820191906000526020600020905b81548152906001019060200180831161068b57829003601f168201915b505050505090505b90565b33600460009054906101000a9004600160a060020a0316600160a060020a031681600160a060020a0316141515610736576040805160e560020a62461bcd028152600401602080820182810390925260268252600080516020610fed83398151915291810191825260d060020a65656e7469747902908201528151910181900390fd5b846000800160006101000a815481600160a060020a030219169083600160a060020a031602179055506000800160009054906101000a9004600160a060020a0316600160a060020a03167ff323835c550ef5d08a5d81e8d8ed252a41661ca99e5ce68c3c9e57051b4f7b8d60405160405180910390a283516107c2906001600001906020870190610f54565b50600060010160405180828054600181600116156101000203166002900480156108235780601f10610801576101008083540402835291820191610823565b820191906000526020600020905b81548152906001019060200180831161080f575b505060405190819003812092507f690f57b0c4f509c6b82171467623dfbf0f0a738b189358e70cfa839d885db8b1915080800390a2825161086e906002600001906020860190610f54565b50600060020160405180828054600181600116156101000203166002900480156108cf5780601f106108ad5761010080835404028352918201916108cf565b820191906000526020600020905b8154815290600101906020018083116108bb575b505060405190819003812092507f57c19da27884f2ee73f9d8242cd1586ec3b5a9d187d85dc1cfe3fd3904c483ef915080800390a26000801980841660039092018290556040519116907fba75a35fbdc2564f5bf99cb32a54b5001e7e74cbe59eff821b666f6401ac6e6a9080800390a25050505050565b33600460009054906101000a9004600160a060020a0316600160a060020a031681600160a060020a03161415156109ca576040805160e560020a62461bcd028152600401602080820182810390925260268252600080516020610fed83398151915291810191825260d060020a65656e7469747902908201528151910181900390fd5b81516109e0906002600001906020850190610f54565b5060006002016040518082805460018160011615610100020316600290048015610a415780601f10610a1f576101008083540402835291820191610a41565b820191906000526020600020905b815481529060010190602001808311610a2d575b505060405190819003812092507f57c19da27884f2ee73f9d8242cd1586ec3b5a9d187d85dc1cfe3fd3904c483ef915080800390a25050565b503090565b60036000015490565b600060608060008060000160009054906101000a9004600160a060020a0316935060006001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b425780601f10610b1757610100808354040283529160200191610b42565b820191906000526020600020905b815481529060010190602001808311610b2557829003601f168201915b5050506002600081018054604080516020601f6001610100818716150203909416959095049283018590048502850181019091528181529598509093509150830182828015610bd25780601f10610ba757610100808354040283529160200191610bd2565b820191906000526020600020905b815481529060010190602001808311610bb557829003601f168201915b50505050509150600060030154905090919293565b33600460009054906101000a9004600160a060020a0316600160a060020a031681600160a060020a0316141515610c6a576040805160e560020a62461bcd028152600401602080820182810390925260268252600080516020610fed83398151915291810191825260d060020a65656e7469747902908201528151910181900390fd5b6000801980841660039092018290556040519116907fba75a35fbdc2564f5bf99cb32a54b5001e7e74cbe59eff821b666f6401ac6e6a9080800390a25050565b600060029081018054604080516020600180851615610100020390931694909404601f810183900483028301850190915280845260609392918301828280156106a85780601f1061067d576101008083540402835291602001916106a8565b600080800154600160a060020a036101009290920a90041690565b33600460009054906101000a9004600160a060020a0316600160a060020a031681600160a060020a0316141515610da7576040805160e560020a62461bcd028152600401602080820182810390925260268252600080516020610fed83398151915291810191825260d060020a65656e7469747902908201528151910181900390fd5b8151610dbd906001600001906020850190610f54565b5060006001016040518082805460018160011615610100020316600290048015610e1e5780601f10610dfc576101008083540402835291820191610e1e565b820191906000526020600020905b815481529060010190602001808311610e0a575b505060405190819003812092507f690f57b0c4f509c6b82171467623dfbf0f0a738b189358e70cfa839d885db8b1915080800390a25050565b33600460009054906101000a9004600160a060020a0316600160a060020a031681600160a060020a0316141515610eda576040805160e560020a62461bcd028152600401602080820182810390925260268252600080516020610fed83398151915291810191825260d060020a65656e7469747902908201528151910181900390fd5b816000800160006101000a815481600160a060020a030219169083600160a060020a031602179055506000800160009054906101000a9004600160a060020a0316600160a060020a03167ff323835c550ef5d08a5d81e8d8ed252a41661ca99e5ce68c3c9e57051b4f7b8d60405160405180910390a25050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610f9557805160ff1916838001178555610fc2565b82800160010185558215610fc2579182015b82811115610fc2578251825591602001919060010190610fa7565b50610fce929150610fd2565b5090565b6106b091905b80821115610fce5760008155600101610fd8560054686973206164647265737320646f65736e2774206f776e2074686973206964a165627a7a72305820bccfe6ea06015e7e60041d2535b74099a8b01cd173b9182df2b37e2554813f4f0029';

export const CIRCLE_ABI = [ { "constant": false, "inputs": [ { "name": "_roleLabel", "type": "bytes32" }, { "name": "_domainLabel", "type": "bytes32" }, { "name": "_domainAddress", "type": "address" } ], "name": "addDomainToRole", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newLead", "type": "address" } ], "name": "setLeadLink", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_roleLabel", "type": "bytes32" }, { "name": "_domainLabel", "type": "bytes32" } ], "name": "isDomainInRole", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_role", "type": "string" }, { "name": "_purpose", "type": "string" }, { "name": "_assignedTo", "type": "address" } ], "name": "newRole", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_domainLabel", "type": "bytes32" } ], "name": "getDomainAddress", "outputs": [ { "name": "domainAddress", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "label", "type": "bytes32" } ], "name": "getSubdomainOwner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isCircle", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "inputs": [ { "name": "onsAddr", "type": "address" }, { "name": "_ArgRegistrar", "type": "address" }, { "name": "_circleLabel", "type": "bytes32" }, { "name": "_circleNode", "type": "bytes32" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "_roleLabel", "type": "bytes32" }, { "indexed": false, "name": "_domainLabel", "type": "bytes32" }, { "indexed": false, "name": "_domainAddress", "type": "address" } ], "name": "NewDomainForRole", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_assignedTo", "type": "address" }, { "indexed": false, "name": "_role", "type": "string" }, { "indexed": false, "name": "_purpose", "type": "string" } ], "name": "NewRoleCreated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_leadlink", "type": "address" } ], "name": "NewLeadLink", "type": "event" } ];

export const QTUM_RPC_ENDPOINT = 'http://136.30.97.201:9888';
