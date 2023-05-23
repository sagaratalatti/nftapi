import { Network, Alchemy, NftFilters } from "alchemy-sdk";

const config = {
    apiKey: "CUcVKSkKx_UHAigWRz4a7CS1b7AU3JWJ",
    network: Network.ETH_MAINNET
}

const alchemy = new Alchemy(config);

const main = async() => {
    const contractAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

    const price = await alchemy.nft.getFloorPrice(contractAddress);
    console.log(price);
};

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();