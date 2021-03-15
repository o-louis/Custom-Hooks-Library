import { useState } from "react";

const useArray = (initialArray = []) => {
  const [value, setValue] = useState(initialArray);

  const { length } = value;

  const push = (value) => {
    setValue(prevState => [...prevState, value]);
  }

  const shift = () => {
    setValue(prevState => prevState.splice(1));
  }

  const pop = () => {
    setValue(prevState => prevState.slice(0, -1))
  }

  const removeByItem = (value) => {
    setValue(prevState => prevState.filter(item => item !== value))
  }

  const clear = () => {
    setValue(() => []);
  }

  return {
      value,
      length,
      push,
      shift,
      pop,
      removeByItem,
      clear,
  };
};

export default useArray;
