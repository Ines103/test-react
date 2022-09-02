import React from 'react';
import {Link, NavLink} from 'react-router-dom';


function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ml-auto ">

                        <li className="nav-item  ">
                            <Link className="nav-link active"  to="/login">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/register">Register</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" to="/products">Products</Link>
                        </li>

            
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/weather" >Weather</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header
