const HoverSlideButton = ({ text = "Hover me", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex h-8 md:h-12 items-center justify-center overflow-hidden rounded-full border border-amber-500 font-medium"
    >
      {/* Layer awal (default state) */}
      <div className="inline-flex h-8 md:h-12 translate-x-0 items-center justify-center bg-white px-2 md:px-6 text-neutral-950 transition group-hover:-translate-x-[150%]">
        {text}
      </div>

      {/* Layer saat hover */}
      <div className="absolute inline-flex h-8 md:h-12 w-full translate-x-[100%] items-center justify-center bg-amber-500 px-2 md:px-6 text-neutral-50 transition duration-300 group-hover:translate-x-0">
        {text}
      </div>
    </button>
  );
};

export default HoverSlideButton;
