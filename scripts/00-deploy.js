const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying smart contract...");
  const Medical = await ethers.getContractFactory("MedicalRecords");
  const accounts = await ethers.getSigners();
  const medical = await Medical.connect(accounts[0]).deploy(); // Deploy the contract

  // Wait for the contract to be deployed and mined
  await medical.waitForDeployment();

  console.log(`Medical is deployed at address: ${medical.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
