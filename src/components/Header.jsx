import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { LuShoppingCart } from "react-icons/lu";
import { Auth } from '../utils/AuthContext';

const Header = () => {

    const { userIn } = useContext(Auth);

  return (
    <header className='header'>
        <div className="container">
            <div className="row">
                <div className="logo">
                    <h1><Link to='/' className='link'>AWAY</Link></h1>
                </div>
                <div className="navbar">
                    <nav className="nav">
                        <ul className="navList row">
                            <li className="navItem"><NavLink className='navLink'>New Arrivals</NavLink></li>
                            <li className="navItem"><NavLink className='navLink'>Suitcases</NavLink></li>
                            <li className="navItem"><NavLink className='navLink'>Bags</NavLink></li>
                            <li className="navItem"><NavLink className='navLink'>Accsessories</NavLink></li>
                            <li className="navItem"><NavLink to='/shopall' className='navLink'>Shop All</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="right row">
                    { userIn && (
                        <div><Link to='/account' className="link">Hi There!</Link></div>

                    )}
                    {!userIn && (
                        <Link to="/login" className="logIn">
                            Log in
                        </Link>
                    )}
                    <div className="cart">
                        { userIn && (
                            <Link className='link' to='/cart'><LuShoppingCart /></Link>
                        )}
                        {!userIn && (
                            <Link to="/login" className="logIn"><LuShoppingCart /></Link>
                            )}
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header