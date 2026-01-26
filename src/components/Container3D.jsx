import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Container3D = () => {
    const containerRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        const box = boxRef.current;

        // Create a MatchMedia instance
        let mm = gsap.matchMedia();

        // --- DESKTOP ANIMATION (> 768px) ---
        mm.add("(min-width: 769px)", () => {
            // Initial Desktop State
            gsap.set(box, {
                transformPerspective: 0,
                rotationY: 45,
                rotationX: 0,
                scale: 1,
                x: 0,
                y: 280, // Start lower down
                autoAlpha: 1
            });

            // 1. Entrance (Fade In)
            gsap.to(box, {
                autoAlpha: 1,
                duration: 0.1,
                scrollTrigger: {
                    trigger: ".scroll-spacer",
                    start: "top 75%",
                    end: "top 70%",
                    scrub: true
                }
            });

            // 2. Movement (Center -> Right)
            gsap.to(box, {
                scrollTrigger: {
                    trigger: ".scroll-spacer",
                    start: "top 75%",
                    end: "bottom center",
                    scrub: true
                },
                rotationY: 180,
                rotationX: 0,
                scale: 1,

                // DESKTOP: Move to Right
                x: '25vw',

                ease: "power1.inOut"
            });

            // 3. Exit / Sticky
            gsap.to(box, {
                scrollTrigger: {
                    trigger: "#biomass-section",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: true
                },
                y: '-120vh',
                ease: "none"
            });
        });

        // --- MOBILE ANIMATION (<= 768px) ---
        mm.add("(max-width: 768px)", () => {
            // Initial Mobile State
            gsap.set(box, {
                transformPerspective: 0,
                rotationY: 45,
                rotationX: 0,
                scale: 0.5, // [MOBILE]: Start Smaller
                x: 0,
                y: 350, // [MOBILE]: Center vertically nicely above content
                autoAlpha: 1
            });

            // 1. Entrance (Fade In)
            gsap.to(box, {
                autoAlpha: 1,
                duration: 0.1,
                scrollTrigger: {
                    trigger: ".scroll-spacer",
                    start: "top 80%",
                    end: "top 75%",
                    scrub: true
                }
            });

            // 2. Movement (Center -> Still Center, but rotated)
            gsap.to(box, {
                scrollTrigger: {
                    trigger: ".scroll-spacer",
                    start: "top 80%",
                    end: "bottom center",
                    scrub: true
                },
                rotationY: 180,
                rotationX: 0,
                scale: 0.5, // [MOBILE]: End scale smaller

                // [MOBILE]: Keep Centered (0) or move slightly
                x: 0,
                // [MOBILE]: Adjust Y to sit "above" content if needed
                y: 50, // Keep at 50 to match start, or adjust if needed

                ease: "power1.inOut"
            });

            // 3. Exit / Sticky
            gsap.to(box, {
                scrollTrigger: {
                    trigger: "#biomass-section",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: '-120vh',
                ease: "none"
            });
        });

        return () => {
            mm.revert(); // Reverts any GSAP/ScrollTrigger changes from matchMedia
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
                    <h3 style={{ ...textStyle, color: '#5F52AA' }}>ALKALINE</h3>
                    <h3 style={{ ...textStyle, color: '#5F52AA' }}>EXTRACTION</h3>
                    <h3 style={{ ...textStyle, color: '#5F52AA' }}>MODULE</h3>
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
