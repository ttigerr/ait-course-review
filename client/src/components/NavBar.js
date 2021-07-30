import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { UidContext } from './AppContext'
import Logout from './Log/Logout'

const NavBar = () => {
  const uid = useContext(UidContext)
  const userData = useSelector(state => state.userReducer)

  return (
    <header className='header'>
      <nav>
        <NavLink exact to='/'>
          <div className='logo'>
            {/* <img src="logo.png" alt="logo" /> */}

            <h3>AIT course review</h3>
          </div>
        </NavLink>
        <div className='nav'>
          <ul>
            <li>
              <NavLink exact to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/course'>
                Course
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/news'>
                News
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/aboutUs'>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className='profil'>
            {uid ? (
              <ul>
                <li className='welcome'>
                  <NavLink exact to='/profil' className='profil-link'>
                    <img
                      src={userData.picture}
                      alt='user-pic'
                      className='user-profil-pic'
                    />{' '}
                    {userData.pseudo}
                  </NavLink>
                </li>
                <Logout />
              </ul>
            ) : (
              <ul>
                <li>
                  <NavLink exact to='/profil'>
                    <img src='../img/icons/login.svg' alt='login-icon' />
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
