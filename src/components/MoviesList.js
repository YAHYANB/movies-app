import { Link } from 'react-router-dom'
import NotFound from '../images/not-found.jpg'

function MoviesList({movies}) {
  return (
    <div className="container mx-auto px-14 pt-16">
      <div className="popular-movies">
        <h2 className="uppercase traking-wider text-orange-500 text-lg font-semibold">
          Movies List
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"> 
          {movies && movies.map((movie,i)=>
            <div className="mt-8" key={i}>
            <Link to={"/" + movie.imdbID}>
              <img src={movie.Poster==='N/A'? NotFound : movie.Poster} className="hover:opacity-75 transition ease-in-out duration-150" alt='img'/>
            </Link>
            <div className="mt-2">
              <Link href={'/' + movie.imdbID} className="text-lg mt-2 hover:text-gray-300">
                {movie.Title}
              </Link>
              <div className="flex items-center justify-start text-gray-400">
                <span className="ml-1">{movie.Type}</span>
                <span className="mx-2">:</span>
                <span>{movie.Year}</span>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
  </div>
  )
}

export default MoviesList
