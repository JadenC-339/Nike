import { useState } from 'react';

const NikeLogo = () => (
    <svg className="nike-logo" viewBox="0 0 69 32" fill="currentColor">
        <path
            d="M68.56 4.06C67.68 3.6 66.62 3.38 65.42 3.38c-3.1 0-6.26 1.74-9.5 5.18L27.26 39.08c-3.26 3.44-5.92 5.18-7.96 5.18-.92 0-1.62-.34-2.12-.98-.5-.66-.74-1.52-.74-2.6 0-1.56.52-3.42 1.58-5.58L30.78 9.88c.94-1.94 1.42-3.54 1.42-4.82 0-1.56-.52-2.82-1.54-3.74C29.64.4 28.26-.1 26.52-.1c-1.58 0-3.22.46-4.88 1.4L.36 13.14C.12 13.3 0 13.5 0 13.74c0 .18.08.34.22.46.16.14.34.2.54.2.14 0 .3-.04.48-.14L22.52 2.42c1.16-.66 2.14-1 2.96-1 .66 0 1.16.2 1.52.58.36.4.54.92.54 1.58 0 .94-.44 2.28-1.32 4.02L13.48 33.78c-1.26 2.58-1.88 4.78-1.88 6.6 0 1.66.56 3.02 1.68 4.04 1.12 1.04 2.56 1.56 4.32 1.56 2.58 0 5.58-1.74 9.02-5.24l28.76-30.52c2.72-2.86 5.18-4.3 7.38-4.3.86 0 1.56.24 2.08.7.52.48.78 1.08.78 1.82 0 .48-.08.94-.24 1.38-.16.44-.42.86-.76 1.24l-.44.5c-.1.12-.14.24-.14.36 0 .18.08.34.24.46.14.12.32.18.52.18.26 0 .5-.12.72-.36l.48-.54c.48-.56.84-1.16 1.08-1.82.24-.66.36-1.32.36-2 0-1.22-.42-2.22-1.26-2.96-.82-.76-1.92-1.14-3.26-1.14z"
            transform="scale(0.7) translate(0, 5)"
        />
    </svg>
);

const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Collections', href: '#products' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
];

export default function Header({ theme, toggleTheme, activeSection, onNavClick }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        onNavClick(href);
        setMobileOpen(false);
    };

    return (
        <>
            <header className="header">
                <div className="logo">
                    <NikeLogo />
                </div>

                <nav className="nav" id="desktop-nav">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={activeSection === item.href.slice(1) ? 'active' : ''}
                            onClick={(e) => handleLinkClick(e, item.href)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="header-actions">
                    <button
                        className="theme-toggle"
                        aria-label="Toggle theme"
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                    <button
                        className={`mobile-menu-btn ${mobileOpen ? 'active' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <div className={`mobile-nav ${mobileOpen ? 'active' : ''}`} id="mobile-nav">
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </>
    );
}
