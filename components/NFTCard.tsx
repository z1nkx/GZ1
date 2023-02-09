import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import {
  editionDropContractAddress,
  stakingContractAddress,
} from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

interface NFTCardProps {
  tokenId: number;
}

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(editionDropContractAddress, "edition-drop");
  const { data: nft } = useNFT(contract, tokenId);
  

    return (
      <>
        {nft && (
          <div className={styles.nftBox}>
            {nft.metadata && (
              <ThirdwebNftMedia
                metadata={nft.metadata}
                className={styles.nftMedia}
              />
              )}
              {tokenId === 0 && (
                <Web3Button
                  action={(contract) => contract.call("claimRewards", 0)}
                  contractAddress={stakingContractAddress}
                >
                  Claim Rewards
                </Web3Button>
              )}
              {tokenId === 1 && (
                <Web3Button
                  action={(contract) => contract.call("claimRewards", 1)}
                  contractAddress={stakingContractAddress}
                >
                  Claim Rewards
                </Web3Button>
              )}
            {tokenId === 2 && (
              <Web3Button
                action={(contract) => contract.call("claimRewards", 2)}
                contractAddress={stakingContractAddress}
              >
                Claim Rewards
              </Web3Button>
            )}
             {tokenId === 3 && (
              <Web3Button
                action={(contract) => contract.call("claimRewards", 3)}
                contractAddress={stakingContractAddress}
              >
                Claim Rewards
              </Web3Button>
            )}
             {tokenId === 4 && (
              <Web3Button
                action={(contract) => contract.call("claimRewards", 4)}
                contractAddress={stakingContractAddress}
              >
                Claim Rewards
              </Web3Button>
            )}
             {tokenId === 5 && (
              <Web3Button
                action={(contract) => contract.call("claimRewards", 5)}
                contractAddress={stakingContractAddress}
              >
                Claim Rewards
              </Web3Button>
            )}
             {tokenId === 6 && (
              <Web3Button
                action={(contract) => contract.call("claimRewards", 6)}
                contractAddress={stakingContractAddress}
              >
                Claim Rewards
              </Web3Button>
            )}
             {tokenId === 7 && (
              <Web3Button
                action={(contract) => contract.call("claimRewards", 7)}
                contractAddress={stakingContractAddress}
              >
                Claim Rewards
              </Web3Button>
            )}
             {tokenId === 8 && (
              <Web3Button
                action={(contract) => contract.call("claimRewards", 8)}
                contractAddress={stakingContractAddress}
              >
                Claim Rewards
              </Web3Button>
            )}
             {tokenId === 9 && (
              <Web3Button
                action={(contract) => contract.call("claimRewards", )}
                contractAddress={stakingContractAddress}
              >
                Claim Rewards
              </Web3Button>
            )}
          <Web3Button
            action={(contract) =>
              contract?.call("withdraw", nft.metadata.id, 1)
            }
            contractAddress={stakingContractAddress}
          >
            Withdraw
          </Web3Button>
          </div>
        )}
      </>
    );
  };


export default NFTCard;
