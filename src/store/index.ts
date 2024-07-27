import { create } from "zustand";

interface MovieQuery {
  searchValue: string;
  page: string;
  imdbID: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setSearchValue: (value: string) => void;
  setPage: (value: string) => void;
  setImdbID: (value: string) => void;
}

const useSearchStore = create<MovieQueryStore>((set) => ({
  movieQuery: {
    searchValue: "pokemon",
    page: "",
    imdbID: localStorage.getItem("imdbID") || "",
  },
  setSearchValue: (value) =>
    set((state) => ({
      movieQuery: { ...state.movieQuery, searchValue: value },
    })),
  setPage: (value) =>
    set((state) => ({ movieQuery: { ...state.movieQuery, page: value } })),
  setImdbID: (id) => {
    localStorage.setItem("imdbID", id);
    set((state) => ({ movieQuery: { ...state.movieQuery, imdbID: id } }));
  },
}));

export default useSearchStore;
