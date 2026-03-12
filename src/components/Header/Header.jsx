import { useState } from 'react';
import styles from "./Header.module.scss";
import logo from "../../assets/images/logos/logo.svg";
import { navLinks } from "../../utils/navigation";

const Header = () => {
    const [activeId, setActiveId] = useState(1)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
    <header className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.header__logo}>
                <img src={logo} alt="Logo" />
            </div>

            <button 
                className={styles.header__burger} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`${styles.header__menu} ${isMenuOpen ? styles['header__menu--open'] : ''}`}>
                {navLinks.map(({id, text, href}) => (
                    <a 
                        key={id} 
                        href={href} 
                        className={`${styles.header__link} ${activeId === id ? styles['header__link--active'] : ''}`}
                        onClick={() => {
                            setActiveId(id)
                            setIsMenuOpen(false)
                        }}
                    > 
                        {text}
                    </a>
                ))}
            </nav>
        </div>
    </header>
    );
};

export default Header;


