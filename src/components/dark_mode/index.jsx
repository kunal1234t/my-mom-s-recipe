import React, { useState } from "react";
import "./App.css";

const Dark = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  };

  return (
    <div className="app">
      <header>
        <h1>My Website</h1>
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <main>
        <p>Welcome to my website! Explore light and dark modes.</p>
      </main>
    </div>
  );
};

export default Dark;
