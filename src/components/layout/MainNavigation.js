import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                Quote App
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink activeClassName={styles.active} to="/quotes" exact>All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} to="/new-quote">Add a Quote</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}



export default MainNavigation
