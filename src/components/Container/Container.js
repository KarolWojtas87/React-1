import styles from './Container.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Container = props =>

(
    <div className={styles.component}>
        {props.children}
    </div>
);

Container.propTypes = {
    children: PropTypes.node,
};



export default Container;