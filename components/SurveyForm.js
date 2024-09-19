import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Forms.module.css';

export default function SurveyForm() {
  const [formData, setFormData] = useState({
    satisfaction: '',
    recommend: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.satisfaction) tempErrors.satisfaction = 'Satisfaction rating is required';
    if (!formData.recommend) tempErrors.recommend = 'Recommendation rating is required';
    if (!formData.feedback) tempErrors.feedback = 'Feedback is required';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      // Handle form submission logic here
      console.log('Survey form submitted', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <motion.div
          className={styles.successMessage}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Thank you for your feedback!</h2>
          <p>We appreciate your input.</p>
        </motion.div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Form fields go here (same as in the original SurveyForm) */}
        </form>
      )}
    </div>
  );
}