import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/SUAR - LOGO-06.png';

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
            const tickerWidth = tickerContent.offsetWidth;

            gsap.to(tickerContent, {
                x: -tickerWidth / 2,
                duration: 20,
                ease: 'none',
                repeat: -1
            });
        }
    }, []);

    return (
        <div className="page-home" style={{ marginTop: '80px' }}>

            {/* SECTION 1: HERO */}
            <section style={{
                minHeight: '80vh',
                backgroundColor: '#FFFDF5',
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '2px solid #5F52AA',
                position: 'relative'
            }}>
                {/* Main Content Area */}
                <div className="container" style={{
                    flex: 1,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    padding: '6rem 2rem 4rem'
                }}>
                    {/* Left: Large Textured SUAR Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <img
                            src={Logo}
                            alt="SUAR"
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                height: 'auto',
                                filter: 'contrast(1.2)',
                                opacity: 0.9
                            }}
                        />
                    </div>

                    {/* Right: Headline */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h1 className="reveal" style={{
                            color: '#5F52AA',
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            lineHeight: 1.1,
                            fontFamily: 'Georgia, serif',
                            fontWeight: 'normal',
                            letterSpacing: '-0.02em'
                        }}>
                            WHAT'S THROWN AWAY NOW LIGHTS THE WAY
                        </h1>
                    </div>
                </div>

                {/* Scrolling Text Ticker */}
                <div
                    ref={tickerRef}
                    style={{
                        backgroundColor: '#5F52AA',
                        color: '#FFFDF5',
                        padding: '1rem 0',
                        overflow: 'hidden',
                        borderTop: '2px solid #5F52AA',
                        borderBottom: '2px solid #5F52AA',
                        whiteSpace: 'nowrap'
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

                {/* Biomass Image Strip */}
                <div style={{ height: '300px', overflow: 'hidden' }}>
                    <img
                        src="https://picsum.photos/1920/600?grayscale"
                        alt="Biomass Pellets"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                {/* Purple Bottom Section */}
                <div style={{ backgroundColor: '#5F52AA', height: '100px' }}></div>
            </section>

            {/* SECTION 2: BIOMASS (01) */}
            <section style={{
                backgroundColor: '#5F52AA',
                color: '#FFFDF5',
                padding: '6rem 0',
                position: 'relative'
            }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
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
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            maxWidth: '600px',
                            fontFamily: 'Arial, sans-serif'
                        }}>
                            <strong>Powering The Future From What's Left Behind</strong><br />
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br />
                            Ut wisi enim ad minim veniam, quis nostrud
                        </p>
                    </div>

                    {/* BIOMASS heading at bottom */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <h2 className="reveal" style={{
                            fontSize: 'clamp(5rem, 12vw, 10rem)',
                            lineHeight: 0.85,
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 'bold',
                            margin: 0
                        }}>
                            BIOMASS
                        </h2>
                        <span style={{
                            fontSize: '2rem',
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
                borderBottom: '2px solid #5F52AA'
            }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    {/* Large services heading on left */}
                    <h2 className="reveal" style={{
                        fontSize: 'clamp(5rem, 12vw, 10rem)',
                        lineHeight: 0.85,
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 'bold',
                        marginBottom: '4rem',
                        textAlign: 'left'
                    }}>
                        services
                    </h2>

                    {/* Content box on bottom right */}
                    <div className="reveal" style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '2rem',
                        alignItems: 'flex-start'
                    }}>
                        <div style={{
                            width: '120px',
                            height: '120px',
                            backgroundColor: '#5F52AA',
                            flexShrink: 0
                        }}></div>
                        <p style={{
                            maxWidth: '400px',
                            fontSize: '1rem',
                            color: '#282824',
                            lineHeight: 1.6,
                            fontFamily: 'Arial, sans-serif'
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
                borderBottom: '2px solid #5F52AA'
            }}>
                <div className="container" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 2rem',
                    display: 'grid',
                    gridTemplateColumns: '40% 60%',
                    gap: '4rem'
                }}>
                    {/* Left Column: Large "about" heading */}
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <h2 className="reveal" style={{
                            fontSize: 'clamp(5rem, 10vw, 9rem)',
                            lineHeight: 0.85,
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 'bold',
                            margin: 0
                        }}>
                            about
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {/* VIDEO Placeholder */}
                        <div className="reveal" style={{
                            backgroundColor: '#5F52AA',
                            height: '300px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFDF5',
                            fontSize: '2rem',
                            fontWeight: 'bold'
                        }}>
                            VIDEO
                        </div>

                        {/* Project Developer Card */}
                        <div className="reveal" style={{
                            borderTop: '2px solid #5F52AA',
                            paddingTop: '1.5rem'
                        }}>
                            <h3 style={{
                                fontSize: '1.8rem',
                                color: '#5F52AA',
                                marginBottom: '0.5rem',
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 'bold'
                            }}>
                                Project Developer
                            </h3>
                            <p style={{
                                fontSize: '1rem',
                                color: '#282824',
                                marginBottom: '1.5rem',
                                fontFamily: 'Arial, sans-serif'
                            }}>
                                Design, Engineering & Production
                            </p>
                            <p style={{
                                fontSize: '0.95rem',
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
                justifyContent: 'center'
            }}>
                <div className="container" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 2rem',
                    display: 'grid',
                    gridTemplateColumns: '50% 50%',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Left: Large "pillars" heading */}
                    <div>
                        <h2 className="reveal" style={{
                            fontSize: 'clamp(5rem, 10vw, 9rem)',
                            lineHeight: 0.85,
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 'bold',
                            margin: 0
                        }}>
                            pillars
                        </h2>
                    </div>

                    {/* Right: Content */}
                    <div>
                        {/* Circular icon and paragraph */}
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: '#FFFDF5',
                                flexShrink: 0
                            }}></div>
                            <div style={{ flex: 1 }}>
                                <p style={{
                                    fontSize: '0.95rem',
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
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Top talents as partners', 'Innovation', 'Sustainable'].map(item => (
                                <li key={item} className="reveal" style={{
                                    fontSize: '1.5rem',
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
    );
};

export default Home;
