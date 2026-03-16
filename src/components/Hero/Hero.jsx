import "./Hero.scss";
import "../../styles/base/typography.scss"
import "../../styles/base/base.scss"
import backgroundHero from "../../assets/images/backgrounds/backgroundHero.png";

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${backgroundHero})` }}>
            <div className="hero__container">
                    <h1 className="hero__title">
                    <span>LOREM IPSUM</span> DOLOR SIT <br/> AMET CONSECTETUR <span>ADIPISCING</span>
                    </h1>
                    
                    <div className="hero__info">
                        <h2 className="hero__subtitle">
                            At vero eos et accusamus et iusto odio dignissimos ducimus!
                        </h2>
                        <ul className="hero__list">
                            <li>Totam rem aperiam eaque ipsa</li>
                            <li>Sit voluptatem accusantium doloremque laudantium</li>
                            <li>Sed ut perspiciatis, unde omnis iste natus error</li>
                        </ul>
                    </div>

                    <div className="hero__actions">
                        <button className="hero__button hero__button--blue">ЗАКАЗАТЬ</button>
                        <button className="hero__button hero__button--white">ПОДРОБНЕЕ</button>
                    </div>
            </div>
        </section>
    );
};

export default Hero;



