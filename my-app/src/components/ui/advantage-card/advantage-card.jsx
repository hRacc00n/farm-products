import Title from "../title/title";
import teasty from 'assets/advantages/teasty.svg';
import bad from 'assets/advantages/bad.svg';
import natural from 'assets/advantages/natural.svg';
import old from 'assets/advantages/old.svg';
import './advantage-card.css';

const checkTypeImage = (type) => {
    switch (type) {
        case 'teasty':
            return teasty;
        case 'old':
            return old;
        case 'natural':
            return natural;
        case 'bad':
            return bad;
        default:
            return null;
    }
};

const AdvantageCard = ({advantage}) => (
    <article className={`advantage-card advantage-card--${advantage.type ? advantage.type : 'shop'}`}>
        <header className="advantage-card__header">
            <img className="advantages__image" src={checkTypeImage(advantage.image)} width={52} height={52} alt="teasty"/>
            <span className={`advantages__type advantages__type--${advantage.type ? advantage.type : 'shop'}`}>Фермерские продукты</span>
            <Title level={3} size={"small"}>{advantage.title}</Title>
        </header>
        <p className="advantages__text">{advantage.text}</p>
    </article>
);

export default AdvantageCard;