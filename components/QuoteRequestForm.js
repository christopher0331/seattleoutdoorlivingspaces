import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import styles from '../styles/Forms.module.css';

export default function ProjectOverviewForm() {
    // ... (keep all the state variables and handleSubmit function)

    return (
        <div className={styles.projOverviewDiv}>
            <form onSubmit={handleSubmit}>
                <h1>Project Overview Form</h1>

                <div className={styles.formField}>
                    <p className={styles.pofLabel}>Posts:</p>
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
                    <p className={styles.pofLabel}>Picket Orientation:</p>
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

                {/* ... (continue with the rest of the form fields, using the new styles) */}

                <button className={styles.pofButton} type="submit">Submit</button>
            </form>
            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <p>Thank you for your submission!</p>
                        <span className={styles.close} onClick={handleClosePopup}>
                            &times;
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}