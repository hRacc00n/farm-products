import './app.css';
import PageWrapper from 'components/layout/page-wrapper/page-wrapper';
import advantagesList from 'mocks/mocks';

function App() {
  return (
    <PageWrapper advantages={advantagesList}/>
  );
}

export default App;
