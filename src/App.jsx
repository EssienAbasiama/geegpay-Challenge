import { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";

function App() {
  return (
    <>
      <div className="page-container">
        <SideBar />
        <div className="body">
          <Header />
          <MainBody />
        </div>
      </div>
    </>
  );
}

export default App;
