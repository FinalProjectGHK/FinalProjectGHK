import React from "react";

function Record({ isLoggedIn }) {
  return <div>Status: {isLoggedIn ? "Login" : "Logout"}</div>;
}

export default Record;
