import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/SUAR - LOGO-02.png';

gsap.registerPlugin(ScrollTrigger);

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
                        padding: 1.5rem 1rem !important;
                        justify-content: center !important;
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
            `}</style>

            <div className="page-home" style={{ marginTop: '0', overflowX: 'hidden', width: '100%' }}>

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
                                {/* Nav Items */}
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
                                            // Using Arial as placeholder for "interface font" 
                                            // assuming 'var(--content-font)' is similar
                                            fontWeight: 'bold',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        <span style={{
                                            color: '#FFC933', // Yellow accent 
                                            fontSize: '0.8em',
                                            transform: 'rotate(90deg)', // Pointing down/rightish
                                            display: 'inline-block'
                                        }}>▼</span>
                                        {item.name}
                                    </Link>
                                ))}
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

                {/* SECTION 2: BIOMASS (01) */}
                <section style={{
                    backgroundColor: '#5F52AA',
                    color: '#FFFDF5',
                    padding: '6rem 0',
                    position: 'relative',
                    width: '100%',
                    overflowX: 'hidden'
                }}>
                    <div className="biomass-container" style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 2rem',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}>
                        {/* ABOUT Label */}
                        <div style={{ marginBottom: '3rem' }}>
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                letterSpacing: '0.1em',
                                color: '#FFFDF5'
                            }}>
                                ABOUT
                            </span>
                        </div>

                        {/* Paragraph at top */}
                        <div style={{ marginBottom: '4rem' }}>
                            <p className="reveal" style={{
                                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                                lineHeight: 1.6,
                                maxWidth: '600px',
                                fontFamily: 'Arial, sans-serif',
                                width: '100%'
                            }}>
                                <strong>Powering The Future From What's Left Behind</strong><br />
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br />
                                Ut wisi enim ad minim veniam, quis nostrud
                            </p>
                        </div>

                        {/* BIOMASS heading at bottom */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            width: '100%'
                        }}>
                            <h2 className="reveal" style={{
                                fontSize: 'clamp(3rem, 12vw, 10rem)',
                                lineHeight: 0.85,
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 'bold',
                                margin: 0,
                                wordBreak: 'break-word'
                            }}>
                                BIOMASS
                            </h2>
                            <span style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                fontWeight: 'bold',
                                marginBottom: '1rem',
                                color: '#FFC933'
                            }}>
                                (01)
                            </span>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: SERVICES */}
                <section style={{
                    backgroundColor: '#FFFDF5',
                    color: '#5F52AA',
                    padding: '6rem 0',
                    borderBottom: '2px solid #5F52AA',
                    width: '100%',
                    overflowX: 'hidden'
                }}>
                    <div className="services-container" style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 2rem',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}>
                        {/* Large services heading on left */}
                        <h2 className="reveal" style={{
                            fontSize: 'clamp(3rem, 12vw, 10rem)',
                            lineHeight: 0.85,
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 'bold',
                            marginBottom: '4rem',
                            textAlign: 'left',
                            wordBreak: 'break-word'
                        }}>
                            services
                        </h2>

                        {/* Content box on bottom right */}
                        <div className="reveal services-content" style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: '2rem',
                            alignItems: 'flex-start',
                            width: '100%'
                        }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                backgroundColor: '#5F52AA',
                                flexShrink: 0
                            }}></div>
                            <p style={{
                                maxWidth: '400px',
                                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                color: '#282824',
                                lineHeight: 1.6,
                                fontFamily: 'Arial, sans-serif',
                                width: '100%'
                            }}>
                                <strong>Powering The Future From What's Left Behind</strong><br />
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: ABOUT */}
                <section style={{
                    backgroundColor: '#FFFDF5',
                    color: '#5F52AA',
                    padding: '6rem 0',
                    borderBottom: '2px solid #5F52AA',
                    width: '100%',
                    overflowX: 'hidden'
                }}>
                    <div className="about-grid" style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 2rem',
                        display: 'grid',
                        gridTemplateColumns: '40% 60%',
                        gap: '4rem',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}>
                        {/* Left Column: Large "about" heading */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                            <h2 className="reveal" style={{
                                fontSize: 'clamp(3rem, 10vw, 9rem)',
                                lineHeight: 0.85,
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 'bold',
                                margin: 0,
                                wordBreak: 'break-word'
                            }}>
                                about
                            </h2>
                        </div>

                        {/* Right Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                            {/* VIDEO Placeholder */}
                            <div className="reveal" style={{
                                backgroundColor: '#5F52AA',
                                height: '300px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#FFFDF5',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                width: '100%'
                            }}>
                                VIDEO
                            </div>

                            {/* Project Developer Card */}
                            <div className="reveal" style={{
                                borderTop: '2px solid #5F52AA',
                                paddingTop: '1.5rem',
                                width: '100%'
                            }}>
                                <h3 style={{
                                    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                                    color: '#5F52AA',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'Arial, sans-serif',
                                    fontWeight: 'bold'
                                }}>
                                    Project Developer
                                </h3>
                                <p style={{
                                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                    color: '#282824',
                                    marginBottom: '1.5rem',
                                    fontFamily: 'Arial, sans-serif'
                                }}>
                                    Design, Engineering & Production
                                </p>
                                <p style={{
                                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                                    color: '#282824',
                                    lineHeight: 1.6,
                                    fontFamily: 'Arial, sans-serif'
                                }}>
                                    Powering The Future From What's Left Behind Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. d
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: PILLARS */}
                <section style={{
                    backgroundColor: '#5F52AA',
                    color: '#FFFDF5',
                    padding: '6rem 0',
                    minHeight: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    overflowX: 'hidden'
                }}>
                    <div className="pillars-grid" style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 2rem',
                        display: 'grid',
                        gridTemplateColumns: '50% 50%',
                        gap: '4rem',
                        alignItems: 'center',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}>
                        {/* Left: Large "pillars" heading */}
                        <div style={{ width: '100%' }}>
                            <h2 className="reveal" style={{
                                fontSize: 'clamp(3rem, 10vw, 9rem)',
                                lineHeight: 0.85,
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 'bold',
                                margin: 0,
                                wordBreak: 'break-word'
                            }}>
                                pillars
                            </h2>
                        </div>

                        {/* Right: Content */}
                        <div style={{ width: '100%' }}>
                            {/* Circular icon and paragraph */}
                            <div className="pillars-content-flex" style={{
                                display: 'flex',
                                gap: '1.5rem',
                                marginBottom: '3rem',
                                alignItems: 'flex-start',
                                width: '100%'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: '#FFFDF5',
                                    flexShrink: 0
                                }}></div>
                                <div style={{ flex: 1, width: '100%' }}>
                                    <p style={{
                                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                                        lineHeight: 1.6,
                                        fontFamily: 'Arial, sans-serif',
                                        marginBottom: '1rem'
                                    }}>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                                    </p>
                                    <div style={{
                                        width: '20px',
                                        height: '20px',
                                        backgroundColor: '#FFC933',
                                        marginLeft: 'auto'
                                    }}></div>
                                </div>
                            </div>

                            {/* Three pillar items */}
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                                {['Top talents as partners', 'Innovation', 'Sustainable'].map(item => (
                                    <li key={item} className="reveal" style={{
                                        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                                        padding: '1.5rem 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.3)',
                                        fontFamily: 'Arial, sans-serif'
                                    }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Home;
