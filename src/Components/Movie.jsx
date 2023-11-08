import React, { useState } from 'react'
import Details from './Details';

const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280";

export default function Movie({ title, poster_path, vote_average, overview }) {
  let [마우스, 상세설명] = useState(0);
  var showDetail;

    return (
      <div className='movie-container'>
        <img src={IMG_BASE_URL + poster_path} alt="영화포스터" onMouseOver={() => {상세설명(1)}} /> 
        <div className='movie-info'>
            <h4>{title}</h4>
            <span>{vote_average}</span>
          <div className='detail-container' onMouseOut={() => {상세설명(0)}}> 
          <Details 
          title={title}
          overview={overview}
          showDetail={마우스}
          />
        </div>
        </div>
      </div>
    )
  }
  