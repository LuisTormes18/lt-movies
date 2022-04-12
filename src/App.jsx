import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomeScreen from "./pages/home/HomeScreen";
import MovieScreen from "./pages/movie/MovieScreen";
import SearchScreen from "./pages/search/SearchScreen";
import ContextProvider from "./context/contextProvider";

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/movie/:media" element={<MovieScreen />} />
            <Route path="/search" element={<SearchScreen />} />
          </Routes>
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
