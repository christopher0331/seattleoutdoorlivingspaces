import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Gallery.module.css'
import ProjectModal from '../components/ProjectModal'
import { FaSearch, FaEye } from 'react-icons/fa'

export default function Gallery() {
  const [projectImages, setProjectImages] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleProjects, setVisibleProjects] = useState(8)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/getProjects');
        setProjectImages(response.data);
        setFilteredProjects(response.data);
      } catch (err) {
        console.log('error', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = projectImages.filter(project => 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
    setVisibleProjects(8);
  }, [searchTerm, projectImages]);

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const loadMore = () => {
    setVisibleProjects(prevVisible => prevVisible + 8);
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}>Our Work</h2>
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <AnimatePresence>
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.loading}
          >
            Loading...
          </motion.div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.myMasonryGrid}
            columnClassName={styles.myMasonryGridColumn}
          >
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <motion.div 
                key={project.id} 
                className={styles.projectCard}
                whileHover={isMobile ? {} : { y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.imageWrapper}>
                  {project.images.length > 0 && (
                    <Image 
                      src={project.images[0].url} 
                      alt={`${project.name} thumbnail`} 
                      layout="fill"
                      objectFit="cover"
                      className={styles.projectThumbnail}
                    />
                  )}
                  <div className={`${styles.overlay} ${isMobile ? styles.mobileOverlay : ''}`}>
                    <h3>{project.name}</h3>
                    <button onClick={() => openModal(project)} className={styles.viewProjectButton}>
                      <FaEye /> View Project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        )}
      </AnimatePresence>
      {visibleProjects < filteredProjects.length && (
        <button onClick={loadMore} className={styles.loadMoreButton}>
          Load More
        </button>
      )}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      heroImage: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/564989bf-964c-45c3-2ec6-deeeb9dd2800/public",
      showHero: true
    }
  }
}