import { useState } from "react";

const Navbar = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const subjects = ["History", "Geography", "Psychology", "English", "हिन्दी"];
  const handleClick = () => {};
  return (
    <div className="flex justify-around w-full h-20 items-center font-mono text-black text-xl fixed">
      {subjects.map((sub, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(idx)}
          className="bg-slate-400 w-1/5 rounded-2xl mx-2 text-center h-12 py-2 hover:bg-slate-600 hover:text-white"
        >
          {sub}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
