import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const NavBar = () => {
  const state = useSelector((state)=> state.handleCart)
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <div class='container'>
        <a class='navbar-brand fw-bold fs-4' href='#'>
          MOVIE HUB
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mx-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='/'>
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='/items'>
                Movies
              </a>
            </li>

            <li class='nav-item'>
              <a class='nav-link' href='#'>
                About
              </a>
            </li>

            <li class='nav-item'>
              <a class='nav-link' href='/addmovie'>
                Admin
              </a>
            </li>

            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Contact
              </a>
            </li>
          </ul>
          <div className='buttons'>
            <a href='/login' className='btn btn-outline-dark'>
              <i className='fa fa-sign-in me-1'></i> Login
            </a>
          </div>
          <div className='buttons'>
            <a href='/reg' className='btn btn-outline-dark'>
              <i className='fa fa-user-plus ms-2'></i> Register
            </a>
          </div>
          <div className='buttons'>
            <a href='/cart' className='btn btn-outline-dark'>
              <i className='fa fa-shopping-cart ms-2'></i> Cart ({state.length})
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
