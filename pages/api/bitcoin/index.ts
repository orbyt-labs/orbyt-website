import { PrivateKey, Address, PublicKey, Networks } from 'bitcore-lib';
var Mnemonic = require('bitcore-mnemonic');

const handler = async (req: any, res: any) => {
  try {
    const { query, socket } = req;
    const { network } = query;

    if (!network || !(network in Networks)) {
      throw new Error('Invalid network parameter');
    }

    const privateKey = new PrivateKey(Networks[network]);
    const publicKey = new PublicKey(privateKey);
    const address = privateKey.toAddress(Networks[network]);

    return res.status(200).json({
      nmemonic: null,
      privateKey: privateKey.toString({ compressed: false }),
      publicKey: publicKey.toString({ compressed: false }),
      address: address.toString({ compressed: false })
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;