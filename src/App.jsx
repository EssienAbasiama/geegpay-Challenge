import { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <>
      <div className="body_container">
        <SideBar />
        {/* <Headers /> */}
      </div>
    </>
  );
}

export default App;
