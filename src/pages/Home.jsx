import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
        ScrollTrigger.refresh();

        // Simple reveal
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
        <div className="page-home" style={{ marginTop: '80px' }}>

            {/* SECTION 1: HERO */}
            <section style={{
                minHeight: '70vh',
                backgroundColor: '#FFFDF5',
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '2px solid #5F52AA'
            }}>
                <div className="container" style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '4rem 2rem' }}>
                    <div style={{ flex: 1 }}>
                        <img src="https://picsum.photos/600/300?grayscale" alt="SUAR Branding" style={{ width: '100%', height: 'auto', mixBlendMode: 'multiply', opacity: 0.8 }} />
                    </div>
                    <div style={{ flex: 1, paddingLeft: '4rem' }}>
                        <h1 className="reveal" style={{
                            color: '#5F52AA',
                            fontSize: 'clamp(2rem, 4vw, 4rem)',
                            lineHeight: 1,
                            maxWidth: '600px',
                            fontFamily: 'var(--title-font)' // Assuming stencil/grunge font loaded
                        }}>
                            WHAT'S THROWN AWAY NOW LIGHTS THE WAY
                        </h1>
                    </div>
                </div>
                {/* Biomass Image Strip */}
                <div style={{ height: '200px', overflow: 'hidden', borderTop: '2px solid #5F52AA' }}>
                    <img src="https://picsum.photos/1920/400?grayscale" alt="Biomass Texture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </section>

            {/* SECTION 2: BIOMASS (01) */}
            <section style={{
                backgroundColor: '#5F52AA',
                color: '#FFFDF5',
                padding: '6rem 0',
                position: 'relative'
            }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div>
                        <p className="reveal" style={{ fontSize: '1.2rem', lineHeight: 1.5, maxWidth: '400px' }}>
                            ...Powering The Future From What's Left Behind.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <h2 className="reveal" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', lineHeight: 0.8 }}>BIOMASS</h2>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#F1C40F' }}>(01)</span>
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
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', width: '100%' }}>
                            <div style={{ border: '1px solid #5F52AA', padding: '0.5rem', fontWeight: 'bold' }}>SUAR</div>
                            <h2 className="reveal" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', lineHeight: 0.8, flex: 1, textAlign: 'right' }}>services</h2>
                        </div>
                    </div>

                    <div className="reveal" style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem' }}>
                        <div style={{ width: '100px', height: '100px', backgroundColor: '#5F52AA' }}></div>
                        <p style={{ maxWidth: '300px', fontSize: '0.9rem', color: '#282824' }}>
                            Powering The Future From What's Left Behind. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
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
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
                    {/* Left Col */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ border: '1px solid #5F52AA', padding: '0.5rem', fontWeight: 'bold' }}>SUAR</div>
                        </div>
                        <h2 className="reveal" style={{ fontSize: 'clamp(4rem, 7vw, 7rem)', lineHeight: 0.8, marginBottom: '4rem' }}>about</h2>

                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#282824' }}>Project Developer</h3>
                            <p style={{ fontSize: '0.9rem', color: '#282824', maxWidth: '300px' }}>
                                Design, Engineering & Production. Powering The Future From What's Left Behind.
                            </p>
                        </div>
                    </div>

                    {/* Right Col */}
                    <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, auto)', gap: '2rem' }}>
                        <div className="reveal" style={{ backgroundColor: '#5F52AA', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                            VIDEO PLACEHOLDER
                        </div>
                        <div style={{ borderTop: '2px solid #5F52AA', paddingTop: '1rem' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#282824', marginBottom: '0.5rem' }}>Project Developer</h3>
                            <div style={{ backgroundColor: '#5F52AA', height: '150px' }}></div>
                        </div>
                        <div style={{ borderTop: '2px solid #5F52AA', paddingTop: '1rem' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#282824', marginBottom: '0.5rem' }}>EPC & Offtaker</h3>
                            <div style={{ backgroundColor: '#5F52AA', height: '150px' }}></div>
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
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
                        <div style={{ border: '1px solid #FFFDF5', padding: '0.5rem', fontWeight: 'bold', color: '#F1C40F' }}>SUAR</div>
                    </div>

                    <h2 className="reveal" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', lineHeight: 0.8, marginBottom: '6rem' }}>pillars</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <div style={{ marginBottom: '2rem', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#FFFDF5' }}></div>

                        <ul style={{ listStyle: 'none', textAlign: 'right' }}>
                            {['Top talents as partners', 'Innovation', 'Sustainable'].map(item => (
                                <li key={item} className="reveal" style={{
                                    fontSize: '1.5rem',
                                    padding: '1rem 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.3)',
                                    width: '100%',
                                    minWidth: '400px'
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
