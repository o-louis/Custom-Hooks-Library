import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [local, setLocal] = useState(null);

  useEffect(() => {
  }, [local]);
  
  return [local, setLocal];
}

export default useLocalStorage;
