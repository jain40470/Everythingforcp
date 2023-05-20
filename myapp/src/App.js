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
      <div className="w-full bg-blue-800">
        <div className="px-4 py-4 flex justify-between">
          <div>
            <h1 className="text-white font-bold text-2xl">EVERYTHING FOR CP</h1>
          </div>

          <div className="hidden md:flex">
            <ul className="flex text-white items-center">
              <button
                type="button"
                className=""hover:text-blue-900 hover:bg-white font-extrabold px-5 text-xl"
                onClick={() => {
                  setCount(0);
                }}
              >
                VISUALIZEME
              </button>

              <button
                className="hover:text-blue-900 hover:bg-white font-extrabold px-5 text-xl"
                onClick={() => {
                  setCount(1);
                }}
              >
                ELEVATOR
              </button>

              <button
                className="hover:text-blue-900 hover:bg-white font-extrabold px-5 text-xl"
                onClick={() => {
                  setCount(2);
                }}
              >
                COMPILER
              </button>

              <button
                className="hover:text-blue-900 hover:bg-white font-extrabold px-5 text-xl"
                onClick={() => {
                  setCount(3);
                }}
              >
                WORKSHOP
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
                <button className="hover:text-blue-900 hover:bg-white"
                  onClick={() => {
                    setCount(0);
                  }}
                >
                  VISUALIZEME
                </button>
              </li>
              <li>
                <button className="hover:text-blue-900 hover:bg-white"
                  onClick={() => {
                    setCount(1);
                  }}
                >
                  ELEVATOR
                </button>
              </li>
              <li>
                <button className="hover:text-blue-900 hover:bg-white"
                  onClick={() => {
                    setCount(2);
                  }}
                >
                  COMPILER
                </button>
              </li>
              <li>
                <button className="hover:text-blue-900 hover:bg-white"
                  onClick={() => {
                    setCount(2);
                  }}
                >
                  WORKSHOP
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
