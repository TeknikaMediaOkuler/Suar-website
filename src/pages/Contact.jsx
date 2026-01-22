
const Contact = () => {
    return (
        <div className="page-contact" style={{ marginTop: '80px', backgroundColor: '#282824', minHeight: '100vh', padding: '4rem 0', color: '#FFFDF5' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '6rem' }}>
                    <h1 style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.8, color: '#FFFDF5', margin: 0 }}>
                        contact
                    </h1>
                    <p style={{ fontSize: '1.5rem', marginTop: '2rem', maxWidth: '600px', color: '#999' }}>
                        Interested in sustainable energy solutions? Let's start a conversation.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Contact Info */}
                    <div style={{ border: '1px solid #5F52AA', padding: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#5F52AA' }}>Headquarters</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            123 Biomass Avenue<br />
                            Sustainable City, SC 45678<br />
                            Indonesia
                        </p>
                        <a href="mailto:info@suar.com" style={{ fontSize: '1.5rem', color: '#FFFDF5', textDecoration: 'none', borderBottom: '1px solid #5F52AA' }}>info@suar.com</a>
                    </div>

                    {/* Simple Form */}
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <input type="text" placeholder="NAME" style={{ padding: '1rem', backgroundColor: 'transparent', border: '1px solid #555', color: '#FFF', fontSize: '1rem' }} />
                        <input type="email" placeholder="EMAIL" style={{ padding: '1rem', backgroundColor: 'transparent', border: '1px solid #555', color: '#FFF', fontSize: '1rem' }} />
                        <textarea placeholder="MESSAGE" rows="5" style={{ padding: '1rem', backgroundColor: 'transparent', border: '1px solid #555', color: '#FFF', fontSize: '1rem' }}></textarea>
                        <button type="submit" style={{ padding: '1rem 2rem', backgroundColor: '#5F52AA', color: '#FFFDF5', border: 'none', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 'bold' }}>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
