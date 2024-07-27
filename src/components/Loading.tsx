import { Box, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <Box className="loading">
      <CircularProgress />
    </Box>
  );
}

export default Loading;
