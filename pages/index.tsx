import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <div id="header">
      <a href="#home"></a>
      </div>

      <div className={styles.nftBoxGrid}>
      <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>LOCK</h2>
          <p className={styles.selectBoxDescription}>
             Lock your 3D Sculpture NFTS to be rewarded GZ1 tokens. 
             NFTS are transfered to our rewards contract.
             Claim rewards and unlock whenever you wish to. 
          </p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/mint")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>STORE</h2>
          <p className={styles.selectBoxDescription}>
            SOON</p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/convert.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>CONVERT</h2>
          <p className={styles.selectBoxDescription}>
            SOON</p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/burn.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>BURN</h2>
          <p className={styles.selectBoxDescription}>
            SOON</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
