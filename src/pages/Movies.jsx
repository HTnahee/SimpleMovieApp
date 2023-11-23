import React from 'react'
import { movies } from "../movieDummy";
import Movie from '../Components/Movie';

export default function Movies() {
  return (
    <div>
      <div className='movies-container'>
        {/* jsx문법 안에서 자바스크립트를 사용할때는 괄호 */}
        {
          movies.results.map((item) =>  {
            return (
              <Movie
              title = {item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              />
            );
          })
        }
      </div>
    </div>
  );
}
