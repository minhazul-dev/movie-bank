import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleMovie from '../singleMovie/SingleMovie';

const Movies = () => {

    const [movies, setMovies]= useState([]);
    const apiKey = 'c14333f8290c2339397d6c9b0c4d2e38'

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
        .then(response =>response.json())
        .then(data => setMovies(data.results))
        
    },[])
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    movies.map(movie=><SingleMovie movie={movie}></SingleMovie>)
                }
            </div>
            
        </div>
    );
};

export default Movies;