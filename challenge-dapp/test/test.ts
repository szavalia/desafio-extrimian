const { ethers } = require("hardhat");
const { expect } = require("chai");


describe("Message in a bottle", function () {
  it("Should return the new message once it's changed", async function () {
    const Bottle = await ethers.getContractFactory("Bottle");
    const bottle = await Bottle.deploy("Hello, world!");
    await bottle.deployed();

    expect(await bottle.getMessage()).to.equal("Hello, world!");

    const updatedMessage = await bottle.setMessage("Hola, mundo!");

    // wait until the transaction is mined
    await updatedMessage.wait();

    expect(await bottle.getMessage()).to.equal("Hola, mundo!");
  });
});
