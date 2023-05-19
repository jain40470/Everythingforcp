import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Compiler from "./Component/Compiler/Compiler";
import Ladder from "./Component/Ladder/Ladder";
import Cfvis from "./Component/Visualize/Cfvis";
import WorkshopPage from "./Component/Workshop/WorkshopPage";
import Footer from "./Component/Footer";

export default function App() {
  const [count, setCount] = useState(0);

  const [Vis, setVis] = useState(false);

  function handlevis() {
    setVis(!Vis);
  }

  return (
    <>
      <div className="w-full bg-blue-900">
        <div className="px-4 py-2 flex justify-between">
          <div>
            <h1 className="text-white font-bold text-2xl">PAPPU CODER</h1>
          </div>

          <div className="hidden md:flex">
            <ul className="flex text-white items-center">
              <button
                type="button"
                className="hover:text-cyan-400 font-extrabold px-5 text-xl"
                onClick={() => {
                  setCount(0);
                }}
              >
                CF VIS
              </button>

              <button
                className="hover:text-cyan-400 font-extrabold px-5 text-xl"
                onClick={() => {
                  setCount(1);
                }}
              >
                AAA LADDER
              </button>

              <button
                className="hover:text-cyan-400 font-extrabold px-5 text-xl"
                onClick={() => {
                  setCount(2);
                }}
              >
                COMPILER
              </button>

              <button
                className="hover:text-cyan-400 font-extrabold px-5 text-xl"
                onClick={() => {
                  setCount(3);
                }}
              >
                SESSION
              </button>
            </ul>
          </div>

          <div onClick={handlevis} className="block md:hidden">
            {!Vis ? (
              <AiOutlineMenu size={30} className="text-white" />
            ) : (
              <AiOutlineClose size={30} className="text-white" />
            )}
          </div>

          <div
            className={
              Vis
                ? "w-full bg-blue-900 text-white absolute top-[90px] left-0 flex justify-center text-center"
                : "absolute left-[-100%]"
            }
          >
            <ul>
              <li>
                <button
                  onClick={() => {
                    setCount(0);
                  }}
                >
                  CF VIS
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCount(1);
                  }}
                >
                  AAA LADDER
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCount(2);
                  }}
                >
                  COMPILER
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCount(2);
                  }}
                >
                  SESSION
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {count === 0 && <Cfvis />}
      {count === 1 && <Ladder />}
      {count === 2 && <Compiler />}
      {count === 3 && <WorkshopPage />}
      {count !== 0 && <Footer />}
    </>
  );
}
{
  /* <Cfvis /> */
}
{
  /* <Workshop /> */
}
{
  /* <WorkshopD /> */
}
{
  /* <WorkshopPage /> */
}
{
  /* <Compiler /> */
}
{
  /* <Ladder /> */
}
