import MainPage from 'components/pages/main-page/main-page';
import Header from '../header/header';
import './page-wrapper.css';
import Footer from '../footer/footer';

const PageWrapper = (prop) => (
    <div className="page-wrapper">
        <Header />
        <main className="page-wrapper__main">
            <MainPage {...prop}/>
        </main>
        <Footer />
    </div>
);

export default PageWrapper;