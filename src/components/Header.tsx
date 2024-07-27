import { AppBar, Box, Toolbar } from "@mui/material";
import SearchForm from "@/components/SearchForm";

export default function Header() {
  return (
    <Box className="box">
      <AppBar position="fixed">
        <Toolbar className="toolbar">
          <img src="/logo.png" alt="logo" className="logo" draggable="false" />
          <SearchForm />
          <ul className="">
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
