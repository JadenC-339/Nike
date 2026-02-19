export default function Footer({ onSubscribeClick }) {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>NIKE</h3>
                    <p>Premium athletic gear for champions who refuse to settle.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Instagram">📷</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                        <a href="#" aria-label="Facebook">📘</a>
                        <a href="#" aria-label="YouTube">📹</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <a href="#products">Products</a>
                    <a href="#faq">FAQ</a>
                    <a href="#contact">Contact</a>
                    <a href="#">About Us</a>
                </div>

                <div className="footer-section">
                    <h4>Support</h4>
                    <a href="#">Shipping Info</a>
                    <a href="#">Returns</a>
                    <a href="#">Size Guide</a>
                    <a href="#">Track Order</a>
                </div>

                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <p>Stay updated with our latest releases and exclusive offers.</p>
                    <button className="btn-secondary" onClick={onSubscribeClick}>
                        Subscribe Now
                    </button>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 NIKE. All rights reserved.</p>
                <p>
                    Inspired by{' '}
                    <a href="https://www.nike.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        nike.in
                    </a>{' '}
                    | Academic Project
                </p>
            </div>
        </footer>
    );
}
