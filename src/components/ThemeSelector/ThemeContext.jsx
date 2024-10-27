"use client";
import React, { createContext, useReducer } from "react";

export const themeData = [
  {
    text: "System W/90",
    value: "carbon-theme--user-preference-white-90",
    bg: "red",
  },
  {
    text: "System 10/100",
    value: "carbon-theme--user-preference-10-100",
    bg: "red",
  },
  {
    text: "White",
    value: "carbon-theme--white",
    bg: "red",
  },
  {
    text: "Gray 10",
    value: "carbon-theme--g10",
    bg: "red",
  },
  {
    text: "Gray 90",
    value: "carbon-theme--g90",
    bg: "red",
  },
  {
    text: "Gray 100",
    value: "carbon-theme--g100",
    bg: "red",
  },
];

export const ThemeContext = createContext();

const initialState = {
  currentTheme: themeData[1],
};

const themeReducer = (state, action) => {
  switch (action.type.value) {
    case "carbon-theme--user-preference-white-90":
    case "carbon-theme--user-preference-10-100":
    case "carbon-theme--white":
    case "carbon-theme--g10":
    case "carbon-theme--g90":
    case "carbon-theme--g100":
      return { currentTheme: action.type };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </ThemeContext.Provider>
  );
}
