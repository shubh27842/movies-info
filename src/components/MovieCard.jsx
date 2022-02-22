import React from "react";
import { Link } from "react-router-dom";
import "./css/MovieCard.css"

const MovieCard = ({data}) => {
    return(
        <div className="movieCard">
            <div>
                <Link to={`/detail/${data.id}`} ><img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} height="300" width="270" alt="movie" className="moviePoster" /></Link>
            </div>
            <div className="px-2 py-1">
                <div className="textBox1">
                    <p className="mb-0 fw-bold w-75">{data.title}</p>
                    <p className="mb-0">({data.vote_average})</p>
                </div>
                <p className="mb-0 cardDesc">
                    {data.overview} 
                </p>
            </div>
        </div>
    )
}

export default MovieCard;