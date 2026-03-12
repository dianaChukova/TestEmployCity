import styles from "./Hero.module.scss";
import "../../styles/base/typography.scss"
import "../../styles/base/base.scss"
import backgroundHero from "../../assets/images/backgrounds/backgroundHero.png";

const Hero = () => {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${backgroundHero})`}}>
            <div className={styles.hero__container}>
                    <h1 className={styles.hero__title}>
                       <span>LOREM IPSUM</span> DOLOR SIT <br/> AMET CONSECTETUR <span>ADIPISCING</span>
                    </h1>
                    
                    <div className={styles.hero__info}>
                        <h2 className={styles.hero__subtitle}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus!
                        </h2>
                        <ul className={styles.hero__list}>
                            <li>Totam rem aperiam eaque ipsa</li>
                            <li>Sit voluptatem accusantium doloremque laudantium</li>
                            <li>Sed ut perspiciatis, unde omnis iste natus error</li>
                        </ul>
                    </div>

                    <div className={styles.hero__actions}>
                        <button className={`${styles.hero__button} ${styles['hero__button--blue']}`}>ЗАКАЗАТЬ</button>
                        <button className={`${styles.hero__button} ${styles['hero__button--white']}`}>ПОДРОБНЕЕ</button>
                    </div>
            </div>
        </section>
    );
};

export default Hero;



