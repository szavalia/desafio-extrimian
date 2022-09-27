import { ethers } from "hardhat";

async function main() {
  const Bottle = await ethers.getContractFactory("Bottle");
  const bottle = await Bottle.deploy("This is a message in a bottle, replace it with a message for the next castaway to see");

  await bottle.deployed();

  console.log("Bottle deployed to: ", bottle.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then( () => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
