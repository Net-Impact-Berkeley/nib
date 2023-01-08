import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
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
import ReactGA from 'react-ga';
import Banner from 'components/banner';
import { useEffect } from 'react';

function App() {
  // let location = useLocation();
  // useEffect(() => {
  //   GA.init();
  // }, []);

  // useEffect(() => {
  //   // Google Analytics
  //   ga('send', 'pageview');
  //   ReactGA.pageview(window.location.pathname + window.location.search);

  // }, [location]);

  return (
    <Router>
      <div>
        <NavBar />
        <Banner />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/apply" element={<Apply/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/members" element={<Members/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/checkin" element={<Redirecting/>} />
          <Route path="/check-in" element={<Redirecting/>} />
          <Route path="/pm" element={<RedirectingPM/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
    
  );
}

export default App;
