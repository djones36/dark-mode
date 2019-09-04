import { useState } from "react";
//custom hook for local storage
export const useLocalStorage = (key, intitialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : intitialValue;
  });
  const setValue = value => {
    //save state
    setStoredValue(value);
    //save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
