import { useEffect, useState } from "react";

type SetState<T> = (value: T | ((prevState: T) => T)) => void;

const usePreviousSearch = (): [string[], SetState<string[]>] => {
  const [state, setState] = useState<string[]>([]);

  useEffect(() => {
    const previous = JSON.parse(localStorage.getItem("previousSearch") || "[]") || [];
    setState(previous);
  }, []);

  function handleState(inputState: any) {
    const newState = [inputState, ...state.slice(0, 4)];
    setState(newState);
    localStorage.setItem("previousSearch", JSON.stringify(newState));
  }

  return [state, handleState];
};

export default usePreviousSearch;
