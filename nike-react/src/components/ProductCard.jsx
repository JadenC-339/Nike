import { useState } from 'react';

export default function ProductCard({ title, image, shortText, fullText, badge }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="product-card animate-in">
            <div className="product-img">
                <img src={image} alt={title} loading="lazy" />
            </div>
            {badge && <div className="product-badge">{badge}</div>}

            <h3>{title}</h3>

            {expanded ? (
                <p className="full-text">{fullText}</p>
            ) : (
                <p className="short-text">{shortText}</p>
            )}

            <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
}
