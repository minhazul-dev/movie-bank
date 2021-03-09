import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MovieDetails = () => {

    const [movie, setMovie] =useState({});
    const apiKey = 'c14333f8290c2339397d6c9b0c4d2e38';
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        .then(response => response.json())
        .then(data => setMovie(data))
    },[])

    const{id} = useParams()
    return (
        <div className="container my-5">
        <div className="row">
            <div className="col-md-6">
                <img className="img-fluid" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt=""/>
            </div>
            <div className="col-md-6">
                <h3>{movie.title}</h3>
                <p>Release Date {movie.release_date}</p>
                <p>{movie.overview}</p>
                <p>Popularity : {movie.popularity}</p>
                <p> Average Vote : {movie.vote_average}</p>
            </div>
        </div>
    </div>
    );
};

export default MovieDetails;