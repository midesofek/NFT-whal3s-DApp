import React, { useState } from "react";
import { HiCheckCircle } from "react-icons/hi2";
import Button from "../../Button";
import notify from "../../../utils/notify";

const ClaimNft = ({ utility }) => {
  // Link user to game
  const playGame = function() {
    window.location.href =
      "https://ipfs.thirdwebcdn.com/ipfs/QmaR7GehYp24bJ53ePjJavGnj44uav6bprfBnMHaym7cXj/";
  };

  return (
    <>
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <HiCheckCircle
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">
              Successfully claimed! Click the Link below to play{" "}
              <b>NINJA DASH 3D :)</b>
            </p>
          </div>
        </div>
      </div>
      <div
        className="mt-5 flex flex-grow items-end justify-end"
        action="https://ipfs.thirdwebcdn.com/ipfs/QmaR7GehYp24bJ53ePjJavGnj44uav6bprfBnMHaym7cXj/"
      >
        <Button onClick={playGame}> PLAY GAME </Button>
      </div>
      <a
        href="https://ipfs.thirdwebcdn.com/ipfs/QmaR7GehYp24bJ53ePjJavGnj44uav6bprfBnMHaym7cXj/"
        className={Button}
      >
        <a
          href="https://ipfs.thirdwebcdn.com/ipfs/QmaR7GehYp24bJ53ePjJavGnj44uav6bprfBnMHaym7cXj/"
          className={Button}
        >
          https://bit.ly/NinjaDashGame
        </a>
      </a>
    </>
  );
};

export default ClaimNft;
