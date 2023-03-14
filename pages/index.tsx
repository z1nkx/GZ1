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
      <button className={styles.linkButton} onClick={() => window.location.href="https://2-dcolour.vercel.app/"}>
        2D Mint
      </button>
    </li>
    <li>
      <button className={styles.linkButton} onClick={() => window.location.href="https://medium.com/@z1nkxmail"}>
        Medium
      </button>
    </li>
    <li>
      <button className={styles.linkButton} onClick={() => window.location.href=""}>
        Website
      </button>
    </li>
    <li>
      <button className={styles.linkButton} onClick={() => window.location.href="https://twitter.com/z1nkx_eth"}>
        Twitter 
      </button>
    </li>
    <li>
      <button className={styles.linkButton} onClick={() => window.location.href="https://opensea.io/collection/z1-3d-sculptures"}>
        3D Sculptures
      </button>
    </li>
    <li>
      <button className={styles.linkButton} onClick={() => window.location.href="https://opensea.io/collection/z1colorcards"}>
        2D Colour Cards
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
          onClick={() => router.push("/mint")}
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
          onClick={() => router.push("https://z1nkx.netlify.app/")}
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
          onClick={() => router.push("https://bosonprotocol.infura-ipfs.io/ipfs/QmYZrCqjf8GpCMNWvEtEQQFUm8m14ACtnMJsSbfDLN6t1a")}
        >
          {/* Burn Tokens */}
          <Image src="/icons/convert.webp" alt="" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>DECENTRALIZED ECOMMERCE </h2>
          <p className={styles.selectBoxDescription}>
            PURCHASE PHYSICAL NFT.
          </p>
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("")}
        >
          {/* Burn Tokens */}
          <Image src="/icons/convert.webp" alt="" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>MARKETPLACE </h2>
          <p className={styles.selectBoxDescription}>
            COMING SOON
          </p>
        </div>
      </div>
    </div> 
    
  );
};

export default Home;
