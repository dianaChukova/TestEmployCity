import { useState } from 'react';
import "./Header.scss";
import logo from "../../assets/images/logos/logo.svg";
import { navLinks } from "../../utils/navigation";

const Header = () => {
    const [activeId, setActiveId] = useState(1)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={logo} alt="Logo" />
                </div>

                <button 
                    className="header__burger" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`header__menu ${isMenuOpen ? 'header__menu--open' : ''}`}>
                    {navLinks.map(({id, text, href}) => (
                        <a 
                            key={id} 
                            href={href} 
                            className={`header__link ${activeId === id ? 'header__link--active' : ''}`}
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


