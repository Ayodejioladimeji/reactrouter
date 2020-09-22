import React from "react";

function Housemates({ housemate }) {
  return (
    <div>
      <div class="card md:flex lg:flex flex-wrap md:p-2 lg:p-2 text-center my-2 shadow-lg border-t-2 border-blue-700 rounded py-2 ">
        <div class="img text-center lg:m-auto  lg:w-24 lg:flex lg:justify-center lg:items-center">
          <img
            src={housemate.image}
            alt="Dorathy"
            class="rounded-full w-12 h-12 m-auto lg:w-20 lg:h-20 img "
          />
        </div>
        <div class="lg:text-center lg:m-auto">
          <h2 class="text-gray-700 p-2 font-bold text-lg">{housemate.name}</h2>
          <div class="shadown-lg w-full m-auto flex justify-center">
            <p class=" dec border-2 py-1 px-6 py-2 cursor-pointer font-bold text-gray-900">
              -
            </p>
            <p class="text-gray-900 font-bold border-2 px-8 py-2 votes">
              {housemate.vote}
            </p>
            <p class=" inc border-2 py-1 px-6 py-2 cursor-pointer font-bold text-gray-900">
              +
            </p>
          </div>
        </div>
        <div class="text-red-400 text-sm mx-24 md:mr-54 md-w-full lg:w-full lg:ml-64 warn show">
          {" "}
          votes exceeded{" "}
        </div>
      </div>
    </div>
  );
}

export default Housemates;
