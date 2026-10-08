import React, { useState, useEffect, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import AddMovie from './Pages/AddMovie'
import { movieList } from './data'
import MovieDetails from './Pages/MovieDetails'


const App = () => {

  // useState: all movies, and the ids of the favorite movies
  let [movies, setMovies] = useState(movieList)
  let [favorites, setFavorites] = useState([])

  // useEffect: show a welcome toast once, when the app opens
  useEffect(() => {
    toast("Welcome to Movie Explorer", { icon: "🎬" })
  }, [])

  // useCallback: add or remove a favorite, and show a toast
  const toggleFavorite = useCallback(
    (movie) => {
      if (favorites.includes(movie.id)) {
        setFavorites(favorites.filter((id) => id != movie.id))
        toast(`Removed "${movie.title}" from favorites`, { icon: "💔" })
      } else {
        setFavorites([...favorites, movie.id])
        toast.success(`Added "${movie.title}" to favorites`)
      }
    },
    [favorites]
  )

  return (
    <>
      <Toaster position="top-center" />
      <Navbar favoriteCount={favorites.length} />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home movies={movies} favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/movie/:id"
            element={<MovieDetails movies={movies} favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/favorites"
            element={<Favorites movies={movies} favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/add"
            element={<AddMovie movies={movies} setMovies={setMovies} />}
          />
          <Route path="*" element={<p className="empty">Page not found.</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App