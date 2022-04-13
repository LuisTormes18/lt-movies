import {lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ContextProvider from "./context/contextProvider";

const HomeScreen = lazy(() => import("./pages/home/HomeScreen")) ;
const MovieScreen =  lazy(() => import("./pages/movie/MovieScreen"));
const SearchScreen = lazy(() => import("./pages/search/SearchScreen"));

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/movie/:media" element={<MovieScreen />} />
              <Route path="/search" element={<SearchScreen />} />
            </Routes>
          </Suspense>
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
