import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Forms.module.css';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fenceType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.phone) tempErrors.phone = 'Phone is required';
    if (!formData.fenceType) tempErrors.fenceType = 'Fence type is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      // Handle form submission logic here
      console.log('Quote form submitted', formData);
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
          <h2>Thank you for requesting a quote!</h2>
          <p>We will get back to you shortly.</p>
        </motion.div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Form fields go here (same as in the original QuoteForm) */}
        </form>
      )}
    </div>
  );
}