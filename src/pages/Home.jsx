import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/SUAR - LOGO-02.png';
import Container3D from '../components/Container3D';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const tickerRef = useRef(null);
    const [showStickyNav, setShowStickyNav] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowStickyNav(true);
            } else {
                setShowStickyNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        ScrollTrigger.refresh();

        // Simple reveal animations
        gsap.utils.toArray('.reveal').forEach(elem => {
            gsap.fromTo(elem,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 90%",
                    }
                }
            );
        });

        // Scrolling ticker animation
        if (tickerRef.current) {
            const tickerContent = tickerRef.current.querySelector('.ticker-content');
            if (tickerContent) {
                const tickerWidth = tickerContent.offsetWidth;

                gsap.to(tickerContent, {
                    x: -tickerWidth / 2,
                    duration: 20,
                    ease: 'none',
                    repeat: -1
                });
            }
        }
    }, []);

    return (
        <>
            <style>{`
                /* Global overflow prevention */
                .page-home {
                    overflow-x: hidden;
                    max-width: 100vw;
                }

                /* Responsive container */
                .home-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    width: 100%;
                    box-sizing: border-box;
                }

                /* HERO SECTION STYLES */
                .hero-split-layout {
                    flex: 1;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                }
                .hero-logo-col {
                    flex: 0 0 45%;
                    min-width: 300px;
                    border-right: 2px solid #5F52AA;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    box-sizing: border-box;
                }
                .hero-content-col {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    min-width: 300px;
                }
                .hero-nav-row {
                    padding: 1.5rem 3rem;
                    border-bottom: 2px solid #5F52AA;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                /* Mobile responsive styles */
                @media (max-width: 768px) {
                    .home-container {
                        padding: 0 1rem;
                    }

                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                        padding: 3rem 1rem 2rem !important;
                    }
                    
                    /* Hero Mobile Overrides */
                    .hero-split-layout {
                        flex-direction: column;
                        position: relative; /* Context for absolute nav */
                    }
                    .hero-logo-col {
                        flex: auto !important;
                        width: 100% !important;
                        border-right: none !important;
                        border-bottom: 2px solid #5F52AA;
                        padding: 4rem 2rem !important;
                    }
                    .hero-content-col {
                        width: 100% !important;
                    }
                    .hero-nav-row {
                        position: absolute !important;
                        top: 1rem;
                        right: 1rem;
                        width: auto !important;
                        border-bottom: none !important;
                        padding: 0 !important;
                        background: transparent !important;
                        justify-content: flex-end !important;
                        z-index: 50;
                    }
                    
                    /* Hide text links on mobile */
                    .desktop-nav-links {
                        display: none !important;
                    }
                    /* Show hamburger on mobile */
                    .mobile-menu-icon {
                        display: block !important;
                    }

                    .biomass-container,
                    .services-container,
                    .about-container,
                    .pillars-container {
                        padding: 0 1rem !important;
                    }

                    .about-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }

                    .pillars-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }

                    .services-content {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                    }

                    .pillars-content-flex {
                        flex-direction: column !important;
                        gap: 1rem !important;
                    }
                }
                
                /* Desktop Defaults */
                .mobile-menu-icon {
                    display: none;
                }
                .desktop-nav-links {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
            `}</style>

            <div className="page-home" style={{ marginTop: '0', overflowX: 'hidden', width: '100%' }}>

                {/* Fixed 3D Container Layer - HIDDEN FOR NOW */}
                {/* <Container3D /> */}

                {/* STICKY NAVBAR (Visible on Scroll) */}
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
                    transform: showStickyNav ? 'translateY(0)' : 'translateY(-100%)',
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
                        {[
                            { name: 'about', path: '/' },
                            { name: 'project', path: '/work' },
                            { name: 'services', path: '/services' },
                            { name: 'product', path: '/articles' },
                            { name: 'contact', path: '/contact' }
                        ].map((item) => (
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

                    {/* Mobile Menu Icon (Placeholder) */}
                    <div className="mobile-menu-icon" style={{ cursor: 'pointer', paddingRight: '2rem', marginLeft: 'auto' }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21" stroke="#5F52AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 6H21" stroke="#5F52AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 18H21" stroke="#5F52AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </nav>

                {/* SECTION 1: HERO */}
                <section style={{
                    minHeight: '85vh',
                    backgroundColor: '#FFFDF5',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    width: '100%',
                    overflowX: 'hidden',
                    borderBottom: '2px solid #5F52AA'
                }}>
                    {/* Main Split Layout */}
                    <div className="hero-split-layout">
                        {/* LEFT COLUMN: LOGO */}
                        <div className="hero-logo-col">
                            <img
                                src={Logo}
                                alt="SUAR"
                                style={{
                                    width: '100%',
                                    maxWidth: '600px',
                                    height: 'auto',
                                }}
                            />
                        </div>

                        {/* RIGHT COLUMN: NAV & HEADLINE */}
                        <div className="hero-content-col">
                            {/* 1. Navigation Row */}
                            <div className="hero-nav-row">
                                {/* Desktop Nav Links */}
                                <div className="desktop-nav-links">
                                    {[
                                        { name: 'about', path: '/' },
                                        { name: 'project', path: '/work' },
                                        { name: 'services', path: '/services' },
                                        { name: 'product', path: '/articles' },
                                        { name: 'contact', path: '/contact' }
                                    ].map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#5F52AA',
                                                fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
                                                fontFamily: 'Arial, sans-serif',
                                                fontWeight: 'bold',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}
                                        >
                                            <span style={{
                                                color: '#FFC933',
                                                fontSize: '0.8em',
                                                transform: 'rotate(90deg)',
                                                display: 'inline-block'
                                            }}>▼</span>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Mobile Hamburger Icon */}
                                <div className="mobile-menu-icon" style={{ cursor: 'pointer' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 12H21" stroke="#5F52AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 6H21" stroke="#5F52AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 18H21" stroke="#5F52AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>


                            {/* 2. Headline Row */}
                            <div style={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                padding: '4rem',
                            }}>
                                <h1 className="reveal" style={{
                                    color: '#5F52AA',
                                    fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                                    lineHeight: 1.1,
                                    fontFamily: 'Georgia, serif',
                                    fontWeight: 'normal',
                                    letterSpacing: '-0.02em',
                                    margin: 0,
                                    width: '100%'
                                }}>
                                    WHAT'S THROWN AWAY NOW
                                    <br />
                                    LIGHTS THE WAY
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Scrolling Text Ticker */}
                    <div
                        ref={tickerRef}
                        style={{
                            backgroundColor: '#5F52AA',
                            color: '#FFFDF5',
                            padding: '0.8rem 0',
                            overflow: 'hidden',
                            borderTop: '2px solid #5F52AA', // Double border effect implies one from above section
                            whiteSpace: 'nowrap',
                            width: '100%',
                            position: 'relative',
                            zIndex: 2
                        }}
                    >
                        <div className="ticker-content" style={{ display: 'inline-block' }}>
                            <span style={{ fontSize: '0.9rem', fontWeight: 'bold', paddingRight: '4rem' }}>
                                WHAT'S LEFT BEHIND ● POWERING THE FUTURE FROM WHAT'S LEFT BEHIND ●
                                WHAT'S LEFT BEHIND ● POWERING THE FUTURE FROM WHAT'S LEFT BEHIND ●
                                WHAT'S LEFT BEHIND ● POWERING THE FUTURE FROM WHAT'S LEFT BEHIND ●
                            </span>
                        </div>
                    </div>

                    {/* Biomass Image */}
                    <div style={{ height: '350px', overflow: 'hidden', width: '100%' }}>
                        <img
                            src="https://picsum.photos/1920/600?grayscale"
                            alt="Biomass Pellets"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </section>

                {/* Scroll Spacer for 3D Animation - Removed for now or kept minimal? Let's hide it or keep standard flow since 3D is hidden */}
                {/* <div className="scroll-spacer" style={{ height: '120vh', width: '100%' }}></div> */}

                {/* SECTION 2: BIOMASS (01) */}
                <section id="biomass-section" style={{
                    backgroundColor: '#5F52AA',
                    color: '#FFFDF5',
                    minHeight: '100vh', // Full Screen
                    padding: '2rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', // Push content to edges
                    position: 'relative',
                    width: '100%',
                    overflowX: 'hidden'
                }}>
                    <div className="biomass-container" style={{
                        maxWidth: '1600px', // Wider Design
                        margin: '0 auto',
                        padding: '2rem',
                        width: '100%',
                        height: '100%',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxSizing: 'border-box'
                    }}>
                        {/* Top Content: Label + Paragraph */}
                        <div>
                            {/* Consolidated Paragraph */}
                            <div style={{ marginTop: '1rem' }}>
                                <p className="reveal" style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                                    lineHeight: 1.2,
                                    maxWidth: '900px',
                                    fontFamily: 'Arial, sans-serif',
                                    width: '100%',
                                    marginBottom: '0'
                                }}>
                                    <span style={{
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: '#FFFDF5',
                                        marginRight: '1.5rem',
                                        verticalAlign: 'middle'
                                    }}>
                                        About
                                    </span>
                                    <span style={{}}>Powering The Future From What's Left Behind</span>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.
                                </p>
                            </div>
                        </div>


                        {/* BIOMASS heading at very bottom */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            width: '100%'
                        }}>
                            <h2 className="reveal" style={{
                                fontSize: 'clamp(15vw, 15vw, 25rem)', // HUGE Typography
                                lineHeight: 0.8,
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 'bold',
                                margin: 0,
                                letterSpacing: '-0.05em'
                            }}>
                                BIOMASS
                            </h2>
                            <span style={{
                                fontSize: 'clamp(3rem, 6vw, 6rem)',
                                fontWeight: 'bold',
                                color: '#FFC933'
                            }}>
                                (01)
                            </span>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: ABOUT (Grid Layout) - "About 2" */}
                {/* SECTION 3: SERVICES TITLE */}
                <section style={{
                    backgroundColor: '#FFFDF5',
                    color: '#5F52AA',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '2px solid #5F52AA',
                    width: '100%',
                    overflowX: 'hidden'
                }}>
                    <div style={{
                        maxWidth: '1600px',
                        margin: '0 auto',
                        padding: '2rem',
                        width: '100%',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '100%'
                    }}>
                        <h2 className="reveal" style={{
                            fontSize: 'clamp(10vw, 15vw, 28rem)',
                            lineHeight: 1.2,
                            fontFamily: '"Catalogue", sans-serif',
                            fontWeight: 'bold',
                            margin: 0,
                            letterSpacing: '0.02em',
                            textAlign: 'center',
                            width: '100%',
                            textTransform: 'lowercase',
                        }}>
                            services
                        </h2>

                        {/* Bottom Content Area */}
                        <div className="reveal" style={{
                            alignSelf: 'center',
                            marginTop: 'auto',
                            paddingTop: '8rem',
                            display: 'flex',
                            gap: '2rem',
                            maxWidth: '800px', // Increased slightly to allow more text room
                            width: '100%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start' // Ensure text starts at top of box line
                        }}>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                backgroundColor: '#5F52AA',
                                flexShrink: 0
                            }}></div>
                            <p style={{
                                fontSize: '1rem',
                                color: '#5F52AA',
                                fontFamily: '"Catalogue", sans-serif'
                            }}>
                                Powering The Future From What's Left Behind<br />
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: CAPABILITIES LIST */}
                <section style={{
                    backgroundColor: '#FFFDF5',
                    color: '#5F52AA',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    overflowX: 'hidden'
                }}>
                    {/* Item 1: Project Developer */}
                    <div className="reveal" style={{
                        flex: 1,
                        borderBottom: '2px solid #5F52AA',
                        display: 'flex',
                        width: '100%',
                        alignItems: 'stretch'
                    }}>
                        <div style={{
                            flex: '0 0 35%',
                            maxWidth: '35%',
                            padding: '4rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <h3 style={{
                                fontSize: 'clamp(2rem, 5vw, 4rem)',
                                margin: '0 0 1rem 0',
                                fontFamily: 'Arial, sans-serif'
                            }}>Project Developer</h3>
                            <p style={{
                                fontSize: '1.2rem',
                                marginBottom: '2rem',
                                fontWeight: 'bold'
                            }}>Design, Engineering & Production</p>
                            <p style={{ maxWidth: '600px' }}>
                                Powering The Future From What's Left Behind Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </p>
                        </div>
                        <div style={{
                            flex: '0 0 65%',
                            maxWidth: '65%',
                            alignSelf: 'stretch',
                            minHeight: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                            boxSizing: 'border-box'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#5F52AA',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#FFFDF5',
                                fontSize: '2rem',
                                fontWeight: 'bold'
                            }}>

                            </div>
                        </div>
                    </div>

                    {/* Item 2: EPC & Offtaker */}
                    <div className="reveal" style={{
                        flex: 1,
                        borderBottom: '2px solid #5F52AA',
                        display: 'flex',
                        width: '100%',
                        alignItems: 'stretch'
                    }}>
                        <div style={{
                            flex: '0 0 35%',
                            maxWidth: '35%',
                            padding: '4rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <h3 style={{
                                fontSize: 'clamp(2rem, 5vw, 4rem)',
                                margin: '0 0 1rem 0',
                                fontFamily: 'Arial, sans-serif'
                            }}>EPC & Offtaker</h3>
                            <p style={{
                                fontSize: '1.2rem',
                                marginBottom: '2rem',
                                fontWeight: 'bold'
                            }}>Design, Engineering & Production</p>
                            <p style={{ maxWidth: '600px' }}>
                                Powering The Future From What's Left Behind Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </p>
                        </div>
                        <div style={{
                            flex: '0 0 65%',
                            maxWidth: '65%',
                            alignSelf: 'stretch',
                            minHeight: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                            boxSizing: 'border-box'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#5F52AA',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#FFFDF5',
                                fontSize: '2rem',
                                fontWeight: 'bold'
                            }}>

                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: ABOUT 2 (Former Grid Layout) */}
                <section style={{
                    backgroundColor: '#FFFDF5',
                    color: '#5F52AA',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '2px solid #5F52AA',
                    width: '100%',
                    overflowX: 'hidden',
                    boxSizing: 'border-box'
                }}>
                    <div className="about-grid" style={{
                        maxWidth: '100%',
                        width: '100%',
                        height: '100vh',
                        display: 'grid',
                        gridTemplateColumns: '65% 35%',
                        gap: '0',
                        boxSizing: 'border-box'
                    }}>
                        {/* Left Column: Massive "about" heading */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            width: '100%',
                            borderRight: '2px solid #5F52AA',
                            padding: '2rem',
                            boxSizing: 'border-box'
                        }}>
                            <h2 className="reveal" style={{
                                fontSize: 'clamp(10rem, 20vw, 40rem)',
                                lineHeight: 0.8,
                                fontFamily: '"Catalogue", sans-serif',
                                fontWeight: 'bold',
                                margin: 0,
                                letterSpacing: '0.02em',
                                color: '#5F52AA',
                                textTransform: 'lowercase'
                            }}>
                                about
                            </h2>
                        </div>

                        {/* Right Column: Video + Info */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: '100%'
                        }}>

                            {/* VIDEO Placeholder (Top Right) */}
                            <div className="reveal" style={{
                                flex: '0 0 50%',
                                borderBottom: '2px solid #5F52AA',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '2rem',
                                boxSizing: 'border-box'
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#5F52AA',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FFFDF5',
                                    fontSize: '2rem',
                                    fontWeight: 'bold'
                                }}>
                                    VIDEO
                                </div>
                            </div>

                            {/* Project Developer Info (Bottom Right) */}
                            <div className="reveal" style={{
                                flex: 1,
                                padding: '2rem',
                                boxSizing: 'border-box',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div>
                                    <h3 style={{
                                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                                        color: '#5F52AA',
                                        marginBottom: '0.5rem',
                                        fontFamily: 'Arial, sans-serif',
                                        fontWeight: 'normal',
                                        lineHeight: 1
                                    }}>
                                        Project Developer
                                    </h3>
                                    <p style={{
                                        fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                                        color: '#5F52AA',
                                        marginBottom: '0',
                                        fontFamily: 'Arial, sans-serif',
                                        fontWeight: 'bold'
                                    }}>
                                        Design, Engineering & Production
                                    </p>
                                </div>
                                <p style={{
                                    fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                                    color: '#5F52AA',
                                    lineHeight: 1.5,
                                    fontFamily: 'Arial, sans-serif'
                                }}>
                                    Powering The Future From What's Left Behind. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: PILLARS (5-Box Grid Layout) */}
                <section style={{
                    backgroundColor: '#5F52AA',
                    color: '#FFFDF5',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    overflowX: 'hidden'
                }}>
                    <div className="pillars-grid" style={{
                        maxWidth: '1600px',
                        width: '100%',
                        height: '100vh', // Force full viewport height
                        margin: '0 auto',
                        padding: '2rem',
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr)', // single column
                        gridTemplateRows: '46fr 15fr 13fr 13fr 13fr', // User specified percentages
                        boxSizing: 'border-box'
                    }}>
                        {/* BOX 1: Pillars Title (Row 1) */}
                        <div className="reveal" style={{
                            gridRow: '1',
                            display: 'flex',
                            alignItems: 'center',
                            paddingBottom: '2rem',
                            justifyContent: 'flex-start' // 1. Left
                        }}>
                            <h2 style={{
                                fontSize: 'clamp(8rem, 15vw, 20rem)', // Slightly smaller max to fit
                                lineHeight: 0.8,
                                fontFamily: 'Catalogue',
                                fontWeight: 'bold',
                                margin: 0,
                                letterSpacing: '0.02em',
                                wordBreak: 'break-word',
                                color: '#FFFDF5',
                                textTransform: 'lowercase'
                            }}>
                                pillars
                            </h2>
                        </div>

                        {/* BOX 2: Dot and Sentences (Row 2) */}
                        <div className="reveal" style={{
                            gridRow: '2',
                            display: 'flex',
                            gap: '2rem',
                            alignItems: 'flex-start',
                            padding: '2rem 0',
                            borderBottom: '1px solid rgba(255,255,255,0.3)',
                            marginLeft: '45%' // 2-5. Middle to Right
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                backgroundColor: '#FFFDF5',
                                flexShrink: 0
                            }}></div>
                            <p style={{
                                fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
                                lineHeight: 1.5,
                                fontFamily: '"Catalogue", Arial, sans-serif',
                                margin: 0,
                                maxWidth: '600px'
                            }}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                            </p>
                        </div>

                        {/* BOX 3: Top Talents (Row 3) */}
                        <div className="reveal" style={{
                            gridRow: '3',
                            padding: '2rem 0',
                            borderBottom: '1px solid rgba(255,255,255,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '45%' // Middle to Right
                        }}>
                            <h3 style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                                fontFamily: '"Catalogue", sans-serif',
                                fontWeight: 'normal',
                                margin: 0,
                                textTransform: 'none'
                            }}>Top talents as partners</h3>
                        </div>

                        {/* BOX 4: Innovation (Row 4) */}
                        <div className="reveal" style={{
                            gridRow: '4',
                            padding: '2rem 0',
                            borderBottom: '1px solid rgba(255,255,255,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '45%' // Middle to Right
                        }}>
                            <h3 style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                                fontFamily: '"Catalogue", sans-serif',
                                fontWeight: 'normal',
                                margin: 0,
                                textTransform: 'none'
                            }}>Innovation</h3>
                        </div>

                        {/* BOX 5: Sustainable (Row 5) */}
                        <div className="reveal" style={{
                            gridRow: '5',
                            padding: '2rem 0 0 0', // No bottom padding/border
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '45%' // Middle to Right
                        }}>
                            <h3 style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                                fontFamily: '"Catalogue", sans-serif',
                                fontWeight: 'normal',
                                margin: 0,
                                textTransform: 'none'
                            }}>Sustainable</h3>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Home;
