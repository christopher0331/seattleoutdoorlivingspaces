import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import styles from '../styles/Forms.module.css';

export default function ProjectOverviewForm() {
    const [postType, setPostType] = useState('');
    const [picketOrientation, setPicketOrientation] = useState('');
    const [projectDetails, setProjectDetails] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Project Overview Form</h2>

            <div className={styles.formField}>
                <p className={styles.formLabel}>Posts:</p>
                <div className={styles.radioGroup}>
                    <label>
                        <input
                            type="radio"
                            name="postType"
                            value="Steel PostMaster Post"
                            checked={postType === 'Steel PostMaster Post'}
                            onChange={() => setPostType('Steel PostMaster Post')}
                        />
                        Steel PostMaster Post
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="postType"
                            value="Cedar 4x4 Posts"
                            checked={postType === 'Cedar 4x4 Posts'}
                            onChange={() => setPostType('Cedar 4x4 Posts')}
                        />
                        Cedar 4x4 Posts
                    </label>
                </div>
            </div>

            <div className={styles.formField}>
                <p className={styles.formLabel}>Picket Orientation:</p>
                <div className={styles.radioGroup}>
                    <label>
                        <input
                            type="radio"
                            name="picketOrientation"
                            value="Facing Client (In)"
                            checked={picketOrientation === 'Facing Client (In)'}
                            onChange={() => setPicketOrientation('Facing Client (In)')}
                        />
                        Facing Client (In)
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="picketOrientation"
                            value="Facing Out"
                            checked={picketOrientation === 'Facing Out'}
                            onChange={() => setPicketOrientation('Facing Out')}
                        />
                        Facing Out
                    </label>
                </div>
                <div className={styles.orientationImages}>
                    <div className={styles.imageWrapper}>
                        <Image src="/facing-in-image.png" alt="Facing In" width={200} height={150} layout="responsive" />
                        <p>Facing In</p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image src="/facing-out-image.png" alt="Facing Out" width={200} height={150} layout="responsive" />
                        <p>Facing Out</p>
                    </div>
                </div>
            </div>

            <div className={styles.formField}>
                <label className={styles.formLabel}>
                    Tell Us About Your Project:
                    <textarea
                        className={styles.formTextarea}
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                    />
                </label>
            </div>

            <button className={styles.submitButton} type="submit">Submit</button>

            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <p>Thank you for your submission!</p>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </form>
    );
}