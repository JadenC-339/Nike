import ProductCard from './ProductCard';

const products = [
    {
        title: 'Elite Running Shoes',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
        shortText: 'Lightweight & breathable',
        fullText:
            'Experience unmatched comfort with our revolutionary cushioning technology. Engineered with aerospace-grade materials for maximum energy return. Perfect for marathon runners and daily trainers alike.',
        badge: 'NEW',
    },
    {
        title: 'Pro Training Wear',
        image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&q=80',
        shortText: 'Built for flexibility',
        fullText:
            'Advanced moisture-wicking fabric keeps you cool during intense workouts. 4-way stretch technology moves with your body. Reinforced stitching for durability that lasts season after season.',
        badge: 'SALE',
    },
    {
        title: 'Street Sneakers',
        image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80',
        shortText: 'Comfort meets style',
        fullText:
            'Premium leather construction with modern design aesthetics. Memory foam insoles provide all-day comfort. Versatile enough for the gym or the streets.',
        badge: 'HOT',
    },
    {
        title: 'Performance Apparel',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
        shortText: 'Temperature regulation',
        fullText:
            'Climate-adaptive technology keeps you at optimal temperature. Seamless construction eliminates chafing. Anti-odor treatment keeps you fresh longer.',
        badge: null,
    },
    {
        title: 'Recovery Essentials',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
        shortText: 'Optimize your rest',
        fullText:
            'Compression technology accelerates muscle recovery. Graduated pressure zones target key muscle groups. Perfect for post-workout relaxation.',
        badge: null,
    },
    {
        title: 'Accessories Collection',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
        shortText: 'Complete your kit',
        fullText:
            'Premium bags, bottles, and gear to complement your training. Durable materials built to withstand daily use. Thoughtful design meets practical functionality.',
        badge: null,
    },
];

export default function ProductGrid() {
    return (
        <section className="products" id="products">
            <div className="section-header">
                <h2>Featured Collections</h2>
                <p className="section-subtitle">Precision-crafted gear for every athlete</p>
            </div>

            <div className="product-grid">
                {products.map((product, idx) => (
                    <ProductCard key={idx} {...product} />
                ))}
            </div>
        </section>
    );
}
