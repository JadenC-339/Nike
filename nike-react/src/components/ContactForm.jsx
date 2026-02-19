import { useState } from 'react';

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm({ showNotification }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field as user types
        if (errors[name]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(form.email.trim())) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!form.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (form.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            showNotification("Message sent successfully! We'll get back to you soon.", 'success');
            setForm({ name: '', email: '', message: '' });
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="section-header">
                <h2>Get In Touch</h2>
                <p className="section-subtitle">We'd love to hear from you</p>
            </div>

            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={form.name}
                            onChange={handleChange}
                            className={errors.name ? 'error-field' : ''}
                        />
                        {errors.name && <div className="error-message">{errors.name}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={handleChange}
                            className={errors.email ? 'error-field' : ''}
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Tell us what's on your mind..."
                            value={form.message}
                            onChange={handleChange}
                            className={errors.message ? 'error-field' : ''}
                        />
                        {errors.message && <div className="error-message">{errors.message}</div>}
                    </div>

                    <button type="submit" className="btn-primary submit-btn">
                        Send Message
                    </button>
                </form>

                <div className="contact-info">
                    <div className="info-item">
                        <div className="info-icon">📧</div>
                        <div>
                            <h4>Email</h4>
                            <p>support@nike.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">📱</div>
                        <div>
                            <h4>Phone</h4>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">📍</div>
                        <div>
                            <h4>Location</h4>
                            <p>Mumbai, Maharashtra, IN</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
