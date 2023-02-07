import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { editionDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Gold Bar</h1>

      <p className={styles.explain}>
       Mint your GZ1 tokens into a Gold Bar NFT.
       This NFT will be redeemable for GZ1.
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        colorMode="dark"
        accentColor="#5204BF"
        contractAddress={editionDropContractAddress}
        action={(contract) => contract.erc1155.claim(0, 1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Mint Gold Bar
      </Web3Button>
    </div>
  );
};

export default Mint;
