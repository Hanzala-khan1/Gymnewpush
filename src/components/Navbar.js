import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import RegisterPopup from './RegisterPopup';

const Navbar = () => {
    const location = useLocation();
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [showONav, setShowONav] = useState(false);

    // Function to handle toggling of the off-canvas menu
    const handleopenNav = () => {
        setShowONav(!showONav); // Toggle the state to show/hide the off-canvas menu
    }

    // useEffect hook to set initial state and listen for window resize events
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setShowOffCanvas(true); // Show off-canvas menu if window width is less than 1000 pixels
            } else {
                setShowOffCanvas(false);
            }
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize); // Listen for resize events

        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);

    return (
        <div>
            <header className="header-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <nav className="nav-menu">
                                <ul>
                                    <li className={location.pathname === "/" ? "active" : ""}>
                                        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                                    </li>
                                    <li className={location.pathname === "/Gym" ? "active" : ""}>
                                        <Link to="/Gym" style={{ textDecoration: 'none' }}>Gyms</Link>
                                    </li>
                                    <li className={location.pathname === "/Contact-us" ? "active" : ""}>
                                        <Link to="/Contact-us" style={{ textDecoration: 'none' }}>Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-4">
                            <div className="top-option">
                                <Link to={'/Register'} className="primary-btn" style={{ borderRadius: "24px", backgroundColor: "#161C27", marginRight: "10px", textDecoration: 'none' }}>Register as a Gym</Link>
                                <Link to={'/Login'} className="primary-btn" style={{ borderRadius: "24px" }}>Login</Link>
                            </div>
                        </div>
                    </div>
                    {showOffCanvas && (
                        <div className="canvas-open" onClick={handleopenNav}>
                            <FontAwesomeIcon icon={showONav ? faTimes : faBars}></FontAwesomeIcon>
                        </div>
                    )}
                </div>
            </header>
            {showONav && (
                <div className={`${showONav ? "show-offcanvas-menu-wrapper" : "canvas-menu mobile-menu"} text-white`} style={{
                    position: 'fixed',
                    left: showONav ? '0' : '-300px',
                    top: '0',
                    width: '300px',
                    zIndex: '999',
                    background: 'black',
                    overflowY: 'auto',
                    height: '100%',
                    opacity: showONav ? '1' : '0',
                    visibility: showONav ? 'visible' : 'hidden',
                    transition: 'all 0.5s',
                    padding: '50px 30px 30px 30px',
                    display: 'block',
                }}>
                    <div className="canvas-close" style={ {display: "flex", justifyContent: "end"} } onClick={handleopenNav}>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </div>
                    <nav className="canvas-menu mobile-menu">
                        <ul style={ {listStyle : "none", paddingTop: "40px"} }>
                            <li className={location.pathname === "/" ? "active" : ""}>
                                <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                            </li>
                            <li className={location.pathname === "/Gyms" ? "active" : ""}>
                                <Link to="/Gym" style={{ textDecoration: 'none' }}>Gyms</Link>
                            </li>
                            <li className={location.pathname === "/Contact-us" ? "active" : ""}>
                                <Link to="/Contact-us" style={{ textDecoration: 'none' }}>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                    <div className="canvas-social">
                        <Link to={'/Register'} className="primary-btn text-white" style={{ borderRadius: "24px", backgroundColor: "#161C27" }}>Register as a Gym</Link>
                        <a href="#" className="primary-btn text-white mt-2" style={{ borderRadius: "24px" }}>Login</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
