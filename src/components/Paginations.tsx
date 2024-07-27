import useSearchStore from "@/store";
import { Pagination } from "@mui/material";

export default function Paginations() {
  const setPage = useSearchStore((s) => s.setPage);

  return (
    <Pagination
      className="pagination"
      count={10}
      variant="outlined"
      color="primary"
      onChange={(e, page) => {
        console.log(e);
        setPage(page.toString());
      }}
    />
  );
}
