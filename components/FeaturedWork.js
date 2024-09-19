import styles from '../styles/FeaturedWork.module.css'

export default function FeaturedWork() {
  const projects = [
    { id: 1, title: 'Modern Wooden Fence', image: 'https://images.unsplash.com/photo-1621274147744-cfb5694bb233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80' },
    { id: 2, title: 'Contemporary Iron Gate', image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80' },
    { id: 3, title: 'Vinyl Privacy Fence', image: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80' },
    { id: 4, title: 'Custom Composite Deck', image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80' },
    { id: 5, title: 'Rustic Split Rail Fence', image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80' },
    { id: 6, title: 'Elegant Wrought Iron Fence', image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80' },
    { id: 7, title: 'Modern Horizontal Fence', image: 'https://images.unsplash.com/photo-1626025437642-0b05076ca301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80' },
    { id: 8, title: 'Classic Picket Fence', image: 'https://images.unsplash.com/photo-1621274503274-c769f6c8c0c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80' },
  ]

  return (
    <section className={styles.featuredWork}>
      <h2>Elevating Outdoor Spaces</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage}
              />
              <div className={styles.overlay}>
                <h3>{project.title}</h3>
                <p className={styles.viewProject}>View Project</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}