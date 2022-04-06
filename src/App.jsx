import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomeScreen from "./pages/home/HomeScreen";
import MovieScreen from "./pages/movie/MovieScreen";
import SearchScreen from "./pages/search/SearchScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movie/:id" element={<MovieScreen />} />
          <Route path="/search" element={<SearchScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
