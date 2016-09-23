import  React from 'react';
import { Link } from 'react-router';


const NavBar = () => {
    return (
<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Buen Provecho</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Sign Up</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>

        </div>

    </nav>
      );
  };

  export default NavBar;