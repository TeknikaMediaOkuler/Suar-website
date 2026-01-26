import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
// Importing the Logo
import Logo from '../assets/Images/SUAR - LOGO-06.png'; // Using Logo-06 (approx 50kb, good size)

const Navbar = ({ isHome }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(!isHome);

    useEffect(() => {
        setIsVisible(!isHome);
    }, [isHome]);

    // Scroll listener for logo size animation and visibility
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Logo size logic
            if (currentScrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Visibility logic
            if (isHome) {
                if (currentScrollY > window.innerHeight * 0.8) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            } else {
                setIsVisible(true);
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
        { name: 'about', path: '/' },
        { name: 'project', path: '/work' },
        { name: 'services', path: '/services' },
        { name: 'product', path: '/articles' },
        { name: 'contact', path: '/contact' }
    ];

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '80px',
                padding: '0 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1000,
                backgroundColor: '#FFFDF5',
                borderBottom: 'none',
                color: '#282824',
                transition: 'all 0.3s ease',
                transform: isVisible ? 'translateY(0)' : 'translateY(-120%)'
            }}>

                {/* LOGO AREA - with scroll animation */}
                <Link to="/" style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: '2rem'
                }}>
                    <img
                        src={Logo}
                        alt="SUAR"
                        style={{
                            height: scrolled ? '50px' : '120px',
                            objectFit: 'contain',
                            transition: 'height 0.3s ease'
                        }}
                    />
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                }}>
                    <div className="desktop-nav" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem'
                    }}>
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    textDecoration: 'none',
                                    color: '#282824',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'var(--content-font)',
                                    textTransform: 'lowercase',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <span style={{ fontSize: '1.2rem', color: '#5F52AA', marginRight: '5px', lineHeight: 0 }}>•</span>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <button
                        className="mobile-hamburger"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            flexDirection: 'column',
                            gap: '5px',
                            padding: '10px'
                        }}
                        aria-label="Toggle menu"
                    >
                        <span style={{
                            width: '25px',
                            height: '3px',
                            backgroundColor: '#5F52AA',
                            transition: 'all 0.3s ease',
                            transform: isOpen ? 'rotate(45deg) translateY(8px)' : 'none'
                        }}></span>
                        <span style={{
                            width: '25px',
                            height: '3px',
                            backgroundColor: '#5F52AA',
                            transition: 'all 0.3s ease',
                            opacity: isOpen ? 0 : 1
                        }}></span>
                        <span style={{
                            width: '25px',
                            height: '3px',
                            backgroundColor: '#5F52AA',
                            transition: 'all 0.3s ease',
                            transform: isOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
                        }}></span>
                    </button>
                </nav>
            </header>

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
                                color: '#282824',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                fontFamily: 'var(--content-font)',
                                textTransform: 'lowercase',
                                padding: '1rem 0',
                                borderBottom: '1px solid rgba(95, 82, 170, 0.2)'
                            }}
                        >
                            <span style={{ fontSize: '1.5rem', color: '#5F52AA', marginRight: '10px', lineHeight: 0 }}>•</span>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* RESPONSIVE STYLES */}
            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-hamburger {
                        display: flex !important;
                    }
                }
                
                @media (min-width: 769px) {
                    .mobile-menu {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
