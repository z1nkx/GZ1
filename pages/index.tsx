import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();


  return (
    
    <div className={styles.container}> 
        <ul className={styles.linkList}>
      
    <li>
      <button className={styles.linkButton} onClick={() => window.location.href="https://linktr.ee/z1nkx/"}>
        Social Links
      </button>
    </li>
    <li>
      <button className={styles.linkButton} onClick={() => window.location.href="https://linktr.ee/z1nkx/"}>
        Add Tokens
      </button>
    </li>
    <li>
      <button className={styles.linkButton} onClick={() => window.location.href="https://opensea.io/collection/z1-3d-sculptures"}>
        3D Sculptures
      </button>
    </li>
    <li>
      <button className={styles.linkButton} onClick={() => window.location.href="https://opensea.io/collection/z1colorcards"}>
        Colour Cards
      </button>
    </li>
    <li>
      <button className={styles.linkButton} onClick={() => window.location.href="https://opensea.io/collection/z1-gold-bar-1"}>
        Gold Bars
      </button>
    </li>
  </ul>
      <div className={styles.buttonContainer}>
</div>

      <h1 className={styles.h1}>STAGE 1</h1>
      

      <div className={styles.nftBoxGrid}>
      <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("https://z1cards.vercel.app/")}
        >
          {/* Burn Tokens */}
          <h2 className={styles.selectBoxTitle}>MINT</h2>
          <p className={styles.selectBoxDescription}>
            COLOUR CARDS CAN BE GENERATED BY THE COMMUNITY REWARD TOKEN Z1. WHILE MOST OF THE TIME LISTED IN MATIC, THESE COLOUR CARDS CAN BE PURCHASED IN OUR Z1 MINT WINDOWS. THESE PERIODS WILL BE ANNOUNCED ON OUR SOCIALS.
          </p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>LOCK</h2>
          <p className={styles.selectBoxDescription}>
            LOCK YOUR 3D SCULPTURE NFTS TO BE REWARDED GZ1 TOKENS. NFTS ARE SENT TO OUR REWARDS CONTRACT AND LOCKED. CLAIM REWARDS/LOCK/UNLOCK YOUR NFTS HERE.
          </p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("https://z1goldbars.vercel.app/")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>STORAGE</h2>
          <p className={styles.selectBoxDescription}>
            STORE YOUR GZ1 TOKENS INTO A GOLD BAR NFT. THE COST IS 120GZ1. THIS NFT CAN BE REDEEMED FOR 100GZ1 TOKENS BELOW.</p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("https://z1burn.vercel.app/")}
        >
          {/* Burn Tokens */}
          <Image src="/icons/burn.webp" alt="" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>BURN/REDEEM</h2>
          <p className={styles.selectBoxDescription}>
            REDEEM YOUR GOLD BAR NFTS HERE FOR 100GZ1. BURN YOUR 2D COLOUR CARDS FOR 10GZ1.
          </p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("https://z1store.eth.limo/")}
        >
          {/* Burn Tokens */}
          <h2 className={styles.selectBoxTitle}>BOSON PROTOCOL</h2>
          <p className={styles.selectBoxDescription}>
            PURCHASE NFTS BACKED BY PHYSICAL PRODUCTS.
          </p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("")}
        >
          {/* Burn Tokens */}
          <h2 className={styles.selectBoxTitle}>MARKETPLACE </h2>
          <p className={styles.selectBoxDescription}>
            COMING SOON
          </p>
        </div>
        <div
  className={styles.optionSelectBox}
  role="button"
  onClick={() => router.push("")}
>
  {/* Burn Tokens */}
  <h2 className={styles.selectBoxTitle}>JOURNEY MAP</h2>
  <h2 className={styles.selectBoxTitle}>STAGE 1</h2>
  <div className={styles.selectBoxDescriptionContainer}>
    <p className={`${styles.selectBoxDescription} ${styles.colorRed}`}>PROJECT DAPP</p>
    <p className={`${styles.selectBoxDescription} ${styles.colorRed}`}>FUNCTIONS</p>
  </div>
  <h2 className={styles.selectBoxTitle}>STAGE 2</h2>
  <div className={styles.selectBoxDescriptionContainer}>
<p className={`${styles.selectBoxDescription} ${styles.colorRed}`}>MARKETPLACE</p>
    <p className={`${styles.selectBoxDescription} ${styles.colorRed}`}>GZ1 AUCTIONS/PRODUCTS</p>
  </div>
  <h2 className={styles.selectBoxTitle}>STAGE 3</h2>
  <div className={styles.selectBoxDescriptionContainer}>
    <p className={`${styles.selectBoxDescription} ${styles.colorRed}`}>EDUCATION</p>
    <p className={`${styles.selectBoxDescription} ${styles.colorRed}`}>PRODUCTION</p>
    <p className={`${styles.selectBoxDescription} ${styles.colorRed}`}>DISTRIBUTION</p>
  </div>
  <h2 className={styles.selectBoxTitle}>STAGE 4</h2>
  <div className={styles.selectBoxDescriptionContainer}>
    <p className={`${styles.selectBoxDescription} ${styles.colorRed}`}>IDENTITY MINT</p>
  </div>
</div>

      </div>
    </div> 
    
  );
};

export default Home;

