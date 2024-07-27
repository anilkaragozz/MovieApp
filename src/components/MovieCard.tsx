import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useGetMovies } from "@/service/query";
import { z } from "zod";
import Loading from "@/components/Loading";

const MovieSchema = z.object({
  imdbID: z.string(),
  Title: z.string(),
  Year: z.string(),
  Poster: z.string(),
  Type: z.string(),
});
export type Movie = z.infer<typeof MovieSchema>;

export default function MovieCard() {
  const { data, isLoading, error } = useGetMovies();

  if (isLoading) return <Loading />;
  if (error) {
    return <div className="error-message">Error: {error.message}</div>;
  }
  console.log(data);
  return (
    <>
      <Grid container className="movie-grid-container">
        {data?.map((movie: Movie) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={movie.imdbID}
            className="movie-grid-item"
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
                  Title: {movie.Title}
                </Typography>
                <Typography variant="body2" className="text">
                  IMDB Id: {movie.imdbID}
                </Typography>
                <Typography variant="body2" className="text">
                  Release Year: {movie.Year}
                </Typography>
                <Typography variant="body2" className="text">
                  Type: {movie.Type}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
