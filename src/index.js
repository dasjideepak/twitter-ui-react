import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";

import LeftSideBar from "../src/components/LeftSideBar.jsx";
import MiddleBar from "../src/components/MiddleBar.jsx";
import RightSideBar from "../src/components/RightSideBar.jsx";

function App() {
  return (
    <div className="container">
      <LeftSideBar />
      <MiddleBar />
      <RightSideBar />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
