import { movies } from './movieDummy'; //data를 import해서 가져오기
import Movie from './Components/Movie';
import Details from './Components/Details';

function App() {
  return (
    <div>
      <div className='app-container'>
        {/* jsx문법 안에서 자바스크립트를 사용할때는 괄호 */}
        {
          movies.results.map((item) =>  {
            return (
              <Movie 
              title = {item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
