let Ont = require('ontology-ts-sdk');
import {RestClient} from 'ontology-ts-sdk';
import {BLOCK_CHAIN_URL} from '../API'
export default {
  sendTransaction: async function ($walletAddress, $toAddress, $privateKey, $money) {
    const restClient = new RestClient(BLOCK_CHAIN_URL);
    const walletAddress = new Ont.Crypto.Address($walletAddress);
    const walletPrivateKey = new Ont.Crypto.PrivateKey($privateKey);

    const toAddress = new Ont.Crypto.Address($toAddress);

    var tx = Ont.OntAssetTxBuilder.makeTransferTx('ONT', walletAddress, toAddress, $money, 0, 20000, walletAddress);
    Ont.TransactionBuilder.signTransaction(tx, walletPrivateKey);
    const res = await restClient.sendRawTransaction(tx.serialize(), false);

    console.log(res);
    return res
  },

  sendTransactionBySmartContract: async function () {
    const restClient = new RestClient('http://127.0.0.1:20334');
    const adminPrivateKey = new Ont.Crypto.PrivateKey('57a4fdfdcd5e114853e782e1c3346a8118ad4bd60963eb4d237ba1cb23a90666');
    const json = {
      "action": "invoke",
      "version": "v1.0.0",
      "id": "10ba038e-48da-487b-96e8-8d3b99b6d18a",
      "params": {
        "invokeConfig": {
          "contractHash": "0100000000000000000000000000000000000000",
          "functions": [{
            "operation": "transfer",
            "args": [{
              "name": "arg0-from",
              "value": "Address:AL6YBSSi9rJwkxSHc3K6tq8Zy53Nji4aRP"
            },
              {
                "name": "arg1-to",
                "value": "Address:ANXP8bef6zDMnCWCKHgybHJusi4sXsHqqp"
              },
              {
                "name": "arg2-amount",
                "value": "Long:5"
              }
            ]
          }],
          "payer": "AL6YBSSi9rJwkxSHc3K6tq8Zy53Nji4aRP",
          "gasLimit": 20000,
          "gasPrice": 0
        }
      }
    };
    const txs = Ont.TransactionBuilder.makeTransactionsByJson(json);
    Ont.TransactionBuilder.signTransaction(txs[0], adminPrivateKey);
    const res = await restClient.sendRawTransaction(txs[0].serialize(), false);
    console.log(res);

  }
}

/*    const walletAddress =  new Ont.Crypto.Address('AL6YBSSi9rJwkxSHc3K6tq8Zy53Nji4aRP');
    const walletPrivateKey = new Ont.Crypto.PrivateKey('57a4fdfdcd5e114853e782e1c3346a8118ad4bd60963eb4d237ba1cb23a90666');
    const walletPublicKey = walletPrivateKey.getPublicKey()

    const toAddress = new Ont.Crypto.Address('ANXP8bef6zDMnCWCKHgybHJusi4sXsHqqp');

    const contractAddr = new Ont.Crypto.Address('0100000000000000000000000000000000000000');

    let functionName = 'transfer'
    let functionParam = []
    let asker = new Ont.Parameter('arg0-from', 'ByteArray', walletAddress.serialize())
    functionParam.push(asker)
    let answer = new Ont.Parameter('arg1-to', 'ByteArray', toAddress.serialize())
    functionParam.push(answer)
    let amount = new Ont.Parameter('arg2-amount', 'Int', 200)
    functionParam.push(amount)

    console.log(functionParam)
    let tx
    try {
      //make transaction
      //const tx = TransactionBuilder.makeInvokeTransaction(funcName, [p1, p2], contractAddr, gasPrice, gasLimit,payerAddr)
      tx = Ont.TransactionBuilder.makeInvokeTransaction(functionName, functionParam, contractAddr, '0','20000', walletAddress)
      console.log(tx)
      Ont.TransactionBuilder.signTransaction(tx,walletPrivateKey)
      console.log(tx)
      const res = await restClient.sendRawTransaction(tx.serialize(), false, false);
      //Ont.TransactionBuilder.signTx(tx,2,[walletPublicKey,bbsPublicKey],bbsPrivateKey)
      //console.log(tx)
      //let txParam = Ont.TransactionBuilder.buildTxParam(tx)
      //console.log(txParam)
      //WalletTransaction.askReward(txParam)
      console.log(res)*/
