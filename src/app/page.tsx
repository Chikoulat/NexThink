import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
//import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
  return (
      <React.Fragment>
          <head>
                <title>Next - Your Partner Towards the Right Solution</title>
                <meta name="description" content="Your partner towards the right solution"/>
                <meta name="keywords" content="IT solutions, technology, business solutions, software development, IT consulting, web devolopment"/>
                <meta name="author" content="Your Company Name"/>
                <meta property="og:title" content="Next - Your Partner Towards the Right Solution"/>
                <meta property="og:description" content="Your partner towards the right solution"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.yourwebsite.com"/>
                <meta property="og:image" content="https://www.yourwebsite.com/image.jpg"/>
          </head>
          <section className="bg-tertiary space-y-4 3xl:w-[70%] 3xl:mx-auto">
              <div className="bg-gradient-to-t from-blue-900 to-blue-600">
                  <Navbar/>
                  <Home/>
              </div>
              <About/>
              {/*<Projects/>*/}
              <Contact/>
              <Footer/>
          </section>
      </React.Fragment>
  );
}

export default App;