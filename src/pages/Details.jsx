import Axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
    const {id} = useParams();
    const [data,setData] = useState(null);

    console.log(id)
    const getMovieDetail = useCallback(async()=>{
        const res = await Axios(`https://api.themoviedb.org/3/movie/${id}?api_key=d1414af8ac4a51d13073f4b635d40f88&language=en-US`);
        if(res){
            console.log(res)
            setData(res.data);
        }
    },[])

    useEffect(()=>{
        getMovieDetail();
    },[getMovieDetail])
    return(
        <div className="p-4 d-flex">
            <div className="">
                <img src={data ? `https://image.tmdb.org/t/p/original${data.poster_path}` : "https://dummyimage.com/270x330/dfdfdf/000"} height="300" width="270" alt="poster" />
            </div>
            <div className="mx-3">
                <p className="fs-4 mb-0">{data ? data.title : ""} <span className="" style={{color: "#9b9b9b"}}>({data ? data.vote_average : ""})</span></p>
                <p className="mb-0 fs-5">{data ? data.release_date.split("-")[0] : ""} | {data ? data.runtime : ""}min | {data ? data.genres[0].name : ""}</p>
                {/* <p className="fs-5 mb-0">Cast : <span style={{color: "#4a4a4a"}}>Actor</span></p> */}
                <p className="fs-5">Description : <span>{data ? data.overview : ""}</span></p>
            </div>
        </div>
    )
}

export default Details;