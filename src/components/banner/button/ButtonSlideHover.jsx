// src/components/HoverSlideButton.jsx
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom"; // Import hooks
import { scroller } from "react-scroll"; // Import scroller

const HoverSlideButton = ({ text = "Hover me", targetId, customOnClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const SCROLL_DURATION = 500; // Consistent scroll duration

  const handleButtonClick = () => {
    if (customOnClick) {
      customOnClick(); // If a custom onClick is provided, execute it first
    }

    if (targetId) {
      // Only perform scroll/navigate if targetId is provided
      if (location.pathname !== "/") {
        // If NOT on the homepage, navigate to home and pass scroll target
        navigate("/", { state: { scrollTo: targetId } });
      } else {
        // If ALREADY on the homepage, directly scroll
        scroller.scrollTo(targetId, {
          smooth: true,
          offset: -70, // Adjust this offset based on your fixed navbar height
          duration: SCROLL_DURATION,
        });
      }
    }
  };

  return (
    <button
      onClick={handleButtonClick} // Use the new handler
      className="group relative inline-flex h-8 md:h-12 items-center justify-center overflow-hidden rounded-full border border-amber-500 font-medium"
    >
      {/* Layer awal (default state) */}
      <div className="inline-flex w-full h-8 md:h-12 translate-x-0 items-center justify-center bg-white px-2 md:px-6 text-neutral-950 transition group-hover:-translate-x-[150%] gap-2">
        {text}
        <LuArrowUpRight />
      </div>

      {/* Layer saat hover */}
      <div className="absolute inline-flex h-8 md:h-12 w-full translate-x-[100%] items-center justify-center bg-amber-500 px-2 md:px-6 text-neutral-50 transition duration-300 group-hover:translate-x-0">
        {text}
      </div>
    </button>
  );
};

export default HoverSlideButton;
