import Logo from "components/ui/logo/logo";
import Nav from "../nav/nav";
import './header.css';

const Header = () => (
    <header className="header">
        <Logo />
        <Nav />
    </header>
);

export default Header;