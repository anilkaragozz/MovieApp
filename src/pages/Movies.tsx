import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";
import Paginations from "@/components/Paginations";
import SearchForm from "@/components/SearchForm";

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MovieCard />
      <Paginations />
    </>
  );
}

export default Movies;
