import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Loading } from "./components";

import ContextProvider from "./context/contextProvider";

const HomeScreen = lazy(() => import("./pages/home/HomeScreen"));
const MovieScreen = lazy(() => import("./pages/movie/MovieScreen"));
const SearchScreen = lazy(() => import("./pages/search/SearchScreen"));

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <Suspense fallback={<Loading />}>
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
