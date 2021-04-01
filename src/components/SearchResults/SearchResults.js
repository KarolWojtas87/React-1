import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Card from '../Card/Card.js';



class SearchResults extends React.Component {

    static propTypes = {
        cards: PropTypes.array,


    }

    render() {

        const { cards } = this.props

        return (
            <section className={styles.component}>
                <h1 className={styles.title}>Searched cards:</h1>
                <Container>
                    {cards.map(cardData => (
                        <Card key={cardData.id} {...cardData} />
                    ))}
                </Container>
            </section >
        )
    }
}

export default SearchResults;