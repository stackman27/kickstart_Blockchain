'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Retrieving interface from the contract

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xb3109b02623F50b8Bf15daeCd56Eeaf1A70D6ceD' // address from deploy.js
); // getting the instance from web3.js
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFpQixBLEFBQWpCLEFBQU87Ozs7QSxBQUNQLEFBQU8sQUFBcUI7Ozs7OztBQUFnQzs7QUFFNUQsSUFBTSxlQUFlLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDMUIsS0FBQSxBQUFLLE1BQU0sMEJBREUsQUFDYixBQUEyQixZQURkLEFBRWIsNkNBRkosQUFBaUIsQUFFZ0MsQUFJakQ7QUFOaUIsR0FIVTtrQkFTM0IsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1Npc2hpci9EZXNrdG9wL0Jsb2NrQ2hhaW4va2lja3N0YXJ0In0=