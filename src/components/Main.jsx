import React, { useEffect, useState } from 'react';
import axios from 'axios';

import requests from '../Requests';

const Main = () => {
    const [movies,setMovie]=useState([]);
        // كل مره رح نعمل رفريش لصفحه رح يعطينا فيلم
    const movie = movies[Math.floor(Math.random()* movies.length)]

useEffect(()=>{
    //جبنا الافلام من اي بي أي 
     axios.get(requests.requestPopular).then((res)=>{
      setMovie(res.data.results)
     })
},[]);

    function incteStraintr(str, num) {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
     <img className='w-full h-full object-cover'  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Player</button>
                <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                </div>
                <p className='text-gray-400 text-sm'>Released:{movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[35%] text-gray-200'> {movie?.overview}</p>
                {incteStraintr(movie?.overview,80)}
            </div>
        </div>

    </div>
  )
}

export default Main