import React from "react";

function ListOfUser({ modifyLocation }) {
  const userList = [
    {
      id: 1,
      name: "jerry",
    },
    {
      id: 2,
      name: "amina",
    },
    {
      id: 3,
      name: "femi",
    },
    {
      id: 4,
      name: "shermin",
    },
    {
      id: 5,
      name: "Daniel",
    },
  ];
  return (
    <div>
      {userList.map((user) => (
        <p className="p-2 bg-green-200">{user.name}</p>
      ))}
    </div>
  );
}

export default ListOfUser;
