import React, { useCallback, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Axios from 'axios'


const Home = () => {

    const [data,setData] = useState([]);

    const getMovies = useCallback(async()=>{
        const res = await Axios('https://api.themoviedb.org/3/movie/upcoming?api_key=d1414af8ac4a51d13073f4b635d40f88&language=en-US');
        if(res){
            setData(res.data.results);
        }
    },[])

    useEffect(async()=>{
        getMovies();
    },[getMovies])
    return(
        <div className="movieCardContainer">
            {
                data && data.length>0 && data.map((val)=>{
                    return(
                        <MovieCard data={val} />
                    )
                })
            }
                   
        </div>
    )
}

export default Home;