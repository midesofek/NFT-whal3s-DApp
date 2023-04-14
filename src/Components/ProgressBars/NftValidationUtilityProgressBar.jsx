import "./ProgressBar.css";

export default function NftValidationUtilityProgressBar({ currentStep }) {
  const computePercentage = () => {
    let progress = (currentStep / 5) * 100;
    return progress === 0 ? 10 : progress;
  };
  return (
    <div>
      <h4 className="sr-only">Status</h4>
      <div className="" aria-hidden="true">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            className="progress-bar h-2 rounded-full bg-whal3s-600"
            now={50}
            style={{ width: `${computePercentage()}%` }}
          />
        </div>
        <div className="mt-2.5 hidden grid-cols-5 text-sm font-medium text-gray-600 sm:grid">
          <div
            className={` progress-texts text-left ${
              currentStep >= 1 ? "text-whal3s-600" : ""
            }`}
          >
            Connect wallet
          </div>
          <div
            className={`progress-texts text-center ${
              currentStep >= 2 ? "text-whal3s-600" : ""
            }`}
          >
            Select NFT
          </div>
          <div
            className={`progress-texts text-center ${
              currentStep >= 3 ? "text-whal3s-600" : ""
            }`}
          >
            Confirm Claim
          </div>
          <div
            className={`progress-texts text-center ${
              currentStep >= 4 ? "text-whal3s-600" : ""
            }`}
          >
            Claimed
          </div>
          <div
            className={`progress-texts text-right ${
              currentStep >= 5 ? "text-whal3s-600" : ""
            }`}
          >
            Play Game
          </div>
        </div>
      </div>
    </div>
  );
}
