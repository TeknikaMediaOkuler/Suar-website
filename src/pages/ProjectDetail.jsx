import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ScrollColorBox from '../components/ScrollColorBox';

const ProjectDetail = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div>
            {/* Hero */}
            <section style={{ height: '80vh', display: 'flex', alignItems: 'flex-end', padding: '0 2rem 4rem', position: 'relative' }}>
                <div className="container" style={{ width: '100%' }}>
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9, marginBottom: '2rem' }}>
                        Saya Rengkuh <br /> asli Garut
                    </h1>
                    <div style={{ display: 'flex', gap: '4rem', fontSize: '1.2rem', textTransform: 'uppercase' }}>
                        <div>
                            <strong>Saya Rengkuh</strong><br />
                            asli Garut
                        </div>
                        <div>
                            <strong>Saya Rengkuh</strong><br />
                            asli Garut
                        </div>
                    </div>
                </div>
            </section>

            {/* Big Image */}
            <div style={{ padding: '0 2rem' }}>
                <img
                    src={`https://picsum.photos/1600/900?random=${Math.random()}`}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    alt="Saya Rengkuh asli Garut"
                />
            </div>

            {/* Content Section */}
            <div className="container" style={{ padding: '8rem 2rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', textTransform: 'uppercase' }}>Saya Rengkuh asli Garut</h3>
                </div>
                <div>
                    <p style={{ fontSize: '2rem', lineHeight: 1.4, marginBottom: '2rem' }}>
                        Saya Rengkuh asli Garut. Saya Rengkuh asli Garut. Saya Rengkuh asli Garut.
                        Saya Rengkuh asli Garut. Saya Rengkuh asli Garut. Saya Rengkuh asli Garut.
                    </p>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.6, opacity: 0.8 }}>
                        Saya Rengkuh asli Garut. Saya Rengkuh asli Garut. Saya Rengkuh asli Garut.
                        Saya Rengkuh asli Garut. Saya Rengkuh asli Garut. Saya Rengkuh asli Garut.
                        Saya Rengkuh asli Garut. Saya Rengkuh asli Garut. Saya Rengkuh asli Garut.
                    </p>
                </div>
            </div>

            {/* Scroll Animation */}
            <ScrollColorBox />

            {/* Another Image Grid */}
            <div className="container" style={{ padding: '4rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <img src="https://picsum.photos/800/800?random=100" style={{ width: '100%', borderRadius: '4px' }} alt="Saya Rengkuh asli Garut" />
                <img src="https://picsum.photos/800/800?random=101" style={{ width: '100%', borderRadius: '4px' }} alt="Saya Rengkuh asli Garut" />
            </div>
        </div>
    );
};

export default ProjectDetail;
