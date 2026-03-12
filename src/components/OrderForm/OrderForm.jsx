import styles from "../OrderForm/OrderForm.module.scss";
import "../../styles/base/typography.scss"
import "../../styles/base/base.scss"


// const OrderForm = () => {
//     return (
//         <div className={styles.container}>
//             <h1 className={styles.title}> ОФОРМЛЕНИЕ <span>ЗАКАЗА</span></h1>
//             <p>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>

//         </div>
//     );
// };

// export default OrderForm;




// Импортируй свои иконки как SVG
import searchIcon from "../../assets/images/icons/search.svg";
import percentIcon from "../../assets/images/icons/percent.svg";
import addDocIcon from "../../assets/images/icons/file.svg";
import mailIcon from "../../assets/images/icons/message.svg";
import moneyIcon from "../../assets/images/icons/money.svg";
import backgroundOrderForm from "../../assets/images/backgrounds/backgroundOrderForm.png";
import Form from "./Form/Form";

const stepsData = [
    { id: 1, icon: searchIcon, text: "Lorem ipsum dolor sit amet" },
    { id: 2, icon: percentIcon, text: "Consecteturadipiscing elit" },
    { id: 3, icon: addDocIcon, text: "Sed do eiusmod tempor" },
    { id: 4, icon: mailIcon, text: "Esse cillum dolore eu fugiat" },
    { id: 5, icon: moneyIcon, text: "Excepteur sint occaecat cupidatat non proident" },
];

const Steps = () => {
    return (
        <section className={styles.orderForm} style={{ backgroundImage: `url(${backgroundOrderForm})` }}>
            <div className={styles.orderForm__container}>

                <h1 className={styles.orderForm__title}> ОФОРМЛЕНИЕ <span>ЗАКАЗА</span></h1>
                <p className={styles.orderForm__note}>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>

                <div className={styles.orderForm__steps}>
                        <div className={styles.orderForm__list}>
                            {stepsData.map((step) => (
                                <div key={step.id} className={styles.orderForm__item}>
                                    <div className={styles.orderForm__circleWrapper}>
                                        <div className={styles.orderForm__circle}>
                                            <img src={step.icon} alt="" className={styles.orderForm__icon} />
                                        </div>
                                    </div>
                                    <p className={styles.orderForm__text}>{step.text}</p>
                                </div>
                            ))}
                        </div>
                </div>
                <Form/>

            </div>
        </section>
    );
};

export default Steps;
