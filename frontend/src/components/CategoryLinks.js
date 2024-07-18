// CategoryLinks.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Adjust the path as necessary

const CategoryLinks = () => {
    return (
        <div className="cat">
            <Link to="/favorite" className={styles.link}>
                Favorite
            </Link>
            <Link to="/vegan" className={styles.link}>
                Vegan
            </Link>
            <Link to="/rice" className={styles.link}>
                Rice
            </Link>
            <Link to="/pasta" className={styles.link}>
                Pasta
            </Link>
            <Link to="/noodle" className={styles.link}>
                Noodle
            </Link>
            <Link to="/dessert" className={styles.link}>
                Dessert
            </Link>
            <Link to="/drinks" className={styles.link}>
                Drinks
            </Link>
        </div>
    );
};

export default CategoryLinks;