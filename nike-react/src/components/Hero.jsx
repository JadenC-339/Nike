import { useState, useEffect } from 'react';

const slides = [
    {
        src: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&q=80',
        alt: 'Premium running shoes',
    },
    {
        src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80',
        alt: 'Athlete training',
    },
    {
        src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80',
        alt: 'Athletic gear collection',
    },
];

export default function Hero({ onSubscribeClick }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visitCount, setVisitCount] = useState(1);

    // Visit counter from localStorage
    useEffect(() => {
        let count = parseInt(localStorage.getItem('visitCount') || '0', 10) + 1;
        localStorage.setItem('visitCount', String(count));
        setVisitCount(count);
    }, []);

    // Auto‑advance slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (idx) => setCurrentSlide(idx);
    const prev = () => setCurrentSlide((c) => (c - 1 + slides.length) % slides.length);
    const next = () => setCurrentSlide((c) => (c + 1) % slides.length);

    return (
        <section className="hero" id="hero">
            <div className="hero-slider">
                {slides.map((slide, i) => (
                    <div key={i} className={`hero-slide ${i === currentSlide ? 'active' : ''}`}>
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            loading={i === 0 ? 'eager' : 'lazy'}
                        />
                    </div>
                ))}
            </div>

            <button className="slider-btn prev" onClick={prev}>‹</button>
            <button className="slider-btn next" onClick={next}>›</button>

            <div className="hero-content">
                <div className="visit-badge">Visit #{visitCount}</div>
                <h1 className="hero-title">UNLEASH YOUR POTENTIAL</h1>
                <p className="hero-subtitle">
                    Elite performance gear engineered for champions who refuse to settle.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary shop-btn">Explore Collection</button>
                    <button className="btn-secondary" onClick={onSubscribeClick}>
                        Join the Movement
                    </button>
                </div>
            </div>

            <div className="slider-dots">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === currentSlide ? 'active' : ''}`}
                        onClick={() => goTo(i)}
                    />
                ))}
            </div>
        </section>
    );
}
