import { z } from "zod";

export const SearchFormSchema = z.object({
  searchValue: z.string(),
});
export type SearchData = z.infer<typeof SearchFormSchema>;

export const MovieSchema = z.object({
  imdbID: z.string(),
  Title: z.string(),
  Year: z.string(),
  Poster: z.string(),
  Type: z.string(),
  Rated: z.string().optional(),
  Released: z.string().optional(),
  Runtime: z.string().optional(),
  Genre: z.string().optional(),
  Director: z.string().optional(),
  Writer: z.string().optional(),
  Actors: z.string().optional(),
  Plot: z.string().optional(),
  Language: z.string().optional(),
  Country: z.string().optional(),
  Awards: z.string().optional(),
  Metascore: z.string().optional(),
  imdbRating: z.string().optional(),
  imdbVotes: z.string().optional(),
});
export type Movie = z.infer<typeof MovieSchema>;

export const baseURL = `http://www.omdbapi.com`;
export const apikey = import.meta.env.VITE_OMDB_API_KEY;
