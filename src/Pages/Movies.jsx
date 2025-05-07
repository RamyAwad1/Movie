import { useEffect, useState } from "react";
import axios from "axios";

function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7e7e2b26b918ed77ee99eec0e3310101")
      .then((response) => {
        setMovies(response.data.results); 
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-4 text-center">Popular Movies</h2>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <div className="card h-100">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{movie.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
