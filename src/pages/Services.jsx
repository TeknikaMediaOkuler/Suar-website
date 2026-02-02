
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceRow = ({ leftImg, rightImg, leftText, rightText, defaultText }) => {
    const [currentText, setCurrentText] = useState(defaultText);
    const textRef = useRef(null);
    const transitionRef = useRef(null);

    // State to track hover for image filter effect
    const [hoveredSide, setHoveredSide] = useState(null); // 'left', 'right', or null

    const handleTextChange = (newText, side) => {
        // Kill any ongoing transition
        if (transitionRef.current) transitionRef.current.kill();

        setHoveredSide(side);

        // If text is already the same, do nothing (optional optimization)
        if (currentText === newText) return;

        // Fade Out -> Change Text -> Fade In
        transitionRef.current = gsap.to(textRef.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                setCurrentText(newText);
                gsap.to(textRef.current, {
                    opacity: 1,
                    duration: 0.2
                });
            }
        });
    };

    return (
        <div className="service-row reveal" style={{
            display: 'flex',
            width: '100%',
            height: '400px', // Fixed height for rows
            // borderBottom: '2px solid #5F52AA', // REMOVED BORDER
            alignItems: 'stretch',
            marginBottom: '2rem' // Add spacing instead of border
        }}>
            {/* LEFT IMAGE (40%) */}
            <div
                className="service-img-container"
                onMouseEnter={() => handleTextChange(leftText, 'left')}
                onMouseLeave={() => handleTextChange(defaultText, null)}
                style={{
                    flex: '4', // Approx 36%
                    // borderRight: '2px solid #5F52AA', // REMOVED BORDER
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'crosshair',
                    backgroundColor: '#ccc'
                }}
            >
                {leftImg ? (
                    <img
                        src={leftImg}
                        alt="Service Left"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'filter 0.5s ease, transform 0.5s ease',
                            filter: hoveredSide === 'left' ? 'brightness(1.1) contrast(1.1)' : 'grayscale(100%) brightness(0.9)',
                            transform: hoveredSide === 'left' ? 'scale(1.05)' : 'scale(1)'
                        }}
                    />
                ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', backgroundColor: '#e0e0e0' }}>IMAGE A</div>
                )}
            </div>

            {/* CENTER TEXT (30%) */}
            <div style={{
                flex: '3', // Approx 27% (Requested 30%)
                // borderRight: '2px solid #5F52AA', // REMOVED BORDER
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                backgroundColor: '#FFFDF5',
                color: '#5F52AA',
                textAlign: 'center'
            }}>
                <p
                    ref={textRef}
                    style={{
                        fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                        fontFamily: '"Catalogue", sans-serif',
                        fontWeight: 'bold',
                        margin: 0
                        // Removed CSS transition to let GSAP handle opacity
                    }}>
                    {currentText}
                </p>
            </div>

            {/* RIGHT IMAGE (40%) */}
            <div
                className="service-img-container"
                onMouseEnter={() => handleTextChange(rightText, 'right')}
                onMouseLeave={() => handleTextChange(defaultText, null)}
                style={{
                    flex: '4', // Approx 36%
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'crosshair',
                    backgroundColor: '#ccc'
                }}
            >
                {rightImg ? (
                    <img
                        src={rightImg}
                        alt="Service Right"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'filter 0.5s ease, transform 0.5s ease',
                            filter: hoveredSide === 'right' ? 'brightness(1.1) contrast(1.1)' : 'grayscale(100%) brightness(0.9)',
                            transform: hoveredSide === 'right' ? 'scale(1.05)' : 'scale(1)'
                        }}
                    />
                ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', backgroundColor: '#e0e0e0' }}>IMAGE B</div>
                )}
            </div>
        </div>
    );
};

import Navbar from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

// ... ServiceRow component (unchanged) ...

const Services = () => {
    useEffect(() => {
        ScrollTrigger.refresh();
        // ... (animations logic unchanged)
    }, []);

    return (
        <div className="page-services" style={{ marginTop: '0', overflowX: 'hidden', width: '100%' }}>
            <Navbar /> {/* Always visible */}
            <div style={{ marginTop: '80px' }}> {/* Spacer for fixed nav */}

                {/* HERO SECTION (Transferred from Home) */}
                <section style={{
                    backgroundColor: '#FFFDF5',
                    color: '#5F52AA',
                    minHeight: '85vh',
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
                            maxWidth: '800px',
                            width: '100%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start'
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

                {/* INTERACTIVE ROWS SECTION */}
                <section style={{
                    backgroundColor: '#FFFDF5',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '4rem'
                }}>
                    <ServiceRow
                        defaultText="Operations & Maintenance"
                        leftText="Factory Management: Ensuring 24/7 efficiency."
                        rightText="Predictive Maintenance: Minimizing downtime."
                        leftImg="https://picsum.photos/id/1018/800/600"
                        rightImg="https://picsum.photos/id/1015/800/600"
                    />
                    <ServiceRow
                        defaultText="Factory Development"
                        leftText="Feasibility Studies: Analyzing potential."
                        rightText="EPC: Engineering, Procurement, Construction."
                        leftImg="https://picsum.photos/id/1033/800/600"
                        rightImg="https://picsum.photos/id/1031/800/600"
                    />
                    <ServiceRow
                        defaultText="Supply Chain"
                        leftText="Raw Material Sourcing: Sustainable EFB."
                        rightText="Logistics: Efficient global delivery."
                        leftImg="https://picsum.photos/id/1041/800/600"
                        rightImg="https://picsum.photos/id/1043/800/600"
                    />
                    <ServiceRow
                        defaultText="Technology"
                        leftText="Proprietary Systems: Optimizing conversion."
                        rightText="R&D: Innovating for the future."
                        leftImg="https://picsum.photos/id/1050/800/600"
                        rightImg="https://picsum.photos/id/1056/800/600"
                    />
                </section>

                <style>{`
                @media (max-width: 768px) {
                    .service-row {
                        flex-direction: column !important;
                        height: auto !important;
                    }
                    .service-row > div {
                        width: 100% !important;
                        border-right: none !important;
                        border-bottom: 2px solid #5F52AA;
                        min-height: 200px;
                    }
                }
            `}</style>

            </div>
        </div>
    );
};

export default Services;
