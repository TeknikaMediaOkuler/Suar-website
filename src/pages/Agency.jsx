
const Agency = () => {
    return (
        <div className="page-agency" style={{ marginTop: '80px', backgroundColor: '#FFFDF5', minHeight: '100vh', padding: '4rem 0', color: '#5F52AA' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6rem' }}>
                    <div style={{ border: '1px solid #5F52AA', padding: '0.5rem 1rem', fontWeight: 'bold' }}>SUAR</div>
                    <h1 style={{ fontSize: 'clamp(4rem, 12vw, 12rem)', lineHeight: 0.8, textAlign: 'right', margin: 0 }}>
                        about
                    </h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#282824' }}>Our Mission</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#282824' }}>
                            To revolutionize the energy landscape by transforming waste into worth. SUAR acts as the beacon for sustainable biomass solutions, driving efficiency and profitability while preserving our planet.
                        </p>
                    </div>
                    <div>
                        <div style={{ width: '100%', height: '400px', backgroundColor: '#282824', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                            [TEAM / FACILITY IMAGE]
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '8rem', borderTop: '2px solid #5F52AA', paddingTop: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>LEADERSHIP</h2>
                    <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                        {['Strategic Director', 'Operations Head', 'Technical Lead'].map((role, i) => (
                            <div key={i} style={{ flex: 1, minWidth: '250px' }}>
                                <div style={{ width: '100%', height: '300px', backgroundColor: '#e0e0e0', marginBottom: '1rem' }}></div>
                                <h3 style={{ fontSize: '1.5rem', color: '#282824' }}>Name Surname</h3>
                                <p style={{ color: '#5F52AA', fontWeight: 'bold' }}>{role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agency;
