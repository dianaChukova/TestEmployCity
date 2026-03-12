import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import OrderForm from "../components/OrderForm/OrderForm";
import "../styles/base/base.scss"

function MakingAnOrder() {
    return (
        <> 
            <Header />
            <main>
                <Hero />
                <OrderForm/>
            </main>
            <Footer/>
        </>
    )
}

export default MakingAnOrder;