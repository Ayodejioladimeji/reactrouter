import React, { useState } from "react";
import ListOfUser from "../shared/ListOfUser";
import Users from "../shared/Users";

function Landing() {
  const [location, setLocation] = useState("");

  const modifyLocation = (cl) => {
    setLocation(cl);
  };

  return (
    <div className="w-full h-screen bg-red-300">
      <h1 className="text-center text-4xl">This is the landing page</h1>

      <div>
        <Users modifyLocation={modifyLocation} />
        {location === "viewusers" ? <ListOfUser /> : "nothing"}
      </div>
    </div>
  );
}

export default Landing;
