import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <Box className="box">
      <AppBar position="fixed">
        <Toolbar className="toolbar">
          <img src="/logo.png" alt="logo" className="logo" draggable="false" />
          <ul className="">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/movies">Movies</a>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
