import React, { useState, useMemo } from 'react'
import MovieCard from '../Components/MovieCard'

const Home = ({ movies, favorites, toggleFavorite }) => {

  // useState: search text, selected genre, sort option
  let [search, setSearch] = useState("")
  let [genre, setGenre] = useState("All")
  let [sortBy, setSortBy] = useState("rating")

  // useMemo: genre chips are built from the movies
  const genres = useMemo(() => ["All", ...new Set(movies.map((m) => m.genre))], [movies])

  // useMemo: filter and sort again only when something changes
  const visibleMovies = useMemo(() => {
    const list = movies.filter((m) => {
      const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase())
      const matchesGenre = genre == "All" || m.genre == genre
      return matchesSearch && matchesGenre
    })

    if (sortBy == "rating") list.sort((a, b) => b.rating - a.rating)
    if (sortBy == "year") list.sort((a, b) => b.year - a.year)
    if (sortBy == "title") list.sort((a, b) => a.title.localeCompare(b.title))
    return list
  }, [movies, search, genre, sortBy])

  return (
    <>
      <section className="hero">
        <h1>What are we watching tonight?</h1>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <div className="filters">
        <div className="chips">
          {genres.map((g) => (
            <button
              key={g}
              className={g == genre ? "chip active" : "chip"}
              onClick={() => setGenre(g)}
            >
              {g}
            </button>
          ))}
        </div>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="rating">Top rated</option>
          <option value="year">Newest</option>
          <option value="title">A to Z</option>
        </select>
      </div>

      <p className="count">{visibleMovies.length} movies found</p>

      {visibleMovies.length == 0 ? (
        <p className="empty">No movies match. Try another title or genre.</p>
      ) : (
        <div className="grid">
          {visibleMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.includes(movie.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Home