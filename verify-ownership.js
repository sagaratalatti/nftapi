import { Alchemy, Network } from "alchemy-sdk";

const config = {
    apiKey: "CUcVKSkKx_UHAigWRz4a7CS1b7AU3JWJ",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(config);

const main = async() => {
    const nfts = await alchemy.nft.verifyNftOwnership(
        "0x3124475af0ba367fFf33a5DC9BcE78c41f493713",
        ["0x7BA2dc1781738bdC257083EcD4944965Bc36fe6b"]
    );
    console.log(nfts);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();