import { useState } from "react";

const useToggler = (initialState) => {
  const [value, setValue] = React.useState(initialState);

  const toggleValue = setValue((t) => !t);

  return [value, toggleValue];
};

export default useToggler;
