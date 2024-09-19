import { useState } from 'react';
import Head from 'next/head';
import GeneralInquiryForm from '../components/GeneralInquiryForm';
import ProjectOverviewForm from '../components/ProjectOverviewForm';
import WarrantyForm from '../components/WarrantyForm';
import FeedbackForm from '../components/FeedbackForm';
import Testimonials from '../components/Testimonials'; // Import the ReviewsComponent
import styles from '../styles/Forms.module.css';

export default function Forms() {
  const [activeForm, setActiveForm] = useState('general');

  const renderForm = () => {
    switch(activeForm) {
      case 'general':
        return <GeneralInquiryForm />;
      case 'warranty':
        return <WarrantyForm />;
      case 'projectOverview':
        return <ProjectOverviewForm />;
      case 'feedback':
        return <FeedbackForm />;
      default:
        return <GeneralInquiryForm />;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - Seattle Outdoor Living</title>
        <meta name="description" content="Get in touch with Seattle Outdoor Living for your fencing needs." />
      </Head>

      <h1 className={styles.title}>Contact Us</h1>

      <div className={styles.tabContainer}>
        <button 
          className={`${styles.tab} ${activeForm === 'general' ? styles.activeTab : ''}`}
          onClick={() => setActiveForm('general')}
        >
          General Inquiry
        </button>
        <button 
          className={`${styles.tab} ${activeForm === 'warranty' ? styles.activeTab : ''}`}
          onClick={() => setActiveForm('warranty')}
        >
          Warranty Form
        </button>
        <button 
          className={`${styles.tab} ${activeForm === 'projectOverview' ? styles.activeTab : ''}`}
          onClick={() => setActiveForm('projectOverview')}
        >
          Project Overview Form
        </button>
        <button 
          className={`${styles.tab} ${activeForm === 'feedback' ? styles.activeTab : ''}`}
          onClick={() => setActiveForm('feedback')}
        >
          Feedback
        </button>
      </div>

      <div className={styles.formContainer}>
        {renderForm()}
      </div>

      {/* Add the ReviewsComponent below the forms */}
      <div className={styles.reviewsSection}>
        <Testimonials />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      heroImage: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/564989bf-964c-45c3-2ec6-deeeb9dd2800/public",
      showHero: true,
    },
  };
}