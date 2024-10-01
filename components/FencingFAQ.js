import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import styles from '../styles/FencingFAQ.module.css';

const faqs = [
  {
    question: "What types of fencing do you offer in Downtown Seattle?",
    answer: "We offer a wide range of fencing options suitable for Downtown Seattle's urban environment, including modern aluminum fences, classic wrought iron, and low-maintenance vinyl fencing. Our designs can complement both residential and commercial properties in the city center.",
    theme: "Fence Regulations"
  },
  {
    question: "Are there any specific fencing regulations in West Seattle?",
    answer: "Yes, West Seattle has specific fencing regulations. Generally, fences in front yards can't exceed 4 feet in height, while side and back yard fences can be up to 6 feet. We're familiar with local codes and can ensure your fence is compliant while meeting your needs.",
    theme: "Fence Regulations"
  },
  {
    question: "How do you handle the hilly terrain in Queen Anne for fence installation?",
    answer: "Our experienced team is well-versed in installing fences on Queen Anne's hilly terrain. We use specialized techniques such as stepped fencing and custom-cut panels to ensure a level, secure fence that follows the contour of your property.",
    theme: "Fence Regulations"
  },
  {
    question: "What are the best fencing options for properties near SeaTac Airport?",
    answer: "For properties near SeaTac Airport, we recommend fences that offer both security and noise reduction. Our acoustic fencing options, including solid vinyl or composite fences, can help mitigate airport noise while securing your property.",
    theme: "Fence Regulations"
  },
  {
    question: "How long does it typically take to install a fence in the Ballard area?",
    answer: "The timeline for fence installation in Ballard typically ranges from 1-3 days, depending on the size and complexity of the project. We work efficiently to minimize disruption to your property and neighborhood.",
    theme: "Fence Regulations"
  },
  {
    question: "Do you offer eco-friendly fencing options for environmentally conscious homeowners in Green Lake?",
    answer: "Absolutely! For our Green Lake clients, we offer several eco-friendly options including reclaimed wood fencing, bamboo fences, and composite fencing made from recycled materials. These options are both sustainable and durable.",
    theme: "Fence Regulations"
  },
  {
    question: "How do your fences hold up against the wet climate in Seattle?",
    answer: "Our fences are designed to withstand Seattle's wet climate. We use weather-resistant materials and treatments, such as pressure-treated wood, rust-resistant metal fixtures, and water-resistant stains and sealants to ensure longevity and minimal maintenance.",
    theme: "Fence Regulations"
  },
  {
    question: "What are the benefits of wood fencing in Seattle?",
    answer: "Wood fencing in Seattle offers natural beauty, versatility, and cost-effectiveness. It's ideal for creating privacy and can be customized to match various architectural styles. Our pressure-treated wood options are resistant to Seattle's damp climate.",
    theme: "Wood Fencing Seattle"
  },
  {
    question: "How long does a wood fence typically last in Seattle's climate?",
    answer: "With proper maintenance, a wood fence in Seattle can last 15-20 years. We use high-quality, weather-resistant woods and protective treatments to maximize longevity in our wet climate.",
    theme: "Wood Fencing Seattle"
  },
  {
    question: "What types of wood do you recommend for fencing in Seattle?",
    answer: "We recommend cedar and pressure-treated pine for Seattle fences. Cedar naturally resists decay and insects, while pressure-treated pine offers excellent durability at a lower cost.",
    theme: "Wood Fencing Seattle"
  },
  {
    question: "What are PostMaster steel fence posts?",
    answer: "PostMaster steel fence posts are a durable, low-maintenance alternative to traditional wood posts. They're galvanized and powder-coated for rust resistance, perfect for Seattle's wet climate.",
    theme: "PostMaster Posts"
  },
  {
    question: "How do PostMaster posts compare to wood posts in terms of longevity?",
    answer: "PostMaster steel posts significantly outlast wood posts, often lasting 20+ years without rotting or warping. This makes them an excellent long-term investment for Seattle homeowners.",
    theme: "PostMaster Posts"
  },
  {
    question: "Can PostMaster posts be used with wood fencing?",
    answer: "Yes, PostMaster posts are versatile and can be used with wood fencing. They provide the strength of steel while allowing you to maintain the natural look of a wood fence.",
    theme: "PostMaster Posts"
  },
  {
    question: "What are the advantages of composite fencing in Seattle?",
    answer: "Composite fencing offers the look of wood with enhanced durability and lower maintenance. It resists moisture, doesn't rot or splinter, and stands up well to Seattle's rainy weather.",
    theme: "Composite Fences"
  },
  {
    question: "How long do composite fences last in Seattle's climate?",
    answer: "Composite fences can last 20-30 years or more in Seattle's climate. They're highly resistant to moisture, UV rays, and temperature fluctuations, making them a long-lasting choice.",
    theme: "Composite Fences"
  },
  {
    question: "Are composite fences eco-friendly?",
    answer: "Yes, many composite fences are made from recycled materials, making them an eco-friendly choice. They also don't require the regular staining or sealing that wood fences do, reducing chemical use over time.",
    theme: "Composite Fences"
  },
  {
    question: "What are the maintenance requirements for a wood fence in Seattle?",
    answer: "Wood fences in Seattle require regular maintenance to ensure longevity. This includes annual inspections, cleaning, and sealing to protect against moisture and weathering.",
    theme: "Maintenance"
  },
  {
    question: "How often should I clean and seal my composite fence?",
    answer: "Composite fences in Seattle should be cleaned annually and sealed every 3-5 years to maintain their appearance and protect against moisture and UV rays.",
    theme: "Maintenance"
  },
  {
    question: "What should I do if my fence is damaged by a storm or accident?",
    answer: "If your fence is damaged by a storm or accident, it's important to address the issue promptly to prevent further damage. Contact us immediately for assistance with repairs or replacement.",
    theme: "Maintenance"
  },
  {
    question: "Can I paint my fence to change its color or style?",
    answer: "Yes, you can paint your fence to change its color or style. However, we recommend using a high-quality exterior paint that is suitable for the material of your fence and the Seattle climate.",
    theme: "Maintenance"
  },
  {
    question: "What should I do if my fence is sagging or leaning?",
    answer: "If your fence is sagging or leaning, it may be due to improper installation or structural issues. Contact us immediately for assistance with repairs or replacement.",
    theme: "Maintenance"
  },
  {
    question: "What are the benefits of wood fencing in Seattle?",
    answer: "Wood fencing in Seattle offers natural beauty, versatility, and cost-effectiveness. It's ideal for creating privacy and can be customized to match various architectural styles. Our pressure-treated wood options are resistant to Seattle's damp climate.",
    theme: "Wood Fencing Seattle"
  },
  {
    question: "How long does a wood fence typically last in Seattle's climate?",
    answer: "With proper maintenance, a wood fence in Seattle can last 15-20 years. We use high-quality, weather-resistant woods and protective treatments to maximize longevity in our wet climate.",
    theme: "Wood Fencing Seattle"
  },
  {
    question: "What types of wood do you recommend for fencing in Seattle?",
    answer: "We recommend cedar and pressure-treated pine for Seattle fences. Cedar naturally resists decay and insects, while pressure-treated pine offers excellent durability at a lower cost.",
    theme: "Wood Fencing Seattle"
  },
  {
    question: "What are PostMaster steel fence posts?",
    answer: "PostMaster steel fence posts are a durable, low-maintenance alternative to traditional wood posts. They're galvanized and powder-coated for rust resistance, perfect for Seattle's wet climate.",
    theme: "PostMaster Posts"
  },
  {
    question: "How do PostMaster posts compare to wood posts in terms of longevity?",
    answer: "PostMaster steel posts significantly outlast wood posts, often lasting 20+ years without rotting or warping. This makes them an excellent long-term investment for Seattle homeowners.",
    theme: "PostMaster Posts"
  },
  {
    question: "Can PostMaster posts be used with wood fencing?",
    answer: "Yes, PostMaster posts are versatile and can be used with wood fencing. They provide the strength of steel while allowing you to maintain the natural look of a wood fence.",
    theme: "PostMaster Posts"
  },
  {
    question: "What are the advantages of composite fencing in Seattle?",
    answer: "Composite fencing offers the look of wood with enhanced durability and lower maintenance. It resists moisture, doesn't rot or splinter, and stands up well to Seattle's rainy weather.",
    theme: "Composite Fences"
  },
  {
    question: "How long do composite fences last in Seattle's climate?",
    answer: "Composite fences can last 20-30 years or more in Seattle's climate. They're highly resistant to moisture, UV rays, and temperature fluctuations, making them a long-lasting choice.",
    theme: "Composite Fences"
  },
  {
    question: "Are composite fences eco-friendly?",
    answer: "Yes, many composite fences are made from recycled materials, making them an eco-friendly choice. They also don't require the regular staining or sealing that wood fences do, reducing chemical use over time.",
    theme: "Composite Fences"
  },
  {
    question: "What are the maintenance requirements for a wood fence in Seattle?",
    answer: "Wood fences in Seattle require regular maintenance to ensure longevity. This includes annual inspections, cleaning, and sealing to protect against moisture and weathering.",
    theme: "Maintenance"
  },
  {
    question: "How often should I clean and seal my composite fence?",
    answer: "Composite fences in Seattle should be cleaned annually and sealed every 3-5 years to maintain their appearance and protect against moisture and UV rays.",
    theme: "Maintenance"
  },
  {
    question: "What should I do if my fence is damaged by a storm or accident?",
    answer: "If your fence is damaged by a storm or accident, it's important to address the issue promptly to prevent further damage. Contact us immediately for assistance with repairs or replacement.",
    theme: "Maintenance"
  },
  {
    question: "Can I paint my fence to change its color or style?",
    answer: "Yes, you can paint your fence to change its color or style. However, we recommend using a high-quality exterior paint that is suitable for the material of your fence and the Seattle climate.",
    theme: "Maintenance"
  },
  {
    question: "What should I do if my fence is sagging or leaning?",
    answer: "If your fence is sagging or leaning, it may be due to improper installation or structural issues. Contact us immediately for assistance with repairs or replacement.",
    theme: "Maintenance"
  }
];

const themes = ["All", "Wood Fencing Seattle", "PostMaster Posts", "Composite Fences", "Fence Regulations", "Maintenance"];

export default function FencingFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState("All");

  const faqsPerPage = 5;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = selectedTheme === "All" 
    ? faqs 
    : faqs.filter(faq => faq.theme === selectedTheme);

  const totalPages = Math.ceil(filteredFaqs.length / faqsPerPage);
  const startIndex = (currentPage - 1) * faqsPerPage;
  const endIndex = startIndex + faqsPerPage;
  const currentFaqs = filteredFaqs.slice(startIndex, endIndex);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    setCurrentPage(1);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Frequently Asked Questions About Fencing in Seattle</h2>

      <div className={styles.themeSelector}>
        {themes.map(theme => (
          <button 
            key={theme} 
            onClick={() => handleThemeChange(theme)}
            className={`${styles.themeButton} ${selectedTheme === theme ? styles.activeTheme : ''}`}
          >
            {theme}
          </button>
        ))}
      </div>

      <div className={styles.faqContainer}>
        {currentFaqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={styles.icon}>
                <FaChevronDown />
              </span>
            </button>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.paginationContainer}>
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
            >
              {page}
            </button>
          ))}
        </div>
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