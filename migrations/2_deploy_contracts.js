var ArmorsToken = artifacts.require('./ArmorsToken.sol');

module.exports = function (deployer) {
  deployer.deploy(ArmorsToken);
};
