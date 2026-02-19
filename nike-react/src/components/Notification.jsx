import { useEffect, useState } from 'react';

export default function Notification({ message, type, visible }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (visible) {
            // Small delay for animation
            const t = setTimeout(() => setShow(true), 10);
            return () => clearTimeout(t);
        } else {
            setShow(false);
        }
    }, [visible]);

    if (!visible && !show) return null;

    return (
        <div className={`notification ${type} ${show ? 'show' : ''}`}>
            {message}
        </div>
    );
}
