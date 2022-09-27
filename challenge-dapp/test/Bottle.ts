const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new message once it's changed", async function () {
    const Bottle = await ethers.getContractFactory("Bottle");
    const bottle = await Bottle.deploy("Hello, world!");
    await bottle.deployed();

    expect(await bottle.getMessage()).to.equal("Hello, world!");

    const updatedMessage = await bottle.setMessage("Hola, mundo!");

    // wait until the transaction is mined
    await updatedMessage.wait();

    expect(await bottle.greet()).to.equal("Hola, mundo!");
  });
});