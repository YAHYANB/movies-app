import { useEffect, useState } from "react";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";

function App() {
  const [search, setSearch] = useState('')
  const [movies,setMovies] = useState([])
  const Api = async () => {
    fetch('https://www.omdbapi.com/?apikey=6e30c4b4&s=' + search)
    .then((res) => res.json())
    .then((res) => setMovies(res.Search))
  }
  useEffect(()=>{
    Api()
  },[search])
  return (
    <div class="font-sans bg-gray-900 text-white">
      <BrowserRouter>
        <Header search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<MoviesList movies={movies} search={search}/>}/>
          <Route path="/:id" element={<Movie />}/>
        </Routes>
        {!search && 
          <h1 className="text-gray-800 text-2xl text-center my-10 font-semibold uppercase">Search about your movies</h1>
        }
        {!movies && search && 
          <h1 className="text-gray-800 text-2xl text-center my-10 font-semibold uppercase">Not found</h1>
        }
      </BrowserRouter>
    </div>

  )
}

export default App;
