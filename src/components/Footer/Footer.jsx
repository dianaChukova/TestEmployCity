import styles from './Footer.module.scss';
import qiwiIcon from "../../assets/images/icons/qiwi.svg"; 
import yandexIcon from "../../assets/images/icons/yandex.svg"; 
import webmoneyIcon from "../../assets/images/icons/webmoney.svg"; 
import mailIcon from "../../assets/images/icons/mail.svg"; 
import vkIcon from "../../assets/images/icons/vk.svg"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__copyright}>
                    <p>© 2018 LOREMIPSUM.NET Все права защищены.</p>
                </div>

                <span className={styles.footer__separator}></span>

                <div className={styles.footer__payments}>
                    <div className={styles.footer__paymentItem}>
                        <img src={qiwiIcon} alt="QIWI wallet icon" className={styles.footer__paymentIcon} />
                        <span>QIWI wallet</span>
                    </div>
                    <div className={styles.footer__paymentItem}>
                        <img src={yandexIcon} alt="Yandex Money icon" className={styles.footer__paymentIcon} />
                        <span>Yandex Money</span>
                    </div>
                    <div className={styles.footer__paymentItem}>
                        <img src={webmoneyIcon} alt="Web Money icon" className={styles.footer__paymentIcon} />
                        <span>Web Money</span>
                    </div>
                </div>

                <span className={styles.footer__separator}></span>

                <div className={styles.footer__contacts}>
                    <div className={styles.footer__contactItem}>
                        <img src={mailIcon} alt="Email icon" className={styles.footer__contactIcon} />
                        <a href="mailto:info@ipsum228.com" className={styles.footer__contactLink}>info@ipsum228.com</a>
                    </div>
                    <div className={styles.footer__contactItem}>
                        <img src={vkIcon} alt="Vk icon" className={styles.footer__contactIcon} />
                        <a href="https://vk.com" className={styles.footer__contactLink}>Мы вконтакте</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
