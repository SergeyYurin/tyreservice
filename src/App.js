import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Map from './components/Map';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Services />
      <div style={{ width: '100%', height: 400 }}>
        <Map />
      </div>
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
