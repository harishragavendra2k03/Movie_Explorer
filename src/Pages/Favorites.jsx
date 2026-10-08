import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../Components/MovieCard'

const Favorites = ({ movies, favorites, toggleFavorite }) => {

  // useMemo: pick the favorite movies only when movies or favorites change
  const favoriteMovies = useMemo(
    () => movies.filter((m) => favorites.includes(m.id)),
    [movies, favorites]
  )

  return (
    <>
      <h1 className="page-title">Your favorites</h1>

      {favoriteMovies.length == 0 ? (
        <p className="empty">
          Nothing saved yet. <Link to="/">Browse movies</Link> and tap the heart.
        </p>
      ) : (
        <div className="grid">
          {favoriteMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Favorites