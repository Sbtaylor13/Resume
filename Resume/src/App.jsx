import React from "react";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Info from "./components/Info";

const App = () => {
  return (
    <>
      <div className="bg-black font-[style] h-screen text-white text-center text-6xl p-3">
        <div className="bg-[url('./assets/bg.JPG')] bg-no-repeat bg-cover w-screen h-screen -ml-4 -mt-4">
          <Home />
        </div>
        <div id="info" className="w-screen -ml-4 -mt-4 h-3/5 bg-black">
          <Info />
        </div>
        <div className="w-screen -ml-4 -mt-4 h-full">
          <Resume />
        </div>
      </div>
    </>
  );
};

export default App;
