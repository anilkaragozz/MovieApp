import { useGetMovieById } from "@/service/queries";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Loading from "@/components/Loading";
import { useEffect } from "react";

function MoviesById() {
  const { data, isLoading, error, refetch } = useGetMovieById();

  useEffect(() => {
    refetch();
  }, [refetch, data]);

  return (
    <Box>
      {isLoading && <Loading />}
      {error && <div className="error-message">Error: {error.message}</div>}
      {data && (
        <Box>
          <Card className="movie-detail">
            <CardMedia
              component="img"
              className="movie-detail-image"
              image={data.Poster}
              alt={data.Title}
              draggable="false"
            />
            <CardContent className="movie-detail-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="title"
              >
                {data.Title}
              </Typography>
              {[
                { label: "Plot", value: data.Plot },
                { label: "Genre", value: data.Genre },
                { label: "Director", value: data.Director },
                { label: "Writer", value: data.Writer },
                { label: "Actors", value: data.Actors },
                { label: "Release Year", value: data.Year },
                { label: "Type", value: data.Type },
                { label: "Rated", value: data.Rated },
                { label: "Released", value: data.Released },
                { label: "Runtime", value: data.Runtime },
                { label: "Language", value: data.Language },
                { label: "Country", value: data.Country },
                { label: "Awards", value: data.Awards },
                { label: "Metascore", value: data.Metascore },
                { label: "IMDB Id", value: data.imdbID },
                { label: "IMDB Rating", value: data.imdbRating },
                { label: "IMDB Votes", value: data.imdbVotes },
              ].map((item, index) => (
                <Typography key={index} variant="body2" className="text">
                  <span className="title">{item.label}:</span> {item.value}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
}

export default MoviesById;
