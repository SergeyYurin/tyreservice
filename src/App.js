import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Map from './components/Map';
import Ymap from './components/Ymap';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Prices from './components/Prices';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Services />
      <Prices />
      <Map />
      {/* <Ymap /> */}
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
