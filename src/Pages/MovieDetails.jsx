import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=7e7e2b26b918ed77ee99eec0e3310101`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
            alt={movie.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h2>{movie.title}</h2>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
