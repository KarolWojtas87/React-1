import React from 'react';
import styles from './Header.scss';
// import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class Header extends React.Component {

    // static propTypes = {
    //     title: PropTypes.node,
    // }

    render() {

        return (
            <header className={styles.component}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link className={styles.logo} to={'/'}>
                            <Icon name='cat' />
                        </Link>
                        <nav>
                            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
                            <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
                        </nav>
                    </div>
                </Container>
            </header>
        );
    }
}

export default Header;