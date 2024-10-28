import React, { useContext } from "react";
import { Dropdown } from "@carbon/react";
import { ThemeContext, themeData } from "./AuthThemeContext";

import "./_theme-dropdown.scss";

export const ThemeDropdown = ({ direction }) => {
  const theme = useContext(ThemeContext);

  const setTheme = (selectedItem) => {
    const bodyElement = document.body;
    bodyElement.className = selectedItem.value;
    theme.dispatch({ type: selectedItem });
  };

  return (
    <div className="carbon-theme-dropdown">
      <Dropdown
        direction={direction ? direction : "bottom"}
        id="theme-dropdown"
        items={themeData}
        itemToString={(item) => (item ? item.text : "")}
        onChange={(event) => setTheme(event.selectedItem)}
        selectedItem={theme ? theme.state.currentTheme : themeData[0]}
        // label="Select a theme"
        // titleText="Select a theme"
      />
    </div>
  );
};
