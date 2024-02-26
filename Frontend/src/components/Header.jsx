import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section id='header'>
      <div className='header-container'>
        <div className='logo'><img src='https://cdn.vectorstock.com/i/1000x1000/61/74/teamwork-management-icon-vector-25156174.webp'/></div>
       <nav className='navigation'>
        <ul>
          <Link to='/'>
          <li className="button-17" role="button">Homepage</li>
          </Link>  
        </ul>
       </nav>
       <div className='add-container'>
        <Link to="/add-entry">
        <li className="button-17" role="button">Add Employee</li>
        </Link>
       </div>
      </div>
    </section>
  )
}

export default Header