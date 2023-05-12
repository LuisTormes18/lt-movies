"use client";
import { createContext, useState } from "react";
import instanceAxios from "../utils/axios";

export const appContext = createContext({});

const ContextProvider = ({ children }: any) => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentMovieId, setCurrentMovieId] = useState(null);
  const [trailerId, setTrailerId] = useState({});

  function handleSeeTrailer(movieId: any, media_type: any) {
    if (movieId === currentMovieId) {
      setModalOpen(true);
      return;
    }

    setCurrentMovieId(movieId);

    const api_key = process.env.NEXT_PUBLIC_API_KEY;
    setModalOpen(true);
    setLoading(true);
    instanceAxios.get(`/${media_type}/${movieId}/videos?api_key=${api_key}`).then((resp) => {
      const active = resp.data.results.pop();
      setTrailerId(active.key);
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
  return <appContext.Provider value={contextValue}>{children}</appContext.Provider>;
};
export default ContextProvider;
