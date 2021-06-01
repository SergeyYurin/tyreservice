import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Maps from './components/Maps';
import AboutMe from './components/AboutMe';
import OurServices from './components/OurServices';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <OurServices />
      <Maps />
      <AboutMe />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
