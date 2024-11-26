import WAValidator from "wallet-address-validator";
import { Address } from "./multiversx-address";
import { isValidAddress } from "algosdk";
import isValidAptosAddress from "./aptos-address";
import isValidSuiAddress from "./sui-address";

function canTransformToPublicKey(address: string) {
  try {
    const checkAddress = new Address(address);
    return Boolean(checkAddress.bech32());
  } catch {
    return false;
  }
}
/**
 * Multiverx Wallet address validator
 * @param destinationAddress
 * @returns
 */
export function addressIsValid(destinationAddress: string) {
  const isValidBach =
    destinationAddress?.startsWith("erd") &&
    destinationAddress.length === 62 &&
    /^\w+$/.test(destinationAddress);

  return isValidBach && canTransformToPublicKey(destinationAddress);
}

export const checkString = (s: string): boolean => {
  const pattern = /^[a-zA-Z0-9-]+$/;
  return pattern.test(s);
};

export const isValidAmount = (amount: string) => {
  if (!amount || amount === "" || parseFloat(amount) <= 0) {
    return false;
  }
  return true;
};

export const IsMultiverseXAddress = (address: string) => {
  const isValid = addressIsValid(address);
  return isValid;
  // return true;
};

const evmNetworks = [
  "ethereum",
  "binance",
  "polygon",
  "cronos",
  "arbitrum",
  "avalanche",
  "fantom",
];

const isEvmNetwork = (network: string) => {
  for (let i = 0; i < evmNetworks.length; i++) {
    let evmNetwork = evmNetworks[i];
    if (network.includes(evmNetwork)) {
      return true;
    }
  }
  return false;
};

// Refer from this npm package, https://www.npmjs.com/package/wallet-validator
export const validateWalletAddress = (
  walletAddress: string,
  network: string,
  symbol: string
) => {
  try {
    /**  Receiving wallet address
          1  BTC (1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX) 
          2  EGLD (erd1s52zy8vvgw8f5850l3f5nm7x3lr6smkjnx47qw00tjpr5mkr3qvsa5jgev)
          3  ETH (0x3Aa5ebB10DC797CAC828524e59A333d0A371443c)
          4  BNB (0x3Aa5ebB10DC797CAC828524e59A333d0A371443c)
          5  MATIC (0x3Aa5ebB10DC797CAC828524e59A333d0A371443c)
          6  CRO (0x3Aa5ebB10DC797CAC828524e59A333d0A371443c)
          7  LTC (MGxNPPB7eBoWPUaprtX9v9CXJZoD2465zN)
          8  XMR (48p3cX9GNSPN85KjLyVb5G4wRifRJbKjZ4J4f4mCq3Xt9mrd1jK5FyJ5LP5uF7yeHF5P5EP5z5ZMkAwuQXNfNvXDyj7NYyJ)
          9  ADA (addr1q8r0p64he0u9q7mn3zqfp0lscd3n9su2sfuch3c5ayrr9vedkxmlzlca49t9ghqy2lmzg43kajtpcwslhzevaq3d0kksv43a66)
          10 SOL (GKvqsuNcnwWqPzzuhLmGi4rzzh55FhJtGizkhHaEJqiV)
          11 XRP (X772WvoEPfjrWA83ZhvKogix2G4rumLD894WVekWFEB36d2)
          12 TRX (TU7jboTGUviot83vmfACYYQgJaLFCABDFy)
          13 ARB (0x24a2bDc8C56dECA06F413CA9C9F0E8b09aFb59C3)
          14 AVAX (0x24a2bDc8C56dECA06F413CA9C9F0E8b09aFb59C3)
          15 ALGO (A3PLAVSLTXW7V5R5RYPVL2VYMA5LWJ7VBD3JB3X3SZ35JLZTHSDWVJN5KI)
          16 BDX (bdx67SWsUeQxMYjj6mS9V7ncUyB1U6n4UJse4pV7sCZszD24WrrM8N44qXV7NfzELcqiaW7VyFLvEeb1cHmYAbZ2eRgKKd52v9)
          17 FTM (0x24a2bDc8C56dECA06F413CA9C9F0E8b09aFb59C3)
          18 DOGE (DQrT1uyqgVJpn9P8aWtjKTXZbnYihZQ2AF)
        */

    // network/coinType =>
    /**
     * Supported:
     * bitcoin/BTC, ethereum/ETH, binancecoin/BNB,
     * litecoin/LTC, monero/XMR, cardano/ADA, ripple/XRP,  tron/TRX, dogecoin/DOGE
     */
    /**
     * Unsupported:
     * EVM: polygon/MATIC, cronos/CRO, arbitrum/ARB, avalanche/AVAX, fantom/FTM
     * Non-EVM: solana/SOL, multiversx/EGLD, algorand/ALGO, beldex/BDX
     */

    const networkLowercase = network.toLocaleLowerCase();

    let coinType = "";
    // Evm networks.
    if (isEvmNetwork(networkLowercase)) {
      coinType = "ETH";
    } else if (networkLowercase === "beldex") {
      if (walletAddress.length !== 98) {
        return false;
      }
      return walletAddress.startsWith("bx") || walletAddress.startsWith("b");
    } else if (networkLowercase === "solana") {
      return walletAddress.length === 44;
    } else if (networkLowercase === "multiversx") {
      return IsMultiverseXAddress(walletAddress);
    } else if (networkLowercase === "algorand") {
      return isValidAddress(walletAddress);
    } else if (networkLowercase.includes("apt")) {
      return isValidAptosAddress(walletAddress);
    } else if (networkLowercase.includes("sui")) {
      return isValidSuiAddress(walletAddress);
    } else {
      switch (networkLowercase) {
        case "monero":
          coinType = "XMR";
          break;
        case "ripple":
          coinType = "XRP";
          break;
        case "bitcoin":
          coinType = "BTC";
          break;
        case "cardano":
          coinType = "ADA";
          break;
        case "dogecoin":
          coinType = "DOGE";
          break;
        case "litecoin":
          coinType = "LTC";
          break;
        case "tron":
          coinType = "TRX";
          break;
        default:
          coinType = symbol;
      }
    }
    var valid = WAValidator.validate(walletAddress, coinType);
    return valid;
  } catch (error) {
    console.log("validateWalletAddress catch error: ", error);
    return false;
  }
};
