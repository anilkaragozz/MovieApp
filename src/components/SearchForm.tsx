import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useSearchStore from "@/store/index";

const SearchFormSchema = z.object({
  searchValue: z.string(),
  imdbID: z.string(),
  year: z.string(),
  title: z.string(),
});

export type SearchData = z.infer<typeof SearchFormSchema>;

function SearchForm() {
  const searchForm = useForm<SearchData>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      searchValue: "",
      imdbID: "",
      year: "",
      title: "",
    },
  });

  const setSearchValue = useSearchStore((store) => store.setSearchValue);
  const setImdbID = useSearchStore((store) => store.setImdbID);
  const setYear = useSearchStore((store) => store.setYear);
  const setTitle = useSearchStore((store) => store.setTitle);

  const onSubmit = (data: SearchData) => {
    console.log(data);
    setSearchValue(data.searchValue);
    setImdbID(data.imdbID);
    setYear(data.year);
    setTitle(data.title);
  };

  return (
    <>
      <form
        onSubmit={searchForm.handleSubmit(onSubmit)}
        className="search-form"
      >
        <TextField
          id="searchValue"
          label="Any word"
          type="text"
          {...searchForm.register("searchValue")}
          variant="outlined"
        />

        <TextField
          id="imdbID"
          type="text"
          {...searchForm.register("imdbID")}
          label="IMDB ID"
          variant="outlined"
        />
        <TextField
          id="year"
          type="number"
          {...searchForm.register("year")}
          label="Year"
          variant="outlined"
        />
        <TextField
          id="title"
          type="text"
          {...searchForm.register("title")}
          label="Title"
          variant="outlined"
        />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </>
  );
}

export default SearchForm;
