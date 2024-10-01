import styles from '../styles/TestimonialSection.module.css'

const testimonials = [
  { author: "John D.", text: "Seattle Outdoor Living transformed our backyard with a beautiful cedar fence. Highly recommended!" },
  { author: "Sarah M.", text: "Professional service and top-quality wood fencing. Our new fence looks amazing!" },
  { author: "Mike R.", text: "Great experience from start to finish. The team was knowledgeable and efficient." },
]

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              <p>"{testimonial.text}"</p>
              <span>- {testimonial.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}