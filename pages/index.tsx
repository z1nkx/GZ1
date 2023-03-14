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
            Store your GZ1 tokens into a Gold Bar NFT. The cost is 120 GZ1. This NFT can be redeemed for 100 GZ1 tokens below.</p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("https://z1nkx.netlify.app/")}
        >
          {/* Burn Tokens */}
          <Image src="/icons/burn.webp" alt="" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>BURN/REDEEM</h2>
          <p className={styles.selectBoxDescription}>
            Redeem your Gold Bar NFTs here for 100 GZ1. Burn your 2D colour cards for 10 GZ1.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
