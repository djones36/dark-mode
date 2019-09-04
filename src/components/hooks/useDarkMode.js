import { useEffect } from "react";
import { useLocalStorage } from "./useLocalstorage";

export const useDarkMode = intialValue => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", intialValue);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};
