import { Network, Alchemy } from "alchemy-sdk";

const settings = {
    apiKey: "API_KEY",
    network: Network.ETH_GOERLI
};

const alchemy = new Alchemy(settings);

const ownerAddress = "0x3124475af0ba367fFf33a5DC9BcE78c41f493713";
console.log("fetching NFTs for address: ", ownerAddress);
console.log(".......");

const nftsForOwner = await alchemy.nft.getNftsForOwner(ownerAddress);
console.log("number of NFTs found: ", nftsForOwner.totalCount);
console.log(".......")

for (const nft of nftsForOwner.ownedNfts) {
    console.log("===");
    console.log("contract address: ", nft.contract.address);
    console.log("token ID: ", nft.tokenId);
}
console.log("===");

console.log("fetching metadata for Wafflin Boys...");
const response = await alchemy.nft.getNftMetadata(
    "0x7BA2dc1781738bdC257083EcD4944965Bc36fe6b",
    "10"
);

console.log("NFT name: ", response.title);
console.log("token type: ", response.tokenType);
console.log("tokenURI: ", response.tokenUri.gateway);
console.log("image URL: ", response.rawMetadata.image);
console.log("time last updated: ", response.timeLastUpdated);
console.log("===");
