import { Network, Alchemy } from "alchemy-sdk";

const config = {
    apiKey: "CUcVKSkKx_UHAigWRz4a7CS1b7AU3JWJ",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(config);

const nftAddress = "0x7BA2dc1781738bdC257083EcD4944965Bc36fe6b";

let minters = [];

let pageKey; // variable for pagekey that will be used to paginate through the API call

async function getMinters() {
    
    let firstCall = true; // // We need this because the first time we make the API call, the pageKey will be undefined.

    while (firstCall || pageKey) {
        let response;

        if (pageKey) {

            response = await alchemy.core.getAssetTransfers({
                fromAddress: "0x0000000000000000000000000000000000000000",
                category: ["erc721"],
                contractAddresses: [nftAddress],
                pageKey: pageKey, //The pageKey is used to paginate through the API call.
            });
        } else {
            response = await alchemy.core.getAssetTransfers({
                fromAddress: "0x0000000000000000000000000000000000000000",
                category: ["erc721"],
                contractAddresses: [nftAddress],
            });
        }

        firstCall = false; // setting the `firstCall` variable to false, because it is not the first call anymore.

        // Looping through the response of the API call, that is, the transfers and pushing the `to` address to the `minters` array.
        // Because the `to` is the address that minted the NFT.
        for (let i = 0; i < response.transfers.length; i++) {
            const transfer = response.transfers[i];
            minters.push(transfer.to); // adding the `to` address to the `minters` array
        }

        pageKey = response.pageKey; // setting the pageKey from the response of the API call.
    }   

    minters = [...new Set(minters)]; // Removing the duplicate addresses from the `minters` array. This is done because the API call returns the same `to` address multiple times if an address minted multiple NFTs.
    console.log("Number of unique minters: ", minters.length);
    console.log(minters); // Printing the `minters` array.
}

async function main() {
    await getMinters(); // Calling the `getMinters` function
}

main();