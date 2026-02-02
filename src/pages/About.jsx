
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    }, []);

    return (
        <div className="page-about" style={{ marginTop: '0', overflowX: 'hidden', width: '100%' }}>
            <Navbar /> {/* Always visible on inner pages */}
            <div style={{ marginTop: '80px' }}> {/* Spacer for fixed nav */}
                {/* SECTION 1: ABOUT Intro */}
                <section style={{
                    backgroundColor: '#FFFDF5',
                    color: '#5F52AA',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    boxSizing: 'border-box',
                    borderBottom: '2px solid #5F52AA'
                }}>
                    <div className="about-grid" style={{
                        maxWidth: '100%',
                        width: '100%',
                        height: 'calc(100vh - 80px)', // Adjust height for navbar
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

                {/* SECTION 2: PILLARS */}
                <section style={{
                    backgroundColor: '#5F52AA',
                    color: '#FFFDF5',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    overflowX: 'hidden',
                    borderBottom: '2px solid #FFFDF5'
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

                {/* SECTION 3: WHY CHOOSE US */}
                <section style={{
                    backgroundColor: '#FFFDF5',
                    color: '#5F52AA',
                    minHeight: '100vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'stretch',
                    borderBottom: '2px solid #5F52AA'
                }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '1600px',
                        margin: '0 auto',
                        display: 'flex', // Main Split: Left 70%, Right 30%
                        flexWrap: 'wrap',
                        minHeight: '100vh'
                    }}>
                        {/* LEFT COLUMN (70%) */}
                        <div className="why-left" style={{
                            flex: '0 0 70%',
                            borderRight: '2px solid #5F52AA',
                            display: 'flex',
                            flexDirection: 'column',
                            minWidth: '300px'
                        }}>
                            {/* Top Left (50%) */}
                            <div style={{
                                flex: 1, // 50% vertical
                                borderBottom: '2px solid #5F52AA',
                                padding: '4rem',
                                display: 'flex', // Center content
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <h2 className="reveal" style={{
                                    fontSize: 'clamp(4rem, 8vw, 10rem)',
                                    fontFamily: '"Catalogue", sans-serif',
                                    fontWeight: 'bold',
                                    textTransform: 'lowercase',
                                    margin: 0,
                                    lineHeight: 0.9,
                                    width: '100%'
                                }}>
                                    why<br />choose<br />us
                                </h2>
                            </div>
                            {/* Bottom Left (50%) */}
                            <div style={{
                                flex: 1, // 50% vertical
                                padding: '4rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <p className="reveal" style={{
                                    fontSize: 'clamp(1.2rem, 1.5vw, 1.8rem)',
                                    lineHeight: 1.4,
                                    maxWidth: '800px'
                                }}>
                                    Our integrated approach combines cutting-edge biomass technology with deep industrial expertise to deliver sustainable energy solutions that are both reliable and environmentally responsible.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN (30%) */}
                        <div className="why-right" style={{
                            flex: '1', // Remaining space (approx 30%)
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '250px'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '80%',
                                backgroundColor: '#5F52AA',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#FFFDF5',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            }}>
                                IMG
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: PARTNERSHIP (Placeholder) */}
                <section style={{
                    backgroundColor: '#5F52AA',
                    color: '#FFFDF5',
                    minHeight: '80vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '4rem 2rem'
                }}>
                    <h2 className="reveal" style={{
                        fontSize: 'clamp(3rem, 10vw, 8rem)',
                        fontFamily: '"Catalogue", sans-serif',
                        fontWeight: 'bold',
                        textTransform: 'lowercase',
                        marginBottom: '2rem'
                    }}>
                        partnerships
                    </h2>
                    <p className="reveal" style={{
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        maxWidth: '600px',
                        opacity: 0.8
                    }}>
                        Collaborating for a sustainable future.
                    </p>
                </section>

                <style>{`
                @media (max-width: 900px) {
                    .why-left {
                        flex: 0 0 100% !important;
                        border-right: none !important;
                        border-bottom: 2px solid #5F52AA;
                    }
                    .why-right {
                         flex: 0 0 100% !important;
                         min-height: 400px;
                    }
                    .about-grid {
                        grid-template-columns: 1fr !important;
                        height: auto !important;
                    }
                    .about-grid > div {
                        border-right: none !important;
                        border-bottom: 2px solid #5F52AA;
                    }
                }
            `}</style>
            </div>
        </div>
    );
};

export default About;
