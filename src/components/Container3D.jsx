import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Container3D = () => {
    const containerRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        const box = boxRef.current;

        // Initial set
        gsap.set(box, {
            transformPerspective: 1000,
            rotationY: -15,
            rotationX: 10
        });

        // Scroll Animation: Rotate and Move
        gsap.to(box, {
            rotationY: 360,
            y: 100,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
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
        <div ref={containerRef} style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px', overflow: 'hidden' }}>
            <div ref={boxRef} style={{
                width: '300px',
                height: '300px',
                position: 'relative',
                transformStyle: 'preserve-3d'
            }}>
                {/* Front */}
                <div style={{ ...faceStyle, transform: 'translateZ(150px)' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>atoll</div>
                    <div style={{ width: '50px', height: '50px', border: '2px solid #000', borderRadius: '50%' }}></div>
                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        background: '#ff4d3a',
                        color: 'white',
                        padding: '5px 10px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                    }}>
                        MADE IN MONTREAL
                    </div>
                </div>
                {/* Back */}
                <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(150px)' }}>
                    <h3 style={textStyle}>MEMORABLE</h3>
                    <h3 style={textStyle}>BY DESIGN</h3>
                </div>
                {/* Right */}
                <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(150px)' }}>
                    <p style={{ fontFamily: 'var(--content-font)', fontSize: '0.9rem', padding: '1rem', textAlign: 'center' }}>
                        Crafting Powerful Digital Solutions
                    </p>
                </div>
                {/* Left */}
                <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(150px)' }}>
                    <p style={{ fontWeight: 'bold' }}>info@atolldigital.com</p>
                </div>
                {/* Top */}
                <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(150px)', background: '#f8f8f8' }}></div>
                {/* Bottom */}
                <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(150px)', background: '#e0e0e0' }}></div>
            </div>
        </div>
    );
};

export default Container3D;
