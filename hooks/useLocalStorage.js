import { useCallback, useEffect, useState } from "react";

const useLocalStorage = (key, value = undefined) => {
  const [local, setLocal] = useState(undefined);

  const setKey = useCallback((localKey) => {
    localStorage.setItem(key, JSON.stringify(localKey));
    setLocal(localKey);
  });

  useEffect(() => {
    let localKey = local || value || JSON.parse(localStorage.getItem(key));
    if (localKey) {
      setKey(localKey);
    }
  }, [local, setKey]);
  return [local, setLocal];
};

export default useLocalStorage;
