import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { editionDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();
  const newContractAddress = "0x104E5050cC962620b7a19563038472a75084F2F2";

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>GOLD BAR</h1>

      <p className={styles.explain}>
      Mint 120 GZ1 tokens into a Gold Bar NFT.
       This NFT will be redeemable for 100 GZ1.
      </p>

      <Web3Button
        colorMode="dark"
        accentColor="#5204BF"
        contractAddress={newContractAddress}
        action={(contract) => contract.erc1155.claim(0, 1)}
        onSuccess={() => {
          alert("GOLD BAR MINTED!");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Mint
      </Web3Button>

     <img src="/icons/gold.png" alt="My Image" width="300" height="300" style={{ marginTop: "10px", border: "3px solid grey" }} />


    </div>
  );
};

export default Mint;
