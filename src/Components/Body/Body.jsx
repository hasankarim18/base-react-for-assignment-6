import { useState } from "react";


const Body = () => {

    const [isShown, setIsShown] = useState(false)
    const text =
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos repellat reprehenderit animi iste incidunt odit tenetur asperiores officia temporibus doloribus, tempora cumque, blanditiis eaque et expedita numquam? Veniam, impedit eveniet.";

    const handleShowText = ()=> {
        setIsShown((prev)=> !prev)
    }

    return (
      <div>
        <div className="h-full min-h-[calc(100vh-10rem)] flex justify-center items-center gap-8 flex-col ">
          <button
            onClick={handleShowText}
            className={`btn ${
              isShown ? "bg-green-400" : "bg-red-400"
            } py-2 px-4 rounded-xl`}
          >
            {isShown ? "Show Text" : "Hide Text"}
          </button>
          <div className="flex  flex-col items-center justify-center text-bold text-xl ">
            Text:{" "}
            <p
              className={`text-center w-full md:w-1/2  p-2 ${
                !isShown && "rounded-xl border"
              } `}
            >
              {(() => {
                if (!isShown) {
                  return text;
                } else {
                  return "";
                }
              })()}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Body;

// @Hasan18