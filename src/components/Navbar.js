import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import '../css/Navbar.css'
import logo from './images/wmremove-transformed.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isloginned, setLoginStatus] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    // Handle scroll effect
    const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        setScrolled(isScrolled);
    }

    var user = JSON.parse(localStorage.getItem('user-info'));


    const checkLogin = () => {
        var current = Math.round(Date.now() / 1000);
        
        if (user != null) {
            if (current > user.token.exp) {
                setLoginStatus(false);
                localStorage.removeItem('user-info');
            }
            else {
                setLoginStatus(true);
            }
        }
    }

    useEffect(() => {
        checkLogin();
        showButton();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', showButton);
        
        return () => {
            window.removeEventListener('resize', showButton);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /* When the user clicks on the button,toggle between hiding and showing the dropdown content */
    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.matches('.user-avatar') && !event.target.closest('.user-dropdown')) {
                var dropdowns = document.getElementsByClassName("dropdown-menu");
                for (let i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Mobile menu toggle */}
                <div className="menu-icon" onClick={handleClick} aria-label="Toggle menu">
                    <span className={click ? 'hamburger active' : 'hamburger'}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>

                {/* Logo section */}
                <div className='logo-section'>
                    <div className="logo-container">
                        <img src={logo} alt="LearningTrek Logo" className='logo-image' />
                    </div>
                    <Link to="/" className="brand-name" onClick={closeMobileMenu}>
                        LearningTrek
                    </Link>
                </div>

                {/* Main navigation menu */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-home nav-icon"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-book nav-icon"></i>
                            <span>Courses</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-blog nav-icon"></i>
                            <span>Blog</span>
                        </Link>
                    </li>
                </ul>

                {/* Right side menu */}
                <div className='nav-actions'>
                    <div className="nav-icons">
                        <button className="icon-btn search-btn" aria-label="Search">
                            <i className="fas fa-search"></i>
                        </button>
                        <button className="icon-btn notification-btn" aria-label="Notifications">
                            <i className="far fa-bell"></i>
                            <span className="notification-badge">3</span>
                        </button>
                    </div>

                    {/* Authentication buttons for desktop */}
                    <div className="auth-buttons">
                        {button && !isloginned && (
                            <>
                                <Link to='/login' className='auth-link'>
                                    <Button buttonStyle="btn--secondary" buttonSize="btn--small">Login</Button>
                                </Link>
                                <Link to='/signup' className='auth-link'>
                                    <Button buttonStyle="btn--primary" buttonSize="btn--small">Sign Up</Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* User dropdown */}
                    <div className="user-dropdown">
                        {isloginned && (
                            <button className="user-avatar" onClick={myFunction} aria-label="User menu">
                                {user?.token?.data?.name?.[0]?.toUpperCase() || 'U'}
                                <div className="online-indicator"></div>
                            </button>
                        )}
                        {!isloginned && !button && (
                            <button className="user-avatar guest" onClick={myFunction} aria-label="Guest menu">
                                <i className="fas fa-user"></i>
                            </button>
                        )}
                        <div id="myDropdown" className="dropdown-menu">
                            <div className="dropdown-header">
                                {isloginned ? (
                                    <div className="user-info">
                                        <div className="user-name">{user?.token?.data?.name || 'User'}</div>
                                        <div className="user-email">{user?.token?.data?.email || ''}</div>
                                    </div>
                                ) : (
                                    <div className="guest-info">Welcome to LearningTrek</div>
                                )}
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-body">
                                {!isloginned && (
                                    <>
                                        <Link to='/login' className='dropdown-item'>
                                            <i className="fas fa-sign-in-alt"></i>
                                            <span>Login</span>
                                        </Link>
                                        <Link to='/signup' className='dropdown-item'>
                                            <i className="fas fa-user-plus"></i>
                                            <span>Sign Up</span>
                                        </Link>
                                    </>
                                )}
                                {isloginned && (
                                    <>
                                        <Link to='/instructor/mycourses' className='dropdown-item'>
                                            <i className="fas fa-chalkboard-teacher"></i>
                                            <span>Instructor Dashboard</span>
                                        </Link>
                                        <Link to='/myaccount' className='dropdown-item'>
                                            <i className="fas fa-user-cog"></i>
                                            <span>My Account</span>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to='/logout' className='dropdown-item logout'>
                                            <i className="fas fa-sign-out-alt"></i>
                                            <span>Logout</span>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            {click && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}
        </nav>
    )
}

export default Navbar
