import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const MovieDetails = ({ movies, favorites, toggleFavorite }) => {

  let { id } = useParams()
  let myNavigate = useNavigate()
  let [userRating, setUserRating] = useState(0)

  // the id from the URL is text, so we compare with ==
  let movie = movies.find((m) => m.id == id)

  // useEffect: change the browser tab title for this movie
  useEffect(() => {
    if (movie) document.title = `${movie.title} | Movie Explorer`
    return () => {
      document.title = "Movie Explorer"
    }
  }, [movie])

  if (!movie) return <p className="empty">Movie not found.</p>

  let isFavorite = favorites.includes(movie.id)

  return (
    <div className="details">
      <button className="back" onClick={() => myNavigate(-1)}>← Back</button>

      <div className="details-layout">
        <div className="poster big">
          <img
            src={movie.poster}
            alt={movie.title}
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>

        <div className="details-info">
          <h1>{movie.title}</h1>
          <p className="meta">{movie.year} · {movie.genre} · ⭐ {movie.rating}</p>
          <p className="plot">{movie.plot}</p>

          <button
            className={isFavorite ? "btn btn-outline" : "btn"}
            onClick={() => toggleFavorite(movie)}
          >
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>

          <h3>Your rating</h3>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={star <= userRating ? "star on" : "star"}
                onClick={() => setUserRating(star)}
                aria-label={`${star} stars`}
              >
                ★
              </button>
            ))}
          </div>
          {userRating > 0 && <p className="meta">You gave it {userRating} out of 5.</p>}
        </div>
      </div>
    </div>
  )
}

export default MovieDetails