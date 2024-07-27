import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "./api";
import { Movie } from "@/components/MovieCard";
import useSearchStore from "@/store/index";

const apikey = import.meta.env.VITE_OMDB_API_KEY;

export function useGetMovies() {
  const movieQuery = useSearchStore((s) => s.movieQuery);

  return useQuery<Movie[]>({
    queryKey: ["getMovies"],
    queryFn: () =>
      axiosClient
        .get(`/`, {
          params: {
            s: `${movieQuery.searchValue}`,
            apikey: `${apikey}`,
          },
        })
        .then((res) => res.data.Search),
  });
}

export function useGetMovieBySearchFormValues() {
  const movieQuery = useSearchStore((s) => s.movieQuery);

  return useQuery<Movie[]>({
    queryKey: ["getMovieBySearchFormValues"],
    queryFn: () =>
      axiosClient
        .get(`/`, {
          params: {
            s: `${movieQuery.searchValue}`,
            i: `${movieQuery.imdbID}`,
            y: `${movieQuery.year}`,
            t: `${movieQuery.title}`,
            apikey: `${apikey}`,
          },
        })
        .then((res) => res.data.Search),
  });
}
