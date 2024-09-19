import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import styles from '../styles/FencingFAQ.module.css';

const faqs = [
  {
    question: "What types of fencing do you offer in Downtown Seattle?",
    answer: "We offer a wide range of fencing options suitable for Downtown Seattle's urban environment, including modern aluminum fences, classic wrought iron, and low-maintenance vinyl fencing. Our designs can complement both residential and commercial properties in the city center."
  },
  {
    question: "Are there any specific fencing regulations in West Seattle?",
    answer: "Yes, West Seattle has specific fencing regulations. Generally, fences in front yards can't exceed 4 feet in height, while side and back yard fences can be up to 6 feet. We're familiar with local codes and can ensure your fence is compliant while meeting your needs."
  },
  {
    question: "How do you handle the hilly terrain in Queen Anne for fence installation?",
    answer: "Our experienced team is well-versed in installing fences on Queen Anne's hilly terrain. We use specialized techniques such as stepped fencing and custom-cut panels to ensure a level, secure fence that follows the contour of your property."
  },
  {
    question: "What are the best fencing options for properties near SeaTac Airport?",
    answer: "For properties near SeaTac Airport, we recommend fences that offer both security and noise reduction. Our acoustic fencing options, including solid vinyl or composite fences, can help mitigate airport noise while securing your property."
  },
  {
    question: "How long does it typically take to install a fence in the Ballard area?",
    answer: "The timeline for fence installation in Ballard typically ranges from 1-3 days, depending on the size and complexity of the project. We work efficiently to minimize disruption to your property and neighborhood."
  },
  {
    question: "Do you offer eco-friendly fencing options for environmentally conscious homeowners in Green Lake?",
    answer: "Absolutely! For our Green Lake clients, we offer several eco-friendly options including reclaimed wood fencing, bamboo fences, and composite fencing made from recycled materials. These options are both sustainable and durable."
  },
  {
    question: "How do your fences hold up against the wet climate in Seattle?",
    answer: "Our fences are designed to withstand Seattle's wet climate. We use weather-resistant materials and treatments, such as pressure-treated wood, rust-resistant metal fixtures, and water-resistant stains and sealants to ensure longevity and minimal maintenance."
  }
];

export default function FencingFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions About Fencing in Seattle
      </motion.h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={styles.faqItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              className={`${styles.faqQuestion} ${isClient && activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: isClient && activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.span>
            </button>
            {isClient && (
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        ))}
      </div>
      {isClient && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      )}
    </section>
  );
}