import MainPage from 'components/pages/main-page/main-page';
import Header from '../header/header';
import './page-wrapper.css';
import Footer from '../footer/footer';

const PageWrapper = () => (
    <div className="page-wrapper">
        <Header />
        <main className="page-wrapper__main">
            <MainPage />
        </main>
        <Footer />
    </div>
);

export default PageWrapper;