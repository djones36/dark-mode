import { useEffect } from "react";
import { useLocalStorage } from "./useLocalstorage";

export const useDarkMode = intialValue => {
  const [darkMode, setDarkMode] = useLocalStorage("darkknight", intialValue);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkknight");
    } else {
      document.body.classList.remove("darkknight");
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};
