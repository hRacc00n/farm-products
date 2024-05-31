import About from "components/blocks/about/about";
import Advantages from "components/blocks/advantages/advantages";

const MainPage = ({advantages}) => (
    <>
        <About />
        <Advantages advantages={advantages}/>
    </>
);

export default MainPage;