import { useState, useEffect } from "react";

const useInput = (initialState) => {
  const [state, setState] = useState(initialState);

  function reset(newState = initialState) {
    setState(newState);
  }

  function handleInputChange({ target }) {
    setState(target.value);
  }

  return [state, handleInputChange, reset];
};

export default useInput;
