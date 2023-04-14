import React from "react";
import "./ProgressBars/ProgressBar.css";
import { ImSpinner2 } from "react-icons/im";

const Button = ({
  onClick,
  children,
  className = "",
  disabled,
  isLoading = false,
}) => {
  if (isLoading) disabled = true;
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      // className={`${className} inline-flex justify-center items-center rounded-md border border-transparent bg-whal3s-600 disabled:bg-whal3s-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-whal3s-700 focus:outline-none focus:ring-2 focus:ring-whal3s-500 focus:ring-offset-2`}
      className={`${className} project-button inline-flex justify-center items-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2`}
    >
      {isLoading && (
        <ImSpinner2
          className="-ml-1 mr-2 h-5 w-5 animate-spin"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  );
};

export default Button;
