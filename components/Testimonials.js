import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import styles from '../styles/Testimonials.module.css';

const testimonials = [
  { id: 3, name: "Janice Marie King", location: "Seattle, WA", text: "I can't recommend Brandon and his entire team. I have a beautiful fence and am very happy. And yes they honor any issues quickly. You will not be sorry. Finally a great contractor that keeps his promises", avatar: "https://i.pravatar.cc/150?img=1", rating: 5 },
  { id: 6, name: "Matt Snyder", location: "Bellevue, WA", text: "My experience with GreenView Solutions was phenomenal. Brandon was extremely responsive with an estimate, questions I had via email, answered my calls personally and quickly, and was able to schedule my project within a week. The crew arrived on time, were very friendly and helpful, and did an amazing job on my fence. I would highly recommend contacting them for any outdoor project.", avatar: "https://i.pravatar.cc/150?img=2", rating: 5 },
  { id: 2, name: "Rino Svaldi", location: "Kirkland, WA", text: "I have used GreenView Solutions not once but twice in the last two years. The first time was to replace my crumbling backyard privacy fence. The second time was to help me dig out and construct a custom backyard bocce court, as well as installing some concrete walkways and a patio. In both cases, the work was completed within the agreed upon time frame and budget, and I was extremely satisfied with the end results. I should point out that in neither case was GreenView the lowest bid I received. Nevertheless, I chose them because after meeting the business owner Brandon, I felt very confident that he (and his team) will do exactly what he says they will do, and if a problem were to arise, he can be trusted to make it right.", avatar: "https://i.pravatar.cc/150?img=3", rating: 5 },
  { id: 7, name: "Chris Hester", location: "Redmond, WA", text: "GreenView replaced our fence in January 2022 when it blew over during a very windy few days. It was too cold to start right away so they offered to put up a temporary construction fence to help keep our dog in the yard until they could start work. Super professional, super respectful and always communicated where they were and what was remaining to be done. We had one section of the fence break about a year later (due to high winds again) and they promptly came back out to fix without any issues. 10/10 would recommend and would hire again.", avatar: "https://i.pravatar.cc/150?img=4", rating: 5 },
  { id: 8, name: "Beth Felgar", location: "Sammamish, WA", text: "Greenview did an excellent job with the fence. They also replaced a couple of posts in a different section that needed it. They were on time and took their time getting it right. I am very pleased with the results.", avatar: "https://i.pravatar.cc/150?img=5", rating: 5 },
  { id: 9, name: "Alfanis Barbershop", location: "Issaquah, WA", text: "I have to say the quality of this amazing company together with the customer care is beyond my expectations, I am greatly impressed of the details, time and communication with us to get the right fence around our beautiful home this amazing addition made our home private and cozy. Thank you so much Brandon and his team.", avatar: "https://i.pravatar.cc/150?img=6", rating: 5 },
  { id: 10, name: "gregg fink", location: "Renton, WA", text: "I had fence repair done today. 4 posts were replaced. The crew did a fantastic job, were courteous, and their attention to detail and professional work shows with the finished product. I highly recommend this company!!", avatar: "https://i.pravatar.cc/150?img=7", rating: 5 },
  { id: 11, name: "Aimee Ross", location: "Mercer Island, WA", text: "We were very pleased with the work you did on our fence. Outstanding customer service and very detailed with the quote. I will recommend them to others in the future. Thank you so much!!!", avatar: "https://i.pravatar.cc/150?img=8", rating: 5 },
  { id: 12, name: "Katy McCoy", location: "Bothell, WA", text: "Our board on board fence is perfect. Reggie, Nick, and Christian did an amazing job!", avatar: "https://i.pravatar.cc/150?img=9", rating: 5 },
  { id: 13, name: "Tegan Corradino", location: "Edmonds, WA", text: "Brandon and his team helped us with a backyard fountain, that no one else could fix AND built a fence for us. Brandon and his team are very professional and responsive to everything we asked. We have a new build and the fence was a little complicated working with neighbors and changes. Brandon kindly communicated with everyone involved and was very flexible as the project grew and needed some changes. His team worked long hard days. And now we have a beautiful fence! I highly recommend Brandon and his team!!", avatar: "https://i.pravatar.cc/150?img=10", rating: 5 },
  { id: 14, name: "Jennifer Fields", location: "Shoreline, WA", text: "GreenView gave me a competitive bid. I had 3 different projects. The crew was friendly and professional. They got the work done very quickly. I had an odd request for a small door in the fence. They were creative and it looks Great and works beautifully. I am very pleased with the work and glad I chose GreenView.", avatar: "https://i.pravatar.cc/150?img=11", rating: 5 },
  { id: 15, name: "Sydney Pedregon", location: "Woodinville, WA", text: "We just got our fence done, and it is beautiful! Reasonable price for such a huge addition to our home! We are talking to all of our neighbors about them because they did such a great job! Dalton worked with us from start to finish, provided a quote came out right away, and let us know of needs or changes.", avatar: "https://i.pravatar.cc/150?img=12", rating: 5 },
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
