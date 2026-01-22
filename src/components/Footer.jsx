import { Link } from 'react-router-dom';
import Logo from '../assets/Images/SUAR - LOGO-06.png'; // Reuse existing logo
import LogoHuge from '../assets/Images/SUAR - LOGO-20.png'; // Assuming this is a larger version or just reuse 06.

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#282824', // Black bg
            color: '#FFFDF5', // Bone White text
            padding: '4rem 2rem',
            marginTop: '0'
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4rem', marginBottom: '8rem' }}>
                    <div style={{ maxWidth: '400px' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', opacity: 0.6, fontFamily: 'var(--title-font)', textTransform: 'uppercase' }}>CORE SERVICES</h4>
                        <ul style={{ listStyle: 'none', lineHeight: 2, fontSize: '0.9rem' }}>
                            <li>Biomass Factory Operations & Maintenance</li>
                            <li>Biomass Factory Development</li>
                            <li>Industrial Biomass Pellets</li>
                            <li>Proprietary Systems & Technologies</li>
                        </ul>
                    </div>

                    <div style={{ display: 'flex', gap: '4rem' }}>
                        <ul style={{ listStyle: 'none', fontSize: '1.2rem', lineHeight: 1.5 }}>
                            <li><Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link></li>
                            <li><Link to="/agency" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link></li>
                            <li><Link to="/work" style={{ color: 'inherit', textDecoration: 'none' }}>Work</Link></li>
                            <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link></li>
                        </ul>
                        <ul style={{ listStyle: 'none', fontSize: '1.2rem', lineHeight: 1.5 }}>
                            <li>LINKEDIN</li>
                            <li>INSTAGRAM</li>
                        </ul>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                    {/* Large Logo or Text */}
                    <div style={{ flex: 1 }}>
                        <img src={Logo} alt="SUAR" style={{ width: 'clamp(200px, 40vw, 600px)', filter: 'brightness(100) invert(0)' }} />
                    </div>

                    <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
                        <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.6 }}>COOKIES POLICY</p>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>SUAR © 2026</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
