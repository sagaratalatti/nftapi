import fetch from 'node-fetch';

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const apiKey = "API_KEY";
const baseURL = `https://eth-goerli.g.alchemy.com/nft/v2/${apiKey}/getNFTMetadata/`;
const contractAddress = "0x7BA2dc1781738bdC257083EcD4944965Bc36fe6b";
const tokenId = "2";
const tokenType = "erc721";
const fetchURL = `${baseURL}?contractAddress=${contractAddress}&tokenId=${tokenId}&tokenType=${tokenType}`;

fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(response => JSON.stringify(response, null, 2))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
