import { HiCheckCircle } from "react-icons/hi2";

export default function SuccessfullyClaimedAlert() {
  return (
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
            Successfully claimed! Congratulations You can now play the game!
          </p>
        </div>
      </div>
    </div>
  );
}
