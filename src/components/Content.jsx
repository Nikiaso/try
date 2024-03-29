import { useState } from "react";
import hindi from "../assets/subjects/Hindi/hindi.jsx";
const Content = () => {
  const [isSelected, setIsSelected] = useState(true);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [summary, setSummary] = useState(null);
  const handleClick = (idx) => {
    setSummary(hindi[idx].story);
  };
  return (
    <div className="flex justify-center items-center h-full">
      {isSelected ? (
        <div className="bg-slate-400 w-[1520px] h-5/6 mt-8 rounded-md flex max-h-full">
          <div className="w-1/4 bg-white overflow-y-auto py-3 rounded-md">
            {hindi.map((chapter, idx) => (
              <div key={idx} onClick={() => handleClick(idx)}>
                <h1 className="px-6">{chapter.chapterName}</h1>
                {idx !== hindi.length - 1 && (
                  <hr className="my-3 border w-full" />
                )}
              </div>
            ))}
          </div>
          <div className="w-3/4">{summary && <h1>{summary}</h1>}</div>
        </div>
      ) : (
        <div className="font-mono text-xl w-2/5 rounded-3xl text-center h-12 py-2">
          <h1>Click on any subject you want to study</h1>
        </div>
      )}
    </div>
  );
};

export default Content;
