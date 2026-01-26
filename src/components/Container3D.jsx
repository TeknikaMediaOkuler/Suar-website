import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Container3D = () => {
    const containerRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        const box = boxRef.current;

        // Initial set - Centered, scaled down slightly, and HIDDEN
        gsap.set(box, {
            transformPerspective: 0,
            rotationY: 45,
            rotationX: 0,
            scale: 1, // Start slightly smaller/normal
            x: 0,
            y: 280,
            autoAlpha: 1 // Visibility hidden + opacity 0
        });

        // 1. Entrance (Fade In)
        // separate from movement to ensure it's visible quickly
        gsap.to(box, {
            autoAlpha: 1,
            duration: 0.1,
            scrollTrigger: {
                trigger: ".scroll-spacer",
                // [USER CONFIG]: Change 'start' below to adjust when fading starts.
                // "top bottom" = When the top of the spacer hits the bottom of the viewport.
                // "top center" = When the top of the spacer hits the center of the viewport.
                start: "top 75%", // Changed to 75% to delay start slightly 
                end: "top 70%", // fade in quickly
                scrub: 1
            }
        });

        // 2. Movement (Center -> Right)
        gsap.to(box, {
            scrollTrigger: {
                trigger: ".scroll-spacer",
                // [USER CONFIG]: Adjust 'start' to delay or hasten the movement.
                start: "top 75%",
                end: "bottom center",
                scrub: 1
            },
            rotationY: 180, // [USER CONFIG]: End rotation angle
            rotationX: 0,
            scale: 1, // [USER CONFIG]: End scale size

            // [USER CONFIG]: FINAL POSITION
            // x: '35vw' means move 35% of the viewport width to the RIGHT. 
            // Change to '0' for center, '-30vw' for left, '500px' for exact pixels, etc.
            x: '25vw',

            // y: '0' (default). Add y: '100px' to move it down, or y: '-50px' to move up relative to center.

            ease: "power1.inOut"
        });

        // 3. Exit / Sticky
        // Moves the box UP as the section scrolls UP
        gsap.to(box, {
            scrollTrigger: {
                trigger: "#biomass-section",
                start: "bottom bottom", // as the bottom of biomass hits bottom of viewport
                end: "bottom top", // until it hits top of viewport
                scrub: 1
            },
            y: '-120vh', // Move up slightly more than 100vh to ensure it clears
            ease: "none" // Linear movement matches scroll
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const faceStyle = {
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: '#fff',
        border: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backfaceVisibility: 'hidden',
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)'
    };

    const textStyle = {
        fontFamily: 'var(--title-font)',
        fontSize: '2rem',
        color: '#091423'
    };

    return (
        <div ref={containerRef} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            perspective: '1000px',
            overflow: 'hidden',
            pointerEvents: 'none', // Allow clicking through
            zIndex: 10 // Above content but below navbar/etc if needed
        }}>
            <div ref={boxRef} style={{
                width: '300px',
                height: '300px',
                position: 'relative',
                transformStyle: 'preserve-3d',
                opacity: 0, // Ensure hidden initially by CSS
                visibility: 'hidden'
            }}>
                {/* Front */}
                <div style={{ ...faceStyle, transform: 'translateZ(150px)', border: '2px solid #5F52AA' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#5F52AA', fontFamily: 'Georgia, serif' }}>SUAR</div>
                    <div style={{ width: '50px', height: '50px', border: '2px solid #5F52AA', borderRadius: '50%', backgroundColor: '#FFC933' }}></div>
                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        background: '#5F52AA',
                        color: '#FFFDF5',
                        padding: '5px 10px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        letterSpacing: '1px'
                    }}>
                        SUAR ENERGI FUTURA
                    </div>
                </div>
                {/* Back */}
                <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(150px)', border: '2px solid #5F52AA' }}>
                    <h3 style={{ ...textStyle, color: '#5F52AA' }}>MEMORABLE</h3>
                    <h3 style={{ ...textStyle, color: '#5F52AA' }}>BY DESIGN</h3>
                </div>
                {/* Right */}
                <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(150px)', border: '2px solid #5F52AA' }}>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', padding: '1rem', textAlign: 'center', color: '#5F52AA', fontWeight: 'bold' }}>
                        Transforming Waste Into Energy
                    </p>
                </div>
                {/* Left */}
                <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(150px)', border: '2px solid #5F52AA' }}>
                    <p style={{ fontWeight: 'bold', color: '#5F52AA' }}>contact@suar.co.id</p>
                </div>
                {/* Top */}
                <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(150px)', background: '#FFC933', border: '2px solid #5F52AA' }}></div>
                {/* Bottom */}
                <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(150px)', background: '#5F52AA', border: '2px solid #5F52AA' }}></div>
            </div>
        </div>
    );
};

export default Container3D;
