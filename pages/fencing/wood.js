import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Hero from '../../components/Hero'
import FenceTypeCard from '../../components/FenceTypeCard'
import CTASection from '../../components/CTASection'
import TestimonialSection from '../../components/TestimonialSection'
import FenceShapeShowcase from '../../components/FenceShapeShowcase'
import WoodFenceFAQ from '../../components/WoodFenceFAQ'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../../styles/WoodFencing.module.css'

const woodFenceTypes = [
    {
        title: 'Privacy Fence',
        description: 'Create a secluded sanctuary with our sturdy privacy fences, perfect for homeowners seeking maximum seclusion and security.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/1fe8c671-e3fa-4e89-24a9-89160e026d00/public',
        benefits: ['Complete privacy', 'Enhanced security', 'Windbreak protection'],
    },
    {
        title: 'Picket Fence',
        description: 'Add a touch of classic Americana to your property with our charming picket fences, ideal for defining boundaries with style.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/edde074c-3da2-408a-5a45-b8322ea01100/public',
        benefits: ['Decorative appeal', 'Child and pet-friendly', 'Enhances curb appeal'],
    },
    {
        title: 'Split Rail Fence',
        description: 'Embrace rustic charm with our split rail fences, perfect for large properties and creating a natural, open feel.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/4599da39-ce05-42c2-e75a-6f4f9b857900/public',
        benefits: ['Rustic aesthetic', 'Ideal for large areas', 'Wildlife-friendly'],
    },
    {
        title: 'Standard Horizontal',
        description: 'Achieve a modern look with our standard horizontal fences, offering clean lines and contemporary style for any property.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/221e35da-2eeb-4934-7c23-1843bb63df00/public',
        benefits: ['Modern appearance', 'Sturdy construction', 'Versatile design'],
    },
    {
        title: 'Board on Board',
        description: 'Enhance privacy and aesthetics with our board on board fences, featuring overlapping boards for a seamless, gap-free appearance.',
        image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/9fc67e7f-e84f-4edc-d9cf-698bec2e0200/public',
        benefits: ['Maximum privacy', 'Attractive from both sides', 'Increased durability'],
    },
]

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

export default function WoodFencing({ heroImage, showHero }) {
    const [selectedFence, setSelectedFence] = useState(null)

    return (
        <>
            <Head>
                <title>Premium Wood Fencing Solutions in Seattle | Seattle Outdoor Living</title>
                <meta name="description" content="Discover our exceptional range of wood fencing options in Seattle. From privacy fences to picket designs, we offer top-quality solutions to enhance your property's beauty and security." />
                <link rel="canonical" href="https://www.seattleoutdoorliving.com/fencing/wood" />
            </Head>

            <div className={styles.seoTextContainer}>
                <div className={styles.seoText}>
                    <h1>Premium Wood Fencing Solutions in Seattle</h1>
                    <p>Discover our exceptional range of wood fencing options, perfect for enhancing your property's beauty, privacy, and security. From classic picket fences to modern horizontal designs, our expert team delivers top-quality wood fencing solutions tailored to your needs. Explore our collection and transform your outdoor space today!</p>
                </div>
            </div>

            <section className={styles.fenceTypesSection}>
                <div className={styles.container}>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={styles.sectionTitle}
                    >
                        Our Premium Wood Fence Collection
                    </motion.h2>
                    <p className={styles.sectionSubtitle}>Discover the perfect blend of aesthetics and functionality</p>
                    <div className={styles.fenceTypeGrid}>
                        {woodFenceTypes.map((fenceType, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className={styles.fenceTypeWrapper}
                                onClick={() => setSelectedFence(fenceType)}
                            >
                                <FenceTypeCard {...fenceType} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
                            onClick={e => e.stopPropagation()}
                        >
                            <h3>{selectedFence.title}</h3>
                            <p>{selectedFence.description}</p>
                            <ul>
                                {selectedFence.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                            <button onClick={() => setSelectedFence(null)}>Close</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <FenceShapeShowcase />

            <WoodFenceFAQ />

            <CTASection
                title="Ready to Transform Your Outdoor Space?"
                description="Schedule a consultation with our expert team to explore the perfect wood fencing solution for your property."
                buttonText="Request a Free Consultation"
                buttonLink="/contact"
            />

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