import { useState } from "react";

export const useLocalStorage = (key, intitialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : intitialValue;
  });
  return [storedValue];
};
