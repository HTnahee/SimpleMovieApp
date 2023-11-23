import React, { useState } from 'react'
import Details from './Details';
import { useNavigate } from 'react-router-dom';

const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280";

export default function Movie(props) {
  const navigate =  useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movie/${props.title}`, {
      state: props
    })
  }

  let [마우스, 상세설명] = useState(0);
  var showDetail;

    return (
      <div className='movie-container' onClick={onClickMovieItem}>
        <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" onMouseOver={() => {상세설명(1)}} /> 
        <div className='movie-info'>
            <h4>{props.title}</h4>
            <span>{props.vote_average}</span>
          <div className='detail-container' onMouseOut={() => {상세설명(0)}}> 
          <Details 
          title={props.title}
          overview={props.overview}
          showDetail={마우스}
          />
        </div>
        </div>
      </div>
    )
  }
  