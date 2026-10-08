import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ favoriteCount }) => {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="logo">🎬 Movie Explorer</NavLink>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/add">Add movie</NavLink>
          <NavLink to="/favorites">
            Favorites <span className="badge">{favoriteCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar