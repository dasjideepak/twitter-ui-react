import React from "react";
import LeftSideBar from "../src/components/LeftSideBar.jsx";
import MiddleBar from "../src/components/MiddleBar.jsx";
import RightSideBar from "../src/components/RightSideBar.jsx";

export default function App() {
  return (
    <div class="container">
      <LeftSideBar />
      <MiddleBar />
      <RightSideBar />
    </div>
  );
}
