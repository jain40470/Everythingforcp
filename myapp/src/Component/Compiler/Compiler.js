import { useState } from "react";
import Editor from "@monaco-editor/react";
import NavbarC from "./NavbarC";
import Axios from "axios";

function Compiler() {
  // State variable to set users source code
  const [userCode, setUserCode] = useState(``);

  // State variable to set editors default language
  const [userLang, setUserLang] = useState("python");

  // State variable to set editors default theme
  const [userTheme, setUserTheme] = useState("vs-dark");

  // State variable to set editors default font size
  const [fontSize, setFontSize] = useState(20);

  // State variable to set users input
  const [userInput, setUserInput] = useState("");

  // State variable to set users output
  const [userOutput, setUserOutput] = useState("");

  // Loading state variable to show spinner
  // while fetching data
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize,
  };

  // Function to call the compile endpoint
  function compile() {
    setLoading(true);
    if (userCode === ``) {
      return;
    }

    // Post request to compile endpoint
    Axios.post(`http://localhost:800/compile`, {
      code: userCode,
      language: userLang,
      input: userInput,
    })
      .then((res) => {
        setUserOutput(res.data.output);
      })
      .then(() => {
        setLoading(false);
      });
  }

  // Function to clear the output screen
  function clearOutput() {
    setUserOutput("");
  }

  return (
    <div>
      <NavbarC
        userLang={userLang}
        setUserLang={setUserLang}
        userTheme={userTheme}
        setUserTheme={setUserTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <div>
        <div className="flex-col">
          {/* Editor code */}
          <div>
            <Editor
              options={options}
              height="calc(60vh - 60px)"
              width="100%"
              theme={userTheme}
              language={userLang}
              defaultLanguage="python"
              defaultValue="# Enter your code here"
              onChange={(value) => {
                setUserCode(value);
              }}
            />
          </div>
          <div className="mt-5 flex justify-center">
            <div>
              <h4>Input:</h4>
              <div className="border-2 border-black">
                <textarea
                  id="code-inp"
                  onChange={(e) => setUserInput(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="ml-4">
              <h4>Output:</h4>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  <pre>{userOutput}</pre>
                  <button
                    onClick={() => {
                      clearOutput();
                    }}
                    className="bg-blue-900 text-white mt-4 p-1"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-900 text-white hover:bg-white hover:text-blue-950 border-2 p-2 m-3 rounded-xl"
            onClick={() => compile()}
          >
            Run
          </button>
        </div>
      </div>
    </div>
  );
}

export default Compiler;
