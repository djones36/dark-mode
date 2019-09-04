import React from "react";
import useLocalStorage from "./useLocalstorage";

export const useDarkMode = intialValue => {
  const [darkMode, setDarkMode] = useLocalStorage("darkknight", intialValue);
  useEffect(() => {
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add("darkknight");
      } else {
        document.body.classList.remove("darkknight");
      }
    }, [darkMode]);
    return () => {
      cleanup;
    };
  }, [input]);
  return [darkMode, setDarkMode];
};
