import { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Dark Mode Activated");
  };
  return (
    <>
      <div className="page-container">
        <SideBar darkModeTheme={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className={`body ${darkMode ? "dark-mode" : "light-mode"}`}>
          <Header darkModeTheme={darkMode} />
          <MainBody darkModeTheme={darkMode} />
        </div>
      </div>
    </>
  );
}

export default App;
