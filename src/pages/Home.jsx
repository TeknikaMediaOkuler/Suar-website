import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/SUAR - LOGO-02.png';
// import Container3D from '../components/Container3D';
import Navbar from '../components/Navbar'; // Commented out as per previous file content

gsap.registerPlugin(ScrollTrigger);

const CapacityAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        { id: '01', title: 'Production', value: '500k', unit: 'Tons/Year', desc: 'High-volume biomass pellet production capacity ensuring steady supply chains and reliable delivery for industrial partners.' },
        { id: '02', title: 'Storage', value: '50k', unit: 'Sqm', desc: 'Extensive warehousing facilities designed to maintain optimal conditions, ensuring stock buffers and product quality year-round.' },
        { id: '03', title: 'Logistics', value: '100+', unit: 'Fleet', desc: 'Dedicated fleet and strategic logistics partnerships enabling efficient, timely global and local distribution networks.' },
        { id: '04', title: 'Partners', value: '25+', unit: 'Global', desc: 'Strategic alliances with industry leaders and technology providers across the renewable energy and biomass sectors.' }
    ];

    return (
        <div className="capacity-accordion reveal" style={{
            display: 'flex',
            width: '100%',
            height: '600px', // Fixed height
            gap: '0',
            borderTop: '2px solid #FFFDF5',
            borderBottom: '2px solid #FFFDF5'
        }}>
            {data.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                    <div
                        key={item.id}
                        onClick={() => setActiveIndex(index)}
                        style={{
                            flex: isActive ? '3' : '0.5', // Flex grow logic
                            backgroundColor: isActive ? '#FFFDF5' : '#5F52AA',
                            color: isActive ? '#5F52AA' : '#FFFDF5',
                            borderRight: index !== data.length - 1 ? '1px solid #FFFDF5' : 'none', // Separator
                            borderLeft: index === 0 ? '1px solid #FFFDF5' : 'none',
                            position: 'relative',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)', // Smooth ease
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: '2rem'
                        }}
                    >
                        {/* Inactive State Content (Visible when collapsed) */}
                        <div style={{
                            position: 'absolute',
                            top: '2rem',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            opacity: isActive ? 0 : 1,
                            transition: 'opacity 0.3s',
                            pointerEvents: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'space-between',
                            paddingBottom: '2rem'
                        }}>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.id}</span>
                            <span style={{
                                fontSize: '1.5rem',
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                                transform: 'rotate(180deg)',
                                whiteSpace: 'nowrap',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>{item.title}</span>
                            <span></span> {/* Spacer */}
                        </div>

                        {/* Active State Content (Visible when expanded) */}
                        <div style={{
                            opacity: isActive ? 1 : 0,
                            transition: 'opacity 0.4s 0.2s', // Delay fade in
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                            minWidth: '400px' // Prevent text wrapping weirdly during transition
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <h3 style={{ fontSize: '3rem', margin: 0, fontFamily: 'Arial, sans-serif' }}>{item.title}</h3>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.id}</span>
                            </div>

                            <div style={{ marginTop: 'auto' }}>
                                <div style={{ fontSize: '5rem', fontWeight: 'bold', lineHeight: 1 }}>{item.value}</div>
                                <div style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.8 }}>{item.unit}</div>
                                <p style={{ fontSize: '1.2rem', maxWidth: '80%' }}>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
            <style>{`
                @media (max-width: 768px) {
                    .capacity-accordion {
                        flex-direction: column !important;
                        height: auto !important;
                    }
                    .capacity-accordion > div {
                        flex: auto !important;
                        width: 100% !important;
                        height: auto !important;
                        min-height: 100px; /* Collapsed height mobile */
                        border-right: none !important;
                        border-bottom: 1px solid #FFFDF5;
                    }
                     /* Mobile Active State adjustments could go here */
                }
            `}</style>
        </div>
    );
};

const Home = () => {
    const tickerRef = useRef(null);

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
                    .about-heading {
                        font-size: 25vw !important; /* Specific mobile override to fit safely */
                        text-align: center !important;
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

                {/* GLOBAL NAVBAR - Passed isHome={true} to enable scroll-to-appear logic */}
                <Navbar isHome={true} />

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
                                        { name: 'Home', path: '/' },
                                        { name: 'About', path: '/about' },
                                        { name: 'Services', path: '/services' },
                                        { name: 'News', path: '/news' }
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
                            <h2 className="reveal about-heading" style={{
                                fontSize: 'clamp(5rem, 15vw, 40rem)', /* Reduced min size and vw scale */
                                lineHeight: 0.8,
                                fontFamily: '"Catalogue", sans-serif',
                                fontWeight: 'bold',
                                margin: 0,
                                letterSpacing: '0.02em',
                                color: '#5F52AA',
                                textTransform: 'lowercase',
                                wordBreak: 'break-word', /* Prevent rigid overflow */
                                width: '100%',
                                textAlign: 'center'
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



                {/* SECTION 6: CAPACITY (Horizontal Accordion) */}
                <section style={{
                    backgroundColor: '#5F52AA',
                    color: '#FFFDF5',
                    padding: '6rem 0',
                    width: '100%',
                    overflowX: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div className="capacity-container" style={{
                        maxWidth: '1600px',
                        width: '100%',
                        padding: '0 2rem',
                        boxSizing: 'border-box'
                    }}>
                        <h2 className="reveal" style={{
                            fontSize: 'clamp(3rem, 5vw, 6rem)',
                            fontFamily: '"Catalogue", sans-serif',
                            fontWeight: 'bold',
                            margin: '0 0 4rem 0',
                            color: '#FFFDF5',
                            textTransform: 'uppercase',
                            textAlign: 'left'
                        }}>
                            Capacity
                        </h2>

                        <CapacityAccordion />
                    </div>
                </section>

            </div>
        </>
    );
};

export default Home;
