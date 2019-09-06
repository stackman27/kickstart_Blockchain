import web3 from './web3'; // getting the instance from web3.js
import CampaignFactory from './build/CampaignFactory.json'; // Retrieving interface from the contract

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb3109b02623F50b8Bf15daeCd56Eeaf1A70D6ceD' // address from deploy.js
);


export default instance;

 