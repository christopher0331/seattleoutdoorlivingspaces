import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/VinylFenceFAQ.module.css'

const faqData = [
    {
        question: "What makes vinyl fencing ideal for Seattle's rainy weather?",
        answer: "Vinyl fencing excels in Seattle's rainy climate due to its complete water resistance. It doesn't absorb moisture, preventing issues like mold, mildew, or rot, which ensures long-lasting performance in the Pacific Northwest's wet conditions."
    },
    {
        question: "How does vinyl fencing withstand Seattle's occasional windstorms?",
        answer: "Vinyl fencing is engineered to be highly flexible and durable, allowing it to bend without breaking during Seattle's windstorms. This resilience, combined with proper installation, helps vinyl fences maintain their structural integrity in harsh weather conditions."
    },
    {
        question: "What are the long-term cost benefits of installing a vinyl fence in Seattle?",
        answer: "While the initial investment may be higher, vinyl fencing offers significant long-term cost benefits in Seattle. Its durability eliminates the need for frequent replacements, and its low maintenance requirements save on ongoing expenses, making it a cost-effective choice over time."
    },
    {
        question: "How does vinyl fencing contribute to property value in Seattle's real estate market?",
        answer: "Vinyl fencing can positively impact property values in Seattle's competitive real estate market. Its attractive appearance, durability, and low maintenance appeal to potential buyers, potentially increasing your home's curb appeal and overall value."
    },
    {
        question: "What color options are available for vinyl fencing in Seattle?",
        answer: "Vinyl fencing in Seattle comes in a wide range of colors to complement any home style. Popular options include white, tan, and gray, but many manufacturers offer custom colors. Unlike painted surfaces, these colors are integrated into the material, ensuring they won't fade or require repainting."
    },
    {
        question: "How does vinyl fencing perform in Seattle's varying temperatures?",
        answer: "Vinyl fencing is designed to withstand Seattle's temperature fluctuations. It doesn't expand or contract significantly with temperature changes, maintaining its shape and structural integrity year-round, from cool, damp winters to warm summers."
    },
    {
        question: "What are the privacy benefits of vinyl fencing for Seattle homeowners?",
        answer: "Vinyl fencing offers excellent privacy options for Seattle homeowners. Solid panel designs provide complete visual screening, while the material's sound-dampening properties can help reduce noise from nearby streets or neighbors, creating a more secluded outdoor space."
    },
    {
        question: "How does vinyl fencing impact Seattle's local ecosystem?",
        answer: "Vinyl fencing has a minimal impact on Seattle's local ecosystem. It doesn't leach chemicals into the soil, doesn't require harmful paint or stain applications, and can last for decades without needing replacement, reducing overall resource consumption and waste."
    },
    {
        question: "What styles of vinyl fencing are popular in Seattle neighborhoods?",
        answer: "Popular vinyl fencing styles in Seattle include privacy fences, picket fences, and ranch-style fences. Many homeowners opt for designs that complement the city's mix of modern and traditional architecture, with options ranging from classic white pickets to sleek, contemporary panels."
    },
    {
        question: "How quickly can vinyl fencing be installed in Seattle?",
        answer: "Vinyl fencing installation in Seattle is typically faster than other fencing materials. Depending on the project size and complexity, professional installers can often complete a vinyl fence installation in just 1-3 days, minimizing disruption to your property and schedule."
    }
]

export default function VinylFenceFAQ() {
    const [activeIndex, setActiveIndex] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const faqsPerPage = 5

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const indexOfLastFAQ = currentPage * faqsPerPage
    const indexOfFirstFAQ = indexOfLastFAQ - faqsPerPage
    const currentFAQs = faqData.slice(indexOfFirstFAQ, indexOfLastFAQ)

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber)
        setActiveIndex(null)  // Reset active FAQ when changing pages
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
                <h2 className={styles.faqTitle}>Frequently Asked Questions About Vinyl Fencing in Seattle</h2>
                <div className={styles.faqList}>
                    {currentFAQs.map((faq, index) => (
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
                <div className={styles.pagination}>
                    <button 
                        onClick={() => changePage(1)} 
                        className={currentPage === 1 ? styles.activePage : ''}
                    >
                        1
                    </button>
                    <button 
                        onClick={() => changePage(2)} 
                        className={currentPage === 2 ? styles.activePage : ''}
                    >
                        2
                    </button>
                </div>
            </section>
        </>
    )
}