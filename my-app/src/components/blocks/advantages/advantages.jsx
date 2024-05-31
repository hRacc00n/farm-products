import AdvantageCard from "components/ui/advantage-card/advantage-card";
import Title from "components/ui/title/title";
import './advantages.css';
import Button from "components/ui/button/button";

const Advantages = ({advantages}) => (
    <section className="advantages">
        <div className="advantages__container">
            <Title level={2} size={"default"}>Почему фермерские продукты лучше?</Title>
            <ul className="advantages__list">
                {advantages.map((advantage) => (
                    <li className="advantages__item" key={advantage.id}>
                        <AdvantageCard advantage={advantage} />
                    </li>
                ))}
            </ul>
            <Button>Купить</Button>
        </div>
    </section>
);

export default Advantages;