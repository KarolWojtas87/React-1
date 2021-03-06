import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import styles from './Info.scss';
import { info } from '../../data/dataStore';


const Info = () => (
    <Container>
        <Hero titleText={info.title} image={info.image} />
        <p className={styles.p}>{info.description}</p>
    </Container>
);

export default Info;