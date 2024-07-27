import { create } from "zustand";

interface MovieQuery {
  searchValue: string;
  imdbID: string;
  year: string;
  title: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setSearchValue: (value: string) => void;
  setImdbID: (value: string) => void;
  setYear: (value: string) => void;
  setTitle: (value: string) => void;
}

const useSearchStore = create<MovieQueryStore>((set) => ({
  movieQuery: {
    searchValue: "pokemon",
    imdbID: "",
    year: "",
    title: "",
  },
  setSearchValue: (value) =>
    set((state) => ({
      movieQuery: { ...state.movieQuery, searchValue: value },
    })),
  setImdbID: (value) =>
    set((state) => ({
      movieQuery: { ...state.movieQuery, imdbID: value },
    })),
  setYear: (value) =>
    set((state) => ({
      movieQuery: { ...state.movieQuery, year: value },
    })),
  setTitle: (value) =>
    set((state) => ({
      movieQuery: { ...state.movieQuery, title: value },
    })),
}));

export default useSearchStore;
