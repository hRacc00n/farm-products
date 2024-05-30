import Title from "components/ui/title/title";
import './about.css';

const About = () => (
    <section className="about">
        <div className="about__container">
            <Title level={1} size="big">Магазин фермерских продуктов с доставкой</Title>
            <p className="about__text">Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.</p>
        </div>
    </section>
);

export default About;