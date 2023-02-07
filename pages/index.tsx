import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Z1NKX DASHBOARD</h1>
      <p className={styles.selectBoxDescription}>For 3D Sculpture Collection Owners</p>
      <p className={styles.selectBoxDescription}>(please note our tokens are utility tokens only)</p>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("https://assetdapp.vercel.app/")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>MINT</h2>
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
          <Image src="/icons/token.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>STAKE</h2>
          <p className={styles.selectBoxDescription}>
             Stake your NFTS to earn GZ1 tokens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
