import React from "react";
import { Link } from "react-router-dom";

function Users({ modifyLocation }) {
  return (
    <div>
      <Link
        onClick={() => modifyLocation("viewusers")}
        className="bg-blue-700 p-2 text-lg text-white m-2 rounded"
      >
        View user
      </Link>

      <Link
        onClick={() => modifyLocation("")}
        className="bg-blue-700 p-2 text-lg text-white m-2 rounded"
      >
        Update user
      </Link>
    </div>
  );
}

export default Users;
