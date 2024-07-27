import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useSearchStore from "@/store/index";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, IconButton } from "@mui/material";
import { SearchData, SearchFormSchema } from "@/constants";

function SearchForm() {
  const searchForm = useForm<SearchData>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      searchValue: "",
    },
  });

  const setSearchValue = useSearchStore((store) => store.setSearchValue);
  const { watch } = searchForm;

  const onSubmit = (data: SearchData) => {
    console.log(data);
    setSearchValue(data.searchValue);
  };

  return (
    <>
      <form
        onSubmit={searchForm.handleSubmit(onSubmit)}
        className="search-form"
      >
        <InputBase
          {...searchForm.register("searchValue")}
          placeholder="Search…"
          className="search-input"
        />

        <IconButton
          type="submit"
          className="search-button"
          aria-label="search"
          disabled={!watch("searchValue").trim()}
        >
          <SearchIcon />
        </IconButton>
      </form>
    </>
  );
}

export default SearchForm;
