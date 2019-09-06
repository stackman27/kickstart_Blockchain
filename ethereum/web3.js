import Web3 from 'web3';

let web3; 

// check to see if the window is defined
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined' ) {
    
    // We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);

} else {
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/82ad2c743d764fb890f4dc55c33c36b1'
    );

    web3 = new Web3(provider);
}

// REQUIRED FOR METAMASK
const getProvider = async () => {
    await window.web3.currentProvider.enable();
}

getProvider();

export default web3; 