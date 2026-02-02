
import Navbar from '../components/Navbar';

const News = () => {
    const products = [
        { title: 'Project Update: West Java', desc: 'Successfully commissioned the new pellet plant extension.', category: 'PROJECT' },
        { title: 'Sustainability Report 2025', desc: 'Our annual report detailing environmental impact and offset milestones.', category: 'REPORT' },
        { title: 'New Partnership', desc: 'Strategic alliance with Global Logistics Co. for streamlined distribution.', category: 'PARTNERSHIP' },
        { title: 'Technology Innovation', desc: 'Introducing AI-driven quality control systems in our factories.', category: 'TECH' }
    ];

    return (
        <div className="page-news" style={{ marginTop: '0', backgroundColor: '#FFFDF5', minHeight: '100vh', padding: '0' }}>
            <Navbar />
            <div style={{ marginTop: '80px', padding: '4rem 0' }}> {/* Spacer + Padding */}
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '6rem' }}>
                        <h1 style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.8, color: '#5F52AA', margin: 0, fontFamily: '"Catalogue", sans-serif', fontWeight: 'bold' }}>
                            news
                        </h1>
                        <div style={{ alignSelf: 'flex-end', borderBottom: '2px solid #5F52AA', paddingBottom: '0.5rem', marginTop: '1rem', width: '100%' }}>
                            {/* Line decoration */}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {products.map((item, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {/* Image Thumbnail Placeholder */}
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '16/9',
                                    backgroundColor: '#ccc',
                                    backgroundImage: `url(https://picsum.photos/seed/${index}/600/400)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}></div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        color: '#FFFDF5',
                                        backgroundColor: '#5F52AA',
                                        padding: '0.2rem 0.5rem'
                                    }}>
                                        {item.category}
                                    </span>
                                    <span style={{ fontSize: '0.9rem', color: '#5F52AA' }}>March 2026</span>
                                </div>

                                <h2 style={{
                                    fontSize: '1.8rem',
                                    color: '#5F52AA',
                                    margin: '0',
                                    lineHeight: 1.2,
                                    fontFamily: 'Arial, sans-serif'
                                }}>
                                    {item.title}
                                </h2>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#555',
                                    margin: 0,
                                    lineHeight: 1.5
                                }}>
                                    {item.desc}
                                </p>
                                <a href="#" style={{
                                    color: '#5F52AA',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    marginTop: '0.5rem',
                                    borderBottom: '1px solid #5F52AA',
                                    alignSelf: 'flex-start'
                                }}>
                                    Read More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
