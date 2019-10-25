import React, { useRef } from 'react';

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@material-ui/core/styles';

import About from './components/About/about.component';
import Projects from './components/Projects/projects.component';
import Footer from './components/Footer/footer.component';
import Header from './components/Header/header.component';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header aboutRef={aboutRef} projectsRef={projectsRef} />
        <About refProp={aboutRef} />
        <Projects refProp={projectsRef} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
