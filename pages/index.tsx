import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Z1NKX</h1>
      <p className={styles.selectBoxDescription}>For 3D Sculpture Collection Owners</p>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("https://assetdapp.vercel.app/")}
        >
          {/* Mint a new NFT */}
          <h2 className={styles.selectBoxTitle}>Mint</h2>
          <p className={styles.selectBoxDescription}>
            Use your GZ1 to buy a Gold Bar NFT.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          <h2 className={styles.selectBoxTitle}>Stake</h2>
          <p className={styles.selectBoxDescription}>
             Stake your NFTS to earn GZ1 tokens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
