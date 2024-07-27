import { Route, Routes } from "react-router-dom";
import MoviesById from "@/pages/MoviesById";
import Movies from "@/pages/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie/:id" element={<MoviesById />} />
    </Routes>
  );
}

export default App;
