import fetch from "node-fetch";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const apiKey = "CUcVKSkKx_UHAigWRz4a7CS1b7AU3JWJ";
const baseURL = `https://eth-goerli.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;

const ownerAddress = "0x3124475af0ba367fFf33a5DC9BcE78c41f493713";
const fetchURL = `${baseURL}?owner=${ownerAddress}`;

fetch(fetchURL, requestOptions)
    .then(respone => respone.json())
    .then(response => JSON.stringify(response, null, 2))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));