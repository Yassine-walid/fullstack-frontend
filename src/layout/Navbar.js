import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" ><Link className="btn btn-outline-light" to="/">Home</Link></a>
        </li>
      </ul>
    </div>
    <Link className="btn btn-outline-light" to="/addUser" >Add User</Link>
  </div>
</nav>
    </div>
  )
}
