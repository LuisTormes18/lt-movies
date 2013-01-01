import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomeScreen from "./pages/home/HomeScreen";
import MovieScreen from "./pages/movie/MovieScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={HomeScreen()} />
          <Route path="/movie" element={MovieScreen()} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
