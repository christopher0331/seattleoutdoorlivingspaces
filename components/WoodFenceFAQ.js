import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/WoodFenceFAQ.module.css'

const faqData = [
    {
        question: "What are the benefits of wood fencing in Seattle's climate?",
        answer: "Wood fencing in Seattle offers natural beauty, durability, and adaptability to the local climate. Properly treated wood can withstand Seattle's rainy weather, and cedar, a popular choice, naturally resists decay and insects."
    },
    {
        question: "How long does a wood fence typically last in Seattle?",
        answer: "With proper maintenance, a wood fence in Seattle can last 15-20 years or more. Regular sealing and staining can help protect the wood from moisture and extend its lifespan."
    },
    {
        question: "What types of wood are best for fences in Seattle?",
        answer: "Cedar is highly recommended for Seattle due to its natural resistance to decay and insects. Other good options include pressure-treated pine and redwood, both of which handle moisture well."
    },
    {
        question: "How often should I maintain my wood fence in Seattle?",
        answer: "In Seattle's damp climate, it's recommended to clean your fence annually and apply a new coat of sealant or stain every 2-3 years to protect it from moisture damage."
    },
    {
        question: "Are there any Seattle-specific regulations for wood fences?",
        answer: "Yes, Seattle has specific regulations regarding fence height and placement. Generally, fences in front yards can't exceed 4 feet, while side and back yard fences can be up to 6 feet tall. Always check with the Seattle Department of Construction and Inspections before installing a new fence."
    }
]

export default function WoodFenceFAQ() {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>
            <section className={styles.faqSection}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions About Wood Fencing in Seattle</h2>
                <div className={styles.faqList}>
                    {faqData.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                {faq.question}
                                <span className={styles.faqIcon} aria-hidden="true">{activeIndex === index ? '−' : '+'}</span>
                            </button>
                            {activeIndex === index && (
                                <div className={styles.faqAnswer}>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}