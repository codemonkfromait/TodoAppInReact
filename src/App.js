import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";

export default function App() {
  const themeinitial = useState("light");

  return (
    <ThemeContext.Provider value={themeinitial}>
      <Header />
    </ThemeContext.Provider>
  );
}
