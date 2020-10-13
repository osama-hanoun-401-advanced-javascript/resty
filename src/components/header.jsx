import styles from '../components-styles/header.scss';
import React from 'react';

const header = () => {
    return (
        <header className={styles.header}>
            <h1>RESTy</h1>
        </header>
    )
};

export default header;