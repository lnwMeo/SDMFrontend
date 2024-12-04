const ButtonSidebar = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="font-light text-[14px] text-white inline-flex  gap-2   rounded-lg items-center hover:bg-violet-800 hover:text-white w-full mt-2 px-2 py-2"
    >
      {children}
    </button>
  );
};

export default ButtonSidebar;
