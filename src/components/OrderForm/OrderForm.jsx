import "../OrderForm/OrderForm.scss";
import "../../styles/base/typography.scss"
import "../../styles/base/base.scss"

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
        <section className="orderForm" style={{ backgroundImage: `url(${backgroundOrderForm})` }}>
            <div className="orderForm__container">

                <h1 className="orderForm__title"> ОФОРМЛЕНИЕ <span>ЗАКАЗА</span></h1>
                <p className="orderForm__note">Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>

                <div className="orderForm__steps">
                        <div className="orderForm__list">
                            {stepsData.map((step) => (
                                <div key={step.id} className="orderForm__item">
                                    <div className="orderForm__circleWrapper">
                                        <div className="orderForm__circle">
                                            <img src={step.icon} alt="" className="orderForm__icon"/>
                                        </div>
                                    </div>
                                    <p className='orderForm__text'>{step.text}</p>
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
