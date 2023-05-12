import { useState } from "react";

const useInput = (initialState: any) => {
  const [state, setState] = useState(initialState);

  function reset(newState = initialState) {
    setState(newState);
  }

  function handleInputChange({ target }: any) {
    setState(target.value);
  }

  return [state, handleInputChange, reset];
};

export default useInput;
