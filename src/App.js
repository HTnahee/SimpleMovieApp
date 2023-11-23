import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { movies } from './movieDummy'; //data를 import해서 가져오기
//import Movie from './Components/Movie';
//import Details from './Components/Details';
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from "./pages/Tv";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail";
import LoginPage from "./pages/LoginPage";

function App() {
  return(
    <div className="root-wrap">
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movies />} />
      <Route pate="/movie/:title" element={<MovieDetail />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/person" element={<Celebrity />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/loginpage" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
