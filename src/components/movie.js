
import React from "react" 

const img_url = "https://image.tmdb.org/t/p/w1280";


const Film = ({title,poster_path,overview,vote_average}) => {
    return (
    <div className="movie"> 
       <img src={ img_url + poster_path} alt={title} /> 

       <div className='movie-info'>
           <h3>{title}</h3>
           <span>{vote_average}</span>
       </div>

       <div className="movie-over">
       <h2>OverView</h2>
       <p>{overview}</p>

       </div>

       

    </div>

    );
};

export default Film;


