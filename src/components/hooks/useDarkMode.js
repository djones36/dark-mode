import React from "react";
import useLocalStorage from "./useLocalstorage";

export const useDarkMode = intialValue => {
  const [darkMode, setDarkMode] = useLocalStorage("dark", intialValue);
  if (darkMode){
    document.body.classList.add('dark');
  } else {
      document.body.classList.remove('dark';)
  }
  return [darkMode, setDarkMode];
};
