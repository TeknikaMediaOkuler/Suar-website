import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    useEffect(() => {
        gsap.utils.toArray('.project-item').forEach(elem => {
            gsap.fromTo(elem,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 90%",
                    }
                }
            )
        });
    }, []);

    const projects = [
        { title: 'Biomass Plant Alpha', location: 'East Java', capacity: '50,000 Tons/Year', img: 'https://picsum.photos/800/600?grayscale&random=10' },
        { title: 'Pellet Factory Beta', location: 'Sumatra', capacity: '35,000 Tons/Year', img: 'https://picsum.photos/800/600?grayscale&random=11' },
        { title: 'Sustainable Supply Chain', location: 'Kalimantan', capacity: 'Logistics Network', img: 'https://picsum.photos/800/600?grayscale&random=12' },
        { title: 'Waste-to-Energy Pilot', location: 'West Java', capacity: '2MW Output', img: 'https://picsum.photos/800/600?grayscale&random=13' }
    ];

    return (
        <div className="page-work" style={{ marginTop: '80px', backgroundColor: '#FFFDF5', minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container">
                <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', color: '#5F52AA', marginBottom: '4rem', lineHeight: 0.8 }}>
                    OUR PROJECTS
                </h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-item" style={{ borderTop: '2px solid #5F52AA', paddingTop: '1rem' }}>
                            <div style={{ overflow: 'hidden', height: '300px', marginBottom: '1rem', backgroundColor: '#e0e0e0' }}>
                                <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply' }} />
                            </div>
                            <h2 style={{ fontSize: '2rem', color: '#282824', marginBottom: '0.5rem' }}>{project.title}</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#5F52AA', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                <span>{project.location}</span>
                                <span>{project.capacity}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
