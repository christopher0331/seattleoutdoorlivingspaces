import { useEffect, useState } from 'react'
import Head from 'next/head'
import Hero from '../../components/Hero'
import FenceTypeCard from '../../components/FenceTypeCard'
import CTASection from '../../components/CTASection'
import TestimonialSection from '../../components/TestimonialSection'
import FenceShapeShowcase from '../../components/FenceShapeShowcase'
import VinylFenceFAQ from '../../components/VinylFenceFAQ'
import BenefitsSection from '../../components/BenefitsSection'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../../styles/VinylFencing.module.css'
const vinylFenceTypes = [
    {
        title: '3 Rail',
        description: 'Enhance your property with our classic 3 rail vinyl fencing, offering a perfect balance of openness and boundary definition.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/56fbbe69-a163-40b4-ed24-163f6714c300/public',
        benefits: ['Open, airy design', 'Ideal for large properties', 'Low maintenance'],
    },
    {
        title: 'Hamilton',
        description: 'Elevate your property&apos;s charm with our Hamilton vinyl fencing, blending classic elegance with modern durability for a timeless look.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/64bdfb33-549d-4c4e-e22f-79b920b4fc00/public',
        benefits: ['Elegant picket design', 'Low maintenance', 'Weather-resistant', 'Customizable height and spacing'],
    },
]

const vinylBenefits = [
    {
        title: 'Low Maintenance',
        description: 'Vinyl fencing requires minimal upkeep, saving you time and money on repairs and painting.',
        icon: '🔧',
    },
    {
        title: 'Durability',
        description: 'Resistant to rot, pests, and weather damage, vinyl fences can last for decades with proper care.',
        icon: '💪',
    },
    {
        title: 'Versatility',
        description: 'Available in various styles and colors to match any property aesthetic.',
        icon: '🎨',
    },
    {
        title: 'Cost-Effective',
        description: 'While initial costs may be higher, the longevity and low maintenance of vinyl fencing offer long-term savings.',
        icon: '💰',
    },
]

export default function VinylFencing({ heroImage, showHero }) {
    const [selectedFence, setSelectedFence] = useState(null)

    // Close modal when Escape key is pressed
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                setSelectedFence(null)
            }
        }
        window.addEventListener('keydown', handleEsc)
        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [])

    return (
        <>

            <div className={styles.seoTextContainer}>
                <div className={styles.seoText}>
                    <h1>Premium Vinyl Fencing Solutions in Seattle</h1>
                    <p>Explore our exceptional range of vinyl fencing options, designed to enhance your property's aesthetics, privacy, and security. From classic styles to modern designs, our expert team delivers top-quality vinyl fencing solutions tailored to your needs. Discover the benefits of low-maintenance, long-lasting vinyl fences and transform your outdoor space today!</p>
                </div>
            </div>

            <section className={styles.fenceTypesSection}>
                <div className={`${styles.container} ${styles.centeredContainer}`}>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={styles.sectionTitle}
                    >
                        Our Premium Vinyl Fence Collection
                    </motion.h2>
                    <p className={styles.sectionSubtitle}>Discover the perfect blend of durability and style</p>
                    <div 
                        className={`${styles.fenceTypeGrid} ${styles.centeredGrid}`}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '2rem',
                            flexWrap: 'wrap',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}
                    >
                        {vinylFenceTypes.map((fenceType, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className={styles.fenceTypeWrapper}
                                onClick={() => setSelectedFence(fenceType)}
                                style={{
                                    flexBasis: '100%',
                                    maxWidth: '400px',
                                    margin: '0 auto 2rem',
                                }}
                            >
                                <FenceTypeCard
                                    title={fenceType.title}
                                    description={fenceType.description}
                                    image={fenceType.image}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <BenefitsSection 
                title="Why Choose Vinyl Fencing?"
                benefits={vinylBenefits}
                titleClassName={styles.benefitsSectionTitle}
            />

            <AnimatePresence>
                {selectedFence && (
                    <motion.div 
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedFence(null)}
                    >
                        <motion.div 
                            className={styles.modalContent}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3>{selectedFence.title}</h3>
                            <p>{selectedFence.description}</p>
                            <ul>
                                {selectedFence.benefits.map((benefit, index) => (
                                    <li key={index}>
                                        <span>{benefit.icon}</span> <strong>{benefit.title}:</strong> {benefit.description}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => setSelectedFence(null)}>Close</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CTASection 
                title="Ready to Enhance Your Property?"
                description="Explore our vinyl fencing options and find the perfect solution for your home."
                buttonText="Get a Free Quote"
                buttonLink="/contact"
            />

            <VinylFenceFAQ />

            <TestimonialSection />

        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            heroImage: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/564989bf-964c-45c3-2ec6-deeeb9dd2800/public",
            showHero: true
        }
    }
}