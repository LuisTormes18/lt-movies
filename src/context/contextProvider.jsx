import { useState, createContext, useMemo } from "react";
import { instanceAxios } from "./../utils";
export const appContext = createContext();

const ContextProvider = ({ children }) => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [trailerId, setTrailerId] = useState({});

  function handleSeeTrailer(movieId) {
    const api_key = import.meta.env.VITE_API_KEY;
     instanceAxios
      .get(`/movie/${movieId}/videos?api_key=${api_key}`)
      .then((resp) => {
        const active = resp.data.results.pop();
        setTrailerId(active.key);
        setModalOpen(true);
        setLoading(false);
      });
  }

  const contextValue = {
    modalIsOpen,
    setModalOpen,
    trailerId,
    handleSeeTrailer,
    loading,
  };
  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  );
};
export default ContextProvider;
