import { useState } from 'react';

const faqItems = [
    {
        question: 'What is your return policy?',
        answer:
            'We offer a 30-day return policy on all unworn items with original tags. Simply contact our customer service team to initiate a return. Shipping costs for returns are covered by us for any product defects.',
    },
    {
        question: 'How long does shipping take?',
        answer:
            "Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available at checkout. International orders typically arrive within 10-14 business days. You'll receive tracking information once your order ships.",
    },
    {
        question: 'Do you offer size guides?',
        answer:
            'Yes! Each product page includes detailed sizing charts with measurements. We recommend measuring yourself and comparing to our size guide for the best fit. Our customer service team is also available to help with sizing questions.',
    },
    {
        question: 'Are your products sustainable?',
        answer:
            "Absolutely. We're committed to sustainability with recycled materials in 60% of our products. Our packaging is 100% recyclable, and we partner with carbon-neutral shipping providers. We're continuously working to reduce our environmental impact.",
    },
    {
        question: 'Do you have a loyalty program?',
        answer:
            "Yes! Join NIKE Rewards to earn points on every purchase. Members get exclusive access to new releases, special discounts, and birthday rewards. Sign up is free and you'll immediately earn 100 welcome points.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="section-header">
                <h2>Frequently Asked Questions</h2>
                <p className="section-subtitle">Everything you need to know</p>
            </div>

            <div className="faq-container">
                {faqItems.map((item, idx) => (
                    <div key={idx} className="faq-item animate-in">
                        <div
                            className={`faq-question ${openIndex === idx ? 'active' : ''}`}
                            onClick={() => toggle(idx)}
                        >
                            <h3>{item.question}</h3>
                            <span className="faq-icon">+</span>
                        </div>
                        <div
                            className="faq-answer"
                            style={{
                                maxHeight: openIndex === idx ? '200px' : '0',
                            }}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
