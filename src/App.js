import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Maps from './components/Maps';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <OurServices />
      <Maps />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
