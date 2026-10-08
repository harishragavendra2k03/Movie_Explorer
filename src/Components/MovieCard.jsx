import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie, isFavorite, toggleFavorite }) => {
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`}>
        <div className="poster">
          <img
            src={movie.poster}
            alt={movie.title}
            loading="lazy"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
      </Link>

      <button
        className={isFavorite ? "heart active" : "heart"}
        onClick={() => toggleFavorite(movie)}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? "♥" : "♡"}
      </button>

      <div className="card-body">
        <h3>{movie.title}</h3>
        <p className="meta">{movie.year} · {movie.genre}</p>
        <p className="rating">⭐ {movie.rating}</p>
      </div>
    </div>
  )
}

export default MovieCard