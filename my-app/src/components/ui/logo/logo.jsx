import logo from 'assets/logo/logo.svg';
import './logo.css';

const Logo = () => (
    <a className="logo" href="/">
        <img src={logo} width={44} height={44} alt='Логотип фурмерских продуктов'></img>
        Фермерские продукты
    </a>
);

export default Logo;