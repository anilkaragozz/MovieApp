import {
  Box,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import { useGetMovies } from "@/service/queries";
import Loading from "@/components/Loading";
import useSearchStore from "@/store";
import { useNavigate } from "react-router-dom";
import { Movie } from "@/constants";
import { useEffect } from "react";

export default function MovieCard() {
  const { data, isLoading, error, refetch } = useGetMovies();

  const setImdbID = useSearchStore((s) => s.setImdbID);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [refetch, data]);

  return (
    <>
      <Box>
        {isLoading && <Loading />}
        {error && <div className="error-message">Error: {error.message}</div>}
        <Grid container spacing={2} columns={10}>
          {data?.map((movie: Movie) => (
            <Grid
              item
              className="movie-grid-item"
              xs={8}
              sm={6}
              md={4}
              lg={2}
              key={movie.imdbID}
              onClick={() => {
                setImdbID(movie.imdbID);
                localStorage.setItem("imdbID", movie.imdbID);
                navigate(`/movie/${movie.imdbID}`);
              }}
            >
              <Card className="movie-card">
                <CardMedia
                  component="img"
                  className="movie-card-media"
                  image={movie.Poster}
                  alt={movie.Title}
                  draggable="false"
                />
                <CardContent className="movie-card-content">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="title"
                  >
                    {movie.Title}
                  </Typography>
                  <Typography variant="body2" className="text">
                    <span className="title"> IMDB Id: </span> {movie.imdbID}
                  </Typography>
                  <Typography variant="body2" className="text">
                    <span className="title">Release Year: </span> {movie.Year}
                  </Typography>
                  <Typography variant="body2" className="text">
                    <span className="title"> Type: </span> {movie.Type}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
