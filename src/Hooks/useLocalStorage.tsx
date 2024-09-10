import { useEffect, useState } from "react";

const useLocalStorage = <T,>(key: string, initialValue: T | (() => T)) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item
        ? JSON.parse(item)
        : initialValue instanceof Function
        ? (initialValue as () => T)()
        : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue instanceof Function ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue] as [T, typeof setStoredValue];
};

export default useLocalStorage;
