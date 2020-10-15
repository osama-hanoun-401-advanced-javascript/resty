import styles from '../components-styles/header.scss';
import Nav from './nav'
import React from 'react';

const header = () => {
    return (
        <header className={styles.header}>
            <h1>RESTy</h1>
            <Nav />
        </header>
    )
};

export default header;