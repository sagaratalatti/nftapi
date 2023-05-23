import { Network, Alchemy, NftSaleMarketplace } from "alchemy-sdk";

const config = {
    apiKey: "CUcVKSkKx_UHAigWRz4a7CS1b7AU3JWJ",
    network: Network.ETH_MAINNET
};

const alchemy = new Alchemy(config);

const main = async() => {

    const contractAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

    // Get sales history of BAYC #2409
    const history = await alchemy.nft.getNftSales({
        fromBlock: 0,
        toBlock: 'latest',
        marketplace: NftSaleMarketplace.SEAPORT,
        contractAddress: contractAddress,
        tokenId: 4871,
    })

    console.log(history);
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