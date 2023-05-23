import axios from 'axios';

const contractAddress = "0x7BA2dc1781738bdC257083EcD4944965Bc36fe6b";
const API_KEY = "CUcVKSkKx_UHAigWRz4a7CS1b7AU3JWJ";
const baseURL = `https://eth-goerli.g.alchemy.com/nft/v2/${API_KEY}/getOwnersForCollection`

// to fetch address owning NFTs from a collection
/* var config = {
    method: 'get',
    url: `${baseURL}?contractAddress=${contractAddress}`
} */

// token fetch address owning numbers of NFTs from a collection
var config = {
    method: 'get',
    url: `${baseURL}?contractAddress=${contractAddress}&withTokenBalances=true`
}

axios(config)
    .then(response => console.log(JSON.stringify(response.data, null, 2)))
    .catch(error => console.log(error));