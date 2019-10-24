import React from 'react';

import About from './components/About/about.component';
import Projects from './components/Projects/projects.component';
import Footer from './components/Footer/footer.component';
import Header from './components/Header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
