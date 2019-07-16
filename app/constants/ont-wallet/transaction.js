let Ont = require('ontology-ts-sdk');
import {RestClient} from 'ontology-ts-sdk';
export default {
    sendTransaction: async function (){
      const restClient = new RestClient('http://127.0.0.1:20334');
        const walletAddress =  new Ont.Crypto.Address('AL6YBSSi9rJwkxSHc3K6tq8Zy53Nji4aRP');
        const walletPrivateKey = new Ont.Crypto.PrivateKey('57a4fdfdcd5e114853e782e1c3346a8118ad4bd60963eb4d237ba1cb23a90666');
        const walletPublicKey = walletPrivateKey.getPublicKey()

        const toAddress = new Ont.Crypto.Address('ANXP8bef6zDMnCWCKHgybHJusi4sXsHqqp');

      var tx = Ont.OntAssetTxBuilder.makeTransferTx('ONT', walletAddress, toAddress, 22, 0, 20000, walletAddress);
        console.log(tx)
      Ont.TransactionBuilder.signTransaction(tx, walletPrivateKey);
      const res = await restClient.sendRawTransaction(tx.serialize(), false);

      console.log(res);
    },

}
