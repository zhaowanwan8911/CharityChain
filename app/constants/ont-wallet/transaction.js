let Ont = require('ontology-ts-sdk');
import {RestClient} from 'ontology-ts-sdk';
export default {
    sendTransaction: async function ($walletAddress,$toAddress,$privateKey,$money){
      const restClient = new RestClient('http://127.0.0.1:20334');
        const walletAddress =  new Ont.Crypto.Address($walletAddress);
        const walletPrivateKey = new Ont.Crypto.PrivateKey($privateKey);
        const walletPublicKey = walletPrivateKey.getPublicKey()

        const toAddress = new Ont.Crypto.Address($toAddress);

      var tx = Ont.OntAssetTxBuilder.makeTransferTx('ONT', walletAddress, toAddress, $money, 0, 20000, walletAddress);
        console.log(tx)
      Ont.TransactionBuilder.signTransaction(tx, walletPrivateKey);
      const res = await restClient.sendRawTransaction(tx.serialize(), false);

      //console.log(res);
      return res
    },

}
