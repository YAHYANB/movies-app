import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../images/not-found.jpg'

function Movie() {
  const [movies,setMovies] = useState(null)
  const {id} = useParams()
  const Api = async () => {
    fetch('https://www.omdbapi.com/?apikey=6e30c4b4&i=' + id)
    .then((res) => res.json())
    .then((res) => setMovies(res))
  }
  useEffect(()=>{
    Api()
  },[id])
  return (
    <>
    {movies && (
      <div class="movie-info border-b border-gray-800">
          <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
              <img src={movies.Poster==='N/A'? NotFound : movies.Poster} class="rounded-md w-96 md:pl-16" alt=''/>
              <div class="md:ml-24 mt-4">
                  <h1 class="text-4xl font-semibold">{movies.Title}</h1>
                  <div class="flex flex-wrap items-center text-gray-400 mt-1">
                      <span><svg class="h-8 mb-1 text-yellow-500 w-5" width="20" height="24" viewBox="0 0 24 24"
                              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                              stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path
                                  d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                          </svg></span>
                      <span class="ml-1">{movies.imdbRating * 10}%</span>
                      <span class="mx-2">|</span>
                      <span>{movies.Released}</span>
                      <span class="mx-2">|</span>
                      <span class="">{movies.Genre}</span>
                  </div>
                  <p class="mt-8 text-gray-300">
                    {movies.Plot}
                  </p>
                  <div class="mt-16">
                      <h4 class="text-white font-semibold">Long time no spree</h4>
                      <div class="flex mt-4">
                          <div class="">
                              <h6 class="text-white">Director</h6>
                              <p class="text-gray-300 text-sm">{movies.Director}</p>
                          </div>
                          <div class="ml-16">
                              <h6 class="text-white">Country</h6>
                              <p class="text-gray-300 text-sm">{movies.Country}</p>
                          </div>
                      </div>
                      <div class="mt-16 relative">
                          <button
                              class="flex items-center rounded bg-orange-500 px-8 py-4 text-black font-semibold hover:bg-orange-600 transition ease-in-out duration-150">
                              <svg class="w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span class="ml-2">Play Trailer</span>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )}
    </>
  )
}

export default Movie
