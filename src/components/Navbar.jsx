import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
// Importing the Logo
import Logo from '../assets/Images/SUAR - LOGO-02.png'; // Updated to LOGO-02 to match Home.jsx

const Navbar = ({ isHome = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(!isHome); // If not home, visible by default

    // Scroll listener for visibility on Home
    useEffect(() => {
        if (!isHome) {
            setIsVisible(true);
            return;
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Show after 100px scroll on Home
            if (currentScrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Check initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    // Mobile menu animation
    useEffect(() => {
        if (isOpen) {
            gsap.to('.mobile-menu', { height: 'auto', duration: 0.4, ease: 'power2.out' });
            gsap.fromTo('.mobile-menu-link',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, stagger: 0.08, delay: 0.1 }
            );
        } else {
            gsap.to('.mobile-menu', { height: 0, duration: 0.3, ease: 'power2.in' });
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'News', path: '/news' }
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '80px',
                backgroundColor: '#FFFDF5',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '0',
                boxSizing: 'border-box',
                zIndex: 1000,
                borderBottom: '2px solid #5F52AA',
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease-in-out'
            }}>
                {/* Logo Area */}
                <div style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 2rem',
                    borderRight: '2px solid #5F52AA'
                }}>
                    <img src={Logo} alt="SUAR" style={{ height: '40px', width: 'auto' }} />
                </div>

                {/* Desktop Nav Links */}
                <div className="desktop-nav-links" style={{
                    display: 'flex',
                    gap: '3rem',
                    alignItems: 'center',
                    paddingLeft: '3rem',
                    flex: 1
                }}>
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            style={{
                                textDecoration: 'none',
                                color: '#5F52AA',
                                fontSize: '1rem',
                                fontFamily: '"Catalogue", sans-serif',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                textTransform: 'lowercase'
                            }}
                        >
                            <span style={{
                                color: '#FFC933',
                                fontSize: '0.6em',
                                transform: 'rotate(-45deg)', // Point South-East
                                display: 'inline-block'
                            }}>▼</span>
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <div
                    className="mobile-menu-icon"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ cursor: 'pointer', paddingRight: '2rem', marginLeft: 'auto' }}
                >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="#5F52AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 6H21" stroke="#5F52AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 18H21" stroke="#5F52AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </nav>

            {/* MOBILE ACCORDION MENU */}
            <div
                className="mobile-menu"
                style={{
                    position: 'fixed',
                    top: '80px',
                    left: 0,
                    width: '100%',
                    backgroundColor: '#FFFDF5',
                    borderBottom: '2px solid #5F52AA',
                    zIndex: 999,
                    overflow: 'hidden',
                    height: 0
                }}
            >
                <nav style={{ padding: '1rem 2rem' }}>
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="mobile-menu-link"
                            onClick={() => setIsOpen(false)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: '#5F52AA',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                fontFamily: '"Catalogue", sans-serif',
                                textTransform: 'lowercase',
                                padding: '1rem 0',
                                borderBottom: '1px solid rgba(95, 82, 170, 0.2)'
                            }}
                        >
                            <span style={{ fontSize: '1.5rem', color: '#FFC933', marginRight: '10px', lineHeight: 0, transform: 'rotate(-45deg)' }}>▼</span>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            <style>{`
                 /* Responsive Styles for Navbar */
                 @media (max-width: 768px) {
                     .desktop-nav-links {
                         display: none !important;
                     }
                     .mobile-menu-icon {
                         display: block !important;
                     }
                 }
                 @media (min-width: 769px) {
                     .mobile-menu-icon {
                         display: none !important;
                     }
                      .mobile-menu {
                        display: none !important;
                    }
                 }
            `}</style>
        </>
    );
};

export default Navbar;
