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
      <a href="#home">Z1NKX</a>
      </div>

      <div className={styles.nftBoxGrid}>
      <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>STAKE</h2>
          <p className={styles.selectBoxDescription}>
             Stake your 3D Sculpture NFTS to earn GZ1 tokens.
          </p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("https://assetdapp.vercel.app/")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>STORE</h2>
          <p className={styles.selectBoxDescription}>
            Mint your GZ1 into a Gold Bar NFT.</p>
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
