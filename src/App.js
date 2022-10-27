import logo from './logo.svg';
import Header from './Components/Header';
import Main from './Components/MainComponent';
import Footer from './Components/Footer';
import './styles/style.css';
import './styles/responsive.css';
import Collections from './Components/Collections';
import Features from './Components/Features';
import HowItWorks from './Components/HowItWorks';
import AboutSection from './Components/AboutSection';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection/>
      <HowItWorks/>
      <Collections/>
      <Features/>
      <Footer/>     
     
     
    </div>
  );
}

export default App;
