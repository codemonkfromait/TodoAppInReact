import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import Apptheme from "../Colors";

export default function MainComponent() {
  const [theme, setTheme] = useContext(ThemeContext);
  const currentTheme = Apptheme[theme];

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        Color: `${currentTheme.textColor}`,
        border: `${currentTheme.border}`,
        textAlign: "center",
        height: "100vh",
        fontSize: `${currentTheme.fontSize}`,
      }}
    >
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        className="btn btn-info text-center mt-6"
      >
        Click to toggle theme
      </button>

      <p
        style={{
          Color: `${currentTheme.textColor}`,
        }}
      >
        Hello This is a great themetoggler using context api
      </p>
    </div>
  );
}
