import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <motion.div 
        className={styles.ctaContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Ready to Transform Your Outdoor Space?</h2>
        <p>Get a free quote for your fencing project today!</p>
        <Link href="/contact" passHref>
          <motion.a
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Now
          </motion.a>
        </Link>
      </motion.div>
    </section>
  );
}