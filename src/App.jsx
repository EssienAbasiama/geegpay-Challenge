import { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="page-container">
        <SideBar />
        <div className="body">
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
