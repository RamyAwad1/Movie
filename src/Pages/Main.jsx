import { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";



function Home() {
    const [movies, setMovies] = useState([]);



    useEffect(() => {
        axios("https://api.themoviedb.org/3/movie/popular?api_key=7e7e2b26b918ed77ee99eec0e3310101")
            .then((moviesResponse) => {
                setMovies(moviesResponse.data.results.slice(0, 10));
            })
    }, []);
    return (

        <>
            <h1 style={{ textAlign: "center", padding: "15px" }}>Welcome to the world of movies</h1>
            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} style={{ textAlign: "center", display: 'block', textDecoration: 'none', color: 'black' }}>

                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title} />
                                <br />
                                <p>{movie.title}</p>
                            </Link>
                        </li>
                    )
                }
                )}
            </ul>

        </>
    )

}
export default Home