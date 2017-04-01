var Charity = artifacts.require("./Charity.sol");
var Oracle = artifacts.require("./usingOraclize.sol");

module.exports = function(deployer) {
  deployer.deploy(Oracle);
  deployer.deploy(Charity);
};
