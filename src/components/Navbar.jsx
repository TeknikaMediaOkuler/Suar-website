import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
// Importing the Logo
import Logo from '../assets/Images/SUAR - LOGO-06.png'; // Using Logo-06 (approx 50kb, good size)

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            gsap.to('.menu-overlay', { x: '0%', duration: 0.5, ease: 'power2.out' });
            gsap.fromTo('.menu-link',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2 }
            );
        } else {
            gsap.to('.menu-overlay', { x: '100%', duration: 0.5, ease: 'power2.in' });
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'home', path: '/' },
        { name: 'projects', path: '/work' },
        { name: 'services', path: '/services' },
        { name: 'products', path: '/articles' }, // Using articles as placeholder for products
        { name: 'connect', path: '/contact' }
    ];

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '80px', // slightly taller for logo
                padding: '0 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1000,
                backgroundColor: '#FFFDF5', // Bone White
                borderBottom: '2px solid #5F52AA', // Purple Border
                color: '#282824'
            }}>

                {/* LOGO AREA */}
                <Link to="/" style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: '2rem'
                }}>
                    <img src={Logo} alt="SUAR" style={{ height: '50px', objectFit: 'contain' }} />
                </Link>

                {/* Helper layout for links based on reference: small, top right */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
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
                            {/* Small dot/bullet based on reference */}
                            <span style={{ fontSize: '1.2rem', color: '#5F52AA', marginRight: '5px', lineHeight: 0 }}>•</span>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </header>
        </>
    );
};

export default Navbar;
