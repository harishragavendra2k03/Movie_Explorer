import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const AddMovie = ({ movies, setMovies }) => {

  let myNavigate = useNavigate()

  let [state, setState] = useState({
    title: "",
    year: "",
    genre: "",
    rating: "",
    poster: "",
    plot: ""
  })

  function handleChange(e) {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    let newMovie = {
      ...state,
      id: Date.now(),
      year: Number(state.year),
      rating: Number(state.rating)
    }

    setMovies([...movies, newMovie])
    toast.success(`Added "${state.title}"`)
    setState({ title: "", year: "", genre: "", rating: "", poster: "", plot: "" })
    myNavigate("/")
  }

  return (
    <div>
      <h1 className="page-title">Add a movie</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" value={state.title} onChange={handleChange} required />
        <input type="text" placeholder="Year" name="year" value={state.year} onChange={handleChange} required />
        <input type="text" placeholder="Genre (one word, like Thriller)" name="genre" value={state.genre} onChange={handleChange} required />
        <input type="number" step="0.1" min="0" max="10" placeholder="Rating (0 to 10)" name="rating" value={state.rating} onChange={handleChange} required />
        <input type="text" placeholder="Poster link, like /Images/Leo.jpg" name="poster" value={state.poster} onChange={handleChange} />
        <textarea placeholder="Plot" name="plot" value={state.plot} onChange={handleChange} rows="4" />
        <button className="btn" type="submit">Add movie</button>
      </form>
    </div>
  )
}

export default AddMovie