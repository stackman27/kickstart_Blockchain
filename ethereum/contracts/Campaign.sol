 pragma solidity ^0.4.25;
 
 contract CampaignFactory {
      
       address[] public deployedCampaigns; 
       
       function createCampaign(uint minimum) public {
           address newCampaign = new Campaign(minimum, msg.sender);
           deployedCampaigns.push(newCampaign);
       }
       
       // view means we are not changing any data
       function getDeployedCampaigns() public view returns(address[]){
        return deployedCampaigns;    
       }
       
 }
 
 contract Campaign{
     
     struct Request{
         string description;
         uint value; 
         address recipient; 
         bool complete; 
         uint approvalCount; 
         mapping(address => bool) approvals;  // Reference type so no need to initialize 
     }
     
     Request[] public requests; 
     
     
      address public manager;
      uint public minimumContribution;
      mapping(address => bool) public approvers;
      uint public approversCount;
      
      modifier restricted() {
          require (msg.sender == manager);
          _;
      }
      
       constructor (uint minimum, address creator) public{
          manager = creator;
          minimumContribution = minimum;
      }
      
      function Contribute() public payable{
            require(msg.value > minimumContribution); 
            
             approvers[msg.sender] = true; // adding value to the approvers mapping IMP: address doesnot get stored in the mapping
             approversCount++;
      }
    
    function createRequest(string description, uint value, address recipient) 
        public restricted
        {
              Request memory newRequests = Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false,
                approvalCount: 0
            });
            
            requests.push(newRequests);
        }
        
    function approveRequest(uint index) public {
        Request storage request = requests[index]; 
        
        require(approvers[msg.sender]); // check to see the user has been approved and registered
        require(!request.approvals[msg.sender]); // check if person has voted on this network before
        
        request.approvals[msg.sender] = true; 
        request.approvalCount++;
            
    }
    
    function finalizeRequest (uint index) public restricted {
            Request storage request = requests[index];
        
            require(request.approvalCount > (approversCount / 2));
            require(!request.complete); 
            
            request.recipient.transfer(request.value);
            request.complete = true; 
    }
     
    function getSummary() public view returns(uint, uint, uint, uint, address) {
        return (
            minimumContribution, 
            this.balance, 
            requests.length, 
            approversCount,
            manager 
        );
    } 

    function getRequestCount() public view returns (uint) {
        return requests.length; 
    }

 }
 