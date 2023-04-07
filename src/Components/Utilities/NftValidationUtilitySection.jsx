import React, { useEffect, useState } from "react";
import Whal3s, { NftValidationUtility } from "@whal3s/whal3s.js";
import NftValidationUtilityProgressBar from "../ProgressBars/NftValidationUtilityProgressBar";
import { Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";
import Uninitialized from "./NftValidationUtility/0_Uninitialized";
import ConnectWallet from "./NftValidationUtility/1_ConnectWallet";
import LoadingNfts from "./NftValidationUtility/2_LoadingNfts";
import ClaimNft from "./NftValidationUtility/4_ClaimNft";
import ClaimedNft from "./NftValidationUtility/5_ClaimedNft";
import SelectNft from "./NftValidationUtility/3_SelectNft";

const NftValidationUtilitySection = () => {
  const whal3s = new Whal3s();
  const [utilityId] = React.useState("3402f932-1872-4ca8-8261-f4c5125f09a8");
  const [utility, setUtility] = useState(undefined);
  const [step, setStep] = useState(0);

  //////////////////////////

  const { contract } = useContract(
    "0xb52B4b6401BD42fcE41a74566ab41BB8dece8E6e"
  );
  const { mutateAsync: claim, isLoading } = useContractWrite(contract, "claim");

  ///////////////////////////

  useEffect(() => {
    init();
  }, [utilityId]);

  async function init() {
    console.log("init");
    if (!utilityId) return;
    setStep(0);
    if (utility) {
      console.log("destroying old utility");
      utility.destroy();
    }
    try {
      const tmpUtility = await whal3s.createValidationUtility(utilityId);
      tmpUtility.addEventListener("stepChanged", (step) => {
        console.log("setting step to ", step.detail.step);
        setUtility(tmpUtility);
        setStep(step.detail.step);
      });
      setUtility(tmpUtility);
      setStep(tmpUtility.step);
    } catch (e) {
      setUtility(undefined);
    }
  }

  return (
    <>
      <div className="border border-zinc-300 p-5 md:p-10 ">
        <hr className="my-5" />
        {utility ? (
          <div className="grid gap-5 md:gap-10 grid grid-cols-1 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col align-center">
              <h4 className="font-bold text-2xl">{utility.details.name}</h4>
              <p>{utility.details.description}</p>
            </div>
            <div className="border border-zinc-300 p-5 flex flex-col">
              <div className="flex justify-between text-sm font-medium text-gray-900 mb-2.5">
                <span>Claiming utility...</span>
                <span>
                  Claims: {utility?.details?.engagements_count ?? 0}/
                  {utility?.details?.max_engagements ?? "--"}
                </span>
              </div>
              <NftValidationUtilityProgressBar
                currentStep={step ?? 1}
              ></NftValidationUtilityProgressBar>

              <hr className="my-2.5" />

              <div className="flex-grow">
                {step === NftValidationUtility.STEP_UNINITIALIZED && (
                  <Uninitialized />
                )}
                {step === NftValidationUtility.STEP_INITIALIZED && (
                  <ConnectWallet utility={utility} />
                )}
                {step === NftValidationUtility.STEP_WALLET_CONNECTED && (
                  <LoadingNfts />
                )}
                {(step === NftValidationUtility.STEP_NFTS_FETCHED ||
                  step === NftValidationUtility.STEP_TOKEN_SELECTED) && (
                  <SelectNft utility={utility} />
                )}
                {step === NftValidationUtility.STEP_CLAIMED && (
                  <ClaimedNft utility={utility} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2>Load utility by pasting the Utility ID in the field above.</h2>
          </div>
        )}
      </div>
      <div>
        <Web3Button
          colorMode="light"
          className={` inline-flex justify-center items-center rounded-md border border-transparent bg-whal3s-600 disabled:bg-whal3s-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-whal3s-700 focus:outline-none focus:ring-2 focus:ring-whal3s-500 focus:ring-offset-2`}
          accentColor="#38003a"
          contractAddress="0xb52B4b6401BD42fcE41a74566ab41BB8dece8E6e"
          action={(contract) => {
            contract.erc721.claim(1);
          }}
        >
          Claim
        </Web3Button>
      </div>
    </>
  );
};

export default NftValidationUtilitySection;
