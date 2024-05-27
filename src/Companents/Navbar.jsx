import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
function Navbar() {
  return (
    <>
      <div className="container">
        <nav>
          <div className="logo">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="logo" />
          </div>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li className='dropdown'>Latest
              <ul className='dropdown-item'>
                <li>Product List</li>
                <li>Product Details</li>
              </ul>
            </li>
            <li className='dropdown'>Blog
              <ul className='dropdown-item'>
                <li>Blog</li>
                <li>Blog Details</li>

              </ul>
            </li>
            <li className='dropdown'>Pages
            <ul className='dropdown-item'>
                <li>Login</li>
                <li>Cart</li>
                <li>Element</li>
                <li>Confirmation</li>
                <li> product Chechout</li>
              </ul>
            </li>
            <li>Contact</li>
          </ul>
          <div className="nav-icons">
            <CiSearch /><IoPersonSharp /><MdOutlineShoppingCart />
          </div>
          <Link to='/admin' className='admin'>Admin</Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar