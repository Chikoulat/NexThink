import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
//import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
  return (
    <section className="bg-tertiary space-y-4">
      <div className="bg-gradient-to-t from-blue-900 to-blue-600">
        <Navbar />
        <Home />
      </div>
      <About />
        {/*<Projects/>*/}
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
