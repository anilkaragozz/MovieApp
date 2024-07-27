import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/service/api";
import { apikey, Movie } from "@/constants";
import useSearchStore from "@/store/index";

export function useGetMovies() {
  const movieQuery = useSearchStore((s) => s.movieQuery);

  return useQuery<Movie[]>({
    queryKey: ["getMovies", movieQuery],
    queryFn: () =>
      axiosClient
        .get(`/`, {
          params: {
            s: `${movieQuery.searchValue}`,
            apikey: `${apikey}`,
            page: `${movieQuery.page}`,
          },
        })
        .then((res) => res.data.Search),
  });
}

export function useGetMovieBySearchFormValues() {
  const movieQuery = useSearchStore((s) => s.movieQuery);

  return useQuery<Movie[]>({
    queryKey: ["getMovieBySearchFormValues", movieQuery],
    queryFn: () =>
      axiosClient
        .get(`/`, {
          params: {
            s: `${movieQuery.searchValue}`,
            y: `${movieQuery.searchValue}`,
            t: `${movieQuery.searchValue}`,
            page: `${movieQuery.page}`,
            apikey: `${apikey}`,
          },
        })
        .then((res) => res.data.Search),
  });
}

export function useGetMovieById() {
  const movieQuery = useSearchStore((s) => s.movieQuery);

  return useQuery<Movie>({
    queryKey: ["getMovieById", movieQuery],
    queryFn: () =>
      axiosClient
        .get(`/`, {
          params: {
            i: `${movieQuery.imdbID}`,
            apikey: `${apikey}`,
          },
        })
        .then((res) => res.data),
  });
}
