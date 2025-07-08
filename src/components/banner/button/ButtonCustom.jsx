import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ButtonCustom = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  return (
    <div className="relative w-42 h-12">
      <button
        className="w-full h-full bg-amber-500 text-white font-semibold rounded-full overflow-hidden flex items-center justify-endtransition-all duration-300 hover:bg-amber-600 focus:outline-none"
        onClick={handleClick}
      >
        <div
          className={`absolute top-0 p-3  left-0 h-full bg-[#202020] rounded-full transition-transform duration-300 ease-in-out ${
            isClicked ? "translate-x-full" : "translate-x-0"
          } w-1/2 z-0`}
        >
          Daftar
        </div>
        <span
          className={`relative z-10 transition-opacity duration-300 ${
            isClicked ? "opacity-0" : "opacity-100"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ButtonCustom;
