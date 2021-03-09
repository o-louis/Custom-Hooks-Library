import { useEffect, useState } from "react";

const useLocalStorage = (key, value) => {
  const [local, setLocal] = useState(() => {
    try {
      const localKey = localStorage.getItem(key);
      return localKey ? JSON.parse(localKey) : value;
    } catch {
      return value;
    }
  });

  useEffect(() => {
    local && localStorage.setItem(key, JSON.stringify(local));
  }, [key, local]);
  return [local, setLocal];
};

export default useLocalStorage;
