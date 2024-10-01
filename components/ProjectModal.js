import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [visibleThumbnails, setVisibleThumbnails] = useState(10)

  useEffect(() => {
    const modalHeight = Math.min(800 + (project.images.length - 10) * 20, window.innerHeight * 0.9)
    document.querySelector(`.${styles.modalContent}`).style.height = `${modalHeight}px`
  }, [project.images.length])

  const nextImage = () => {
    setDirection(1)
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setDirection(-1)
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    )
  }

  const loadMoreThumbnails = () => {
    setVisibleThumbnails(prev => Math.min(prev + 10, project.images.length))
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <motion.div 
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className={styles.modalContent}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <h2 className={styles.projectTitle}>Project {project.id}</h2>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
        <div className={styles.imageContainer}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.3 },
                opacity: { duration: 0.2 }
              }}
              className={styles.imageWrapper}
            >
              <Image 
                src={project.images[currentImageIndex].url} 
                alt={`Project ${project.id} image ${currentImageIndex + 1}`} 
                layout="fill"
                objectFit="contain"
                className={styles.projectImage}
              />
            </motion.div>
          </AnimatePresence>
          <button onClick={prevImage} className={`${styles.navButton} ${styles.prevButton}`}>&#10094;</button>
          <button onClick={nextImage} className={`${styles.navButton} ${styles.nextButton}`}>&#10095;</button>
        </div>
        <div className={styles.thumbnailGrid}>
          {project.images.slice(0, visibleThumbnails).map((image, index) => (
            <div 
              key={index} 
              className={`${styles.thumbnailWrapper} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
              onClick={() => {
                setDirection(index > currentImageIndex ? 1 : -1)
                setCurrentImageIndex(index)
              }}
            >
              <Image
                src={image.url}
                alt={`Project ${project.id} thumbnail ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        {visibleThumbnails < project.images.length && (
          <button onClick={loadMoreThumbnails} className={styles.loadMoreButton}>
            Load More
          </button>
        )}
      </motion.div>
    </motion.div>
  )
}