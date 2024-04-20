import React, { FC } from 'react';
import styles from '../styles/Navbar.module.css';

interface MenuItem {
    label: string;
}

const Navbar: FC = () => {
    const menuItems: MenuItem[] = [
        { label: 'Reports' },
        { label: 'About' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <span className={styles.navLogo}>Document Viewer</span>
                <div className={styles.navLinks}>
                    {menuItems.map((menuItem, index) => (
                        <span key={index} className={styles.navItem}>
                            {menuItem.label}
                        </span>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
