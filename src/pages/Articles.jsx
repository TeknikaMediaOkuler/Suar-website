
const Articles = () => {
    const products = [
        { title: 'Wood Pellets', desc: 'High-calorific value biomass fuel sourced from sustainable timber residues.', category: 'FUEL' },
        { title: 'Palm Kernel Shells', desc: 'Premium grade PKS for industrial boilers and power plants.', category: 'FUEL' },
        { title: 'Empty Fruit Bunches', desc: 'Processed EFB fiber for various industrial applications.', category: 'RAW MATERIAL' },
        { title: 'Wood Chips', desc: 'Uniformly chipped wood biomass for energy generation.', category: 'FUEL' }
    ];

    return (
        <div className="page-articles" style={{ marginTop: '80px', backgroundColor: '#FFFDF5', minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '6rem' }}>
                    <h1 style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.8, color: '#282824', margin: 0 }}>
                        products
                    </h1>
                    <div style={{ alignSelf: 'flex-end', borderBottom: '2px solid #5F52AA', paddingBottom: '0.5rem', marginTop: '1rem' }}>
                        <span style={{ fontSize: '1.2rem', color: '#5F52AA', fontWeight: 'bold' }}>SUAR CATALOGUE 2026</span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    {products.map((product, index) => (
                        <div key={index} style={{ border: '2px solid #5F52AA', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '300px' }}>
                            <div>
                                <span style={{ backgroundColor: '#5F52AA', color: '#FFFDF5', padding: '0.2rem 0.5rem', fontSize: '0.8rem', fontWeight: 'bold' }}>{product.category}</span>
                                <h2 style={{ fontSize: '2.5rem', color: '#282824', margin: '1rem 0 2rem 0' }}>{product.title}</h2>
                            </div>
                            <p style={{ fontSize: '1.1rem', color: '#555' }}>{product.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Articles;
