import { useState } from 'react';

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function SubscribeModal({ isOpen, onClose, showNotification }) {
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const handleSubmit = () => {
        if (validateEmail(email.trim())) {
            showNotification('Successfully subscribed! Welcome to the team.', 'success');
            setEmail('');
            onClose();
        } else {
            showNotification('Please enter a valid email address.', 'error');
        }
    };

    return (
        <div
            className="modal active"
            style={{ display: 'flex' }}
            onClick={handleBackdropClick}
        >
            <div className="modal-content">
                <button className="close-modal" onClick={onClose}>
                    &times;
                </button>
                <h2>Join the NIKE Movement</h2>
                <p>Get exclusive access to new releases, special offers, and athlete tips.</p>
                <div className="modal-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    />
                    <button className="btn-primary" onClick={handleSubmit}>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
