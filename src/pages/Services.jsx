
const Services = () => {
    const services = [
        { title: 'Biomass Factory Operations & Maintenance', desc: 'Ensuring peak performance and longevity of biomass processing facilities through expert management.' },
        { title: 'Biomass Factory Development', desc: 'End-to-end development services from feasibility studies to commissioning of state-of-the-art plants.' },
        { title: 'Industrial Biomass Pellets', desc: 'Production and supply of high-grade wood pellets and PKS for industrial energy needs.' },
        { title: 'Proprietary Systems & Technologies', desc: 'Innovative solutions and custom engineering to optimize biomass conversion efficiency.' }
    ];

    return (
        <div className="page-services" style={{ marginTop: '80px', backgroundColor: '#5F52AA', minHeight: '100vh', padding: '4rem 0', color: '#FFFDF5' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
                    <div style={{ border: '1px solid #FFFDF5', padding: '0.5rem 1rem', fontWeight: 'bold' }}>SUAR</div>
                    <h1 style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.8, textAlign: 'right', margin: 0 }}>
                        services
                    </h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {services.map((service, index) => (
                        <div key={index} className="service-item" style={{ borderTop: '1px solid #FFFDF5', paddingTop: '2rem' }}>
                            <span style={{ fontSize: '1.2rem', display: 'block', marginBottom: '1rem', opacity: 0.7 }}>(0{index + 1})</span>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>{service.title}</h2>
                            <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.9 }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
