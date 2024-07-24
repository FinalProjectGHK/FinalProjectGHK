import React from "react";
import { useAuth } from "../components/contexts/AuthContext";

function Record() {
  const { currentUser } = useAuth();
  return (
    <div>
      Current User:{" "}
      {currentUser ? currentUser.email : "No user is currently logged in"}
    </div>
  );
}

export default Record;
