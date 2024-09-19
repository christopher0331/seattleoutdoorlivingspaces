import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import styles from '../styles/Testimonials.module.css';

const testimonials = [
  { id: 1, name: "John Doe", location: "Seattle, WA", text: "Seattle Outdoor Living transformed our backyard into a stunning oasis. Their attention to detail and craftsmanship is unparalleled.", avatar: "https://i.pravatar.cc/150?img=1", rating: 5 },
  { id: 2, name: "Jane Smith", location: "Bellevue, WA", text: "We couldn't be happier with our new fence. The team was professional, efficient, and the result exceeded our expectations.", avatar: "https://i.pravatar.cc/150?img=2", rating: 5 },
  { id: 3, name: "Mike Johnson", location: "Kirkland, WA", text: "From design to installation, Seattle Outdoor Living made the process smooth and enjoyable. Our new deck is the envy of the neighborhood!", avatar: "https://i.pravatar.cc/150?img=3", rating: 5 },
  { id: 4, name: "Emily Brown", location: "Redmond, WA", text: "The pergola they built for us is absolutely beautiful. It's become our favorite spot for outdoor entertaining.", avatar: "https://i.pravatar.cc/150?img=4", rating: 5 },
  { id: 5, name: "David Lee", location: "Sammamish, WA", text: "Their expertise in landscape design really shows. Our yard now feels like a private retreat.", avatar: "https://i.pravatar.cc/150?img=5", rating: 4 },
  { id: 6, name: "Sarah Wilson", location: "Issaquah, WA", text: "The outdoor kitchen they installed is perfect for our family gatherings. We use it all the time!", avatar: "https://i.pravatar.cc/150?img=6", rating: 5 },
  { id: 7, name: "Tom Garcia", location: "Renton, WA", text: "Their team was able to work within our budget and still deliver a fantastic result. Very impressed!", avatar: "https://i.pravatar.cc/150?img=7", rating: 5 },
  { id: 8, name: "Lisa Chen", location: "Mercer Island, WA", text: "The water feature they designed for our garden is stunning. It's so relaxing to listen to.", avatar: "https://i.pravatar.cc/150?img=8", rating: 5 },
  { id: 9, name: "Robert Taylor", location: "Bothell, WA", text: "They were able to work around some challenging terrain in our yard. The result is amazing!", avatar: "https://i.pravatar.cc/150?img=9", rating: 4 },
  { id: 10, name: "Amanda White", location: "Edmonds, WA", text: "Our new patio is perfect for entertaining. We've received so many compliments from our friends.", avatar: "https://i.pravatar.cc/150?img=10", rating: 5 },
  { id: 11, name: "Chris Martin", location: "Shoreline, WA", text: "The lighting they installed in our backyard creates such a magical atmosphere in the evenings.", avatar: "https://i.pravatar.cc/150?img=11", rating: 5 },
  { id: 12, name: "Nicole Adams", location: "Woodinville, WA", text: "They were able to incorporate all of our ideas into a cohesive design. We love our new outdoor space!", avatar: "https://i.pravatar.cc/150?img=12", rating: 5 },
  { id: 13, name: "Kevin Park", location: "Newcastle, WA", text: "The fire pit area they created is perfect for those cool Pacific Northwest evenings.", avatar: "https://i.pravatar.cc/150?img=13", rating: 4 },
  { id: 14, name: "Rachel Green", location: "Kenmore, WA", text: "They were able to work within our HOA guidelines and still create a unique, beautiful space.", avatar: "https://i.pravatar.cc/150?img=14", rating: 5 },
  { id: 15, name: "Daniel Brown", location: "Maple Valley, WA", text: "The retaining wall they built not only looks great but has solved our drainage issues.", avatar: "https://i.pravatar.cc/150?img=15", rating: 5 },
];

const backgroundGradients = [
  'linear-gradient(45deg, #a8e063 0%, #56ab2f 100%)',
  'linear-gradient(to top, #76b852 0%, #8DC26F 100%)',
  'linear-gradient(to right, #134e5e 0%, #71b280 100%)',
  'linear-gradient(to right, #00b09b 0%, #96c93d 100%)',
  'linear-gradient(to right, #1d976c 0%, #93f9b9 100%)',
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (isAutoPlay) {
      timerRef.current = setTimeout(nextTestimonial, 5000);
    }
  }, [isAutoPlay]);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  }, [resetTimer]);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  }, [resetTimer]);

  const goToTestimonial = useCallback((index) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
    resetTimer();
  }, [currentTestimonial, resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isAutoPlay, resetTimer]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      rotateY: direction > 0 ? -45 : 45,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      rotateY: direction < 0 ? -45 : 45,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className={styles.testimonials} style={{ background: backgroundGradients[currentTestimonial % backgroundGradients.length] }}>
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say
      </motion.h2>
      <div className={styles.testimonialCarousel}>
        <button className={styles.navButton} onClick={prevTestimonial}>
          <FaChevronLeft />
        </button>
        <div className={styles.testimonialCardWrapper}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentTestimonial}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
                opacity: { duration: 0.5 },
                rotateY: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
                scale: { duration: 0.5 },
              }}
              className={styles.testimonialCard}
            >
              <FaQuoteLeft className={styles.quoteIcon} />
              <p className={styles.testimonialText}>{testimonials[currentTestimonial].text}</p>
              <div className={styles.testimonialAuthor}>
                <motion.img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name} 
                  className={styles.authorAvatar}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <div>
                  <p className={styles.authorName}>{testimonials[currentTestimonial].name}</p>
                  <p className={styles.authorLocation}>{testimonials[currentTestimonial].location}</p>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                        <FaStar className={i < testimonials[currentTestimonial].rating ? styles.starFilled : styles.starEmpty} />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button className={styles.navButton} onClick={nextTestimonial}>
          <FaChevronRight />
        </button>
      </div>
      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <motion.span 
            key={index} 
            className={`${styles.dot} ${index === currentTestimonial ? styles.activeDot : ''}`}
            onClick={() => goToTestimonial(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
      <motion.button 
        className={styles.autoPlayButton} 
        onClick={() => {
          setIsAutoPlay(!isAutoPlay);
          resetTimer();
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isAutoPlay ? 'Pause' : 'Play'}
      </motion.button>
    </section>
  );
}