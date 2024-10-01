import styles from '../styles/FeaturedWork.module.css'

export default function FeaturedWork() {
  const projects = [
    { id: 1, title: 'Auto Gate', image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/a6de8eb1-c607-4928-cd5e-53254e683100/public' },
    { id: 2, title: 'Rustic Split Rail', image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/657bdd02-ae44-4c35-184e-0be30eec0100/public' },
    { id: 3, title: 'Vinyl Privacy Fence', image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/46710b53-8bd5-45d9-06b2-fcc2a854f000/public' },
    { id: 4, title: 'Premium Cedar Privacy', image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/a3403ab6-9dec-4cbf-8ede-e1aefe1e6900/public' },
    { id: 5, title: 'Coated Chainlink Sports Fence', image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/3bb80fd2-0f1f-430d-2ce7-220dce44e800/public' },
    { id: 6, title: 'Commercial Chainlink', image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/1956ba29-d780-457a-c932-f5f35f84d800/public' },
    { id: 7, title: 'Composite', image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/6f7272b2-b196-480f-7af3-754f33ea5d00/public'},
    { id: 8, title: 'Classic Picket Fence', image: 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/67255244-c2ae-43b0-f636-e8e25f60eb00/public' },
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