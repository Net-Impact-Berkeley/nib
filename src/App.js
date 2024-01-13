import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import About from './about';
import Home from './home';
import Apply from './apply';
import Projects from './projects';
import Impact from './impact'
import Members from './members';
import NotFound from './404';
import FAQ from './faq';
import Redirecting from 'redirecting';
import RedirectingPM from 'redirecting-pm';
import Footer from 'components/footer';
import NavBar from 'components/navbar';
import ScrollToTop from 'components/ScrollToTop';
import {initGoogleAnalytics} from 'components/GoogleAnalytics';
import ReactGA from 'react-ga';
import Banner from 'components/banner';
import { useEffect } from 'react';

const App = () => {
  return (
    <Router>
      <AppContents />
    </Router>
  );
}

const AppContents = () => {
  let location = useLocation();
  const isGAEnabled = initGoogleAnalytics();

  useEffect(() => {
    if (isGAEnabled) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [location, isGAEnabled]);

  return (
    <>
      <NavBar />
      <Banner />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/apply" element={<Apply/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/impact" element={<Impact/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/checkin" element={<Redirecting/>} />
        <Route path="/check-in" element={<Redirecting/>} />
        <Route path="/pm" element={<RedirectingPM/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>    
  );
}

export default App;
