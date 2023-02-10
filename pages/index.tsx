import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
    <h1 className={styles.h1}>STAGE 1</h1>

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
             Claim rewards/lock/unlock NFTs here. 
          </p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/mint")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>STORAGE</h2>
          <p className={styles.selectBoxDescription}>
            UNLOCKED SOON</p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("")}
        >
          <Image src="/icons/convert.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>EXCHANGE</h2>
          <p className={styles.selectBoxDescription}>
            UNLOCKED SOON</p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("")}
        >
          <Image src="/icons/burn.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>BURN/REDEEM</h2>
          <p className={styles.selectBoxDescription}>
            UNLOCKED SOON</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
