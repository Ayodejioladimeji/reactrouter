import React from "react";
import Voting from "./components/voting/Voting";

function App() {
  return (
    <>
      <div
        class=""
        style={{
          backgroundImage: "url(./images/background.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      >
        <div class="container md:w-3/4 lg:w-3/4 m-auto bg-white p-4 rounded bg-gray-100">
          <div class="view">
            <div class="w-full lg:w-1/2 lg:m-auto h-40 bg-blue-800 p-4 rounded">
              <p class="text-center text-white font-bold text-lg">
                My Available Votes
              </p>
              <h1 class="text-center text-6xl font-bold text-gray-300 px-2 -mt-4 av">
                100
              </h1>
              <div class="h-2 bg-yellow-600 rounded shadow-sm transition-all duration-100 ease-linear mt-6 scale"></div>
            </div>
          </div>
          <Voting />
        </div>
      </div>
    </>
  );
}

export default App;
