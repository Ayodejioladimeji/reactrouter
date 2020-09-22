import React, { useState } from "react";
import Housemates from "../housemate/Housemates";

function Voting() {
  const data = [
    {
      id: 0,
      name: "Dorathy",
      image: "./images/Ellipse 1.png",
      votes: 0,
    },
    {
      id: 1,
      name: "Nengi",
      image: "./images/Nengi.jpg",
      votes: 0,
    },
    {
      id: 2,
      name: "Erica",
      image: "./images/erica.jpg",
      votes: 0,
    },
    {
      id: 3,
      name: "Laycon",
      image: "./images/laycon.jpg",
      votes: 0,
    },
    {
      id: 4,
      name: "Prince",
      image: "./images/prinebbn.jpg",
      votes: 0,
    },
    {
      id: 5,
      name: "Ozo",
      image: "./images/ozo.jpg",
      votes: 0,
    },
  ];

  const [housemates, setHousemates] = useState(data);

  return (
    <div className="grid grid-cols-2 gap-4">
      {housemates.map((housemate) => (
        <Housemates key={housemate.id} housemate={housemate} />
      ))}
    </div>
  );
}

export default Voting;
