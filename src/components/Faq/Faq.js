import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import styles from './Faq.scss';
import { faq } from '../../data/dataStore';



const Faq = () => (
    <Container>
        <Hero className={styles.title} titleText={faq.title} image={faq.image} />
        <p className={styles.p}>{faq.description}</p>

    </Container>
);

export default Faq;