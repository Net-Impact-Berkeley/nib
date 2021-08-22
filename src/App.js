import React from 'react';

import About from './about';
import Home from './home';
import Apply from './apply';
import Projects from './projects';
import Members from './members';
import NotFound from './404';
import FAQ from './faq';
import Redirecting from 'redirecting';
import RedirectingPM from 'redirecting-pm';
import Footer from 'components/footer';
import NavBar from 'components/navbar';
import ScrollToTop from 'components/ScrollToTop';
import GA from 'components/GoogleAnalytics';
import Banner from 'components/banner';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router
      hashType={"slash"}
      basename={""}
    >
      <div>
      { GA.init() && <GA.RouteTracker /> }
        <NavBar />
        <Banner />
        <Switch>
          <Route component={Redirecting} />
        </Switch>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
    
  );
}

export default App;
