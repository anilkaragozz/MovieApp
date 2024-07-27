import Pagination from "@mui/material/Pagination";

export default function Paginations() {
  return (
    <Pagination
      className="pagination"
      count={10}
      variant="outlined"
      color="primary"
    />
  );
}
