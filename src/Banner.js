import React, {useState, useEffect} from 'react';
import "./Banner.css"
import axios from "./axios";
import requests from "./requests";
function Banner() {
    const [movie, setMovie]= useState([]);

    useEffect (() =>{
    async function fetchData () {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request?.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]
        );
         return requests;
        }
        fetchData();
    },[]);
    // console.log(movie)
    function truncate (str, n) {
        return str?.length > n ? str.substr(0, n-1) + "...": str;
    }
    return (
       
       <header
       className="banner"
       style={{
           backgroundSize: "cover",
           backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
           backgroundPosition: "centre centre",
       }} >

       <div className="banner__contents">
           <h1 className="banner__title">
               {movie?.tittle || movie.original_name}
           </h1>
           <div className="banner__buttons">
               <button className="banner__buttons">play</button>
               <button className="banner__button">My List</button>
           </div>
           <h1 className="banner__description">
               
               {truncate(movie?.overview,150)}</h1>
       </div>
       <div className="banner__fadeButtom"/>
       </header>
    )
}

export default Banner;
