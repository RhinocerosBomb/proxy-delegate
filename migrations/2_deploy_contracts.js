const ProxyDelegate = artifacts.require('ProxyDelegate');
const ProxyCall = artifacts.require('ProxyCall');
const SomeLibrary = artifacts.require('SomeLibrary');

module.exports = function(deployer) {
    deployer.deploy(SomeLibrary)
    .then(() => {
        return deployer.deploy(ProxyDelegate, SomeLibrary.address) &&
        deployer.deploy(ProxyCall, SomeLibrary.address)
    });
}