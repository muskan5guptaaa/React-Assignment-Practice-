import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserCard from "./UserCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <UserCard/>
  </React.StrictMode>
);
