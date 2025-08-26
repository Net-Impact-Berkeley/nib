import React, {useEffect} from 'react';
import './about.scss';
import CallToAction from '../components/callToAction';
import aboutPhoto from './img/nib5k.jpg';
import aboutRetreat from './img/AboutRetreat.jpg';
import values from './img/ValuesPhoto.png';
import NetImpactGlobal from './img/NetImpactGlobal.png';
import Button from '../components/button';
import Values from './values';
import CultureImage from './cultureImage';
import cultureData from './data/culture';

const About = () => {
    document.title = 'NIB | About';


    useEffect(() => {
        const blobs = document.querySelectorAll('.hero');
    
        blobs.forEach((blob, index) => {
          const delay = index * 50;
    
          setTimeout(() => {
            blob.style.opacity = 1;
            blob.style.transform = `translateY(0) ${blob.style.transform || ''}`;
          }, delay);
        });
      }, []);
    

    return (
        <section className="aboutPage">
            <section className="hero container">
                <div>
                    <h3>ABOUT</h3>
                    <h1>Inspired By Our Mission</h1>
                    <p>Through innovative impact-focused methods and collaborative 
                    problem-solving, we strive to bring social responsibility and 
                    environmental stewardship to business and innovation.</p>
                </div>
                <div className="heroImage">
                    <img src={aboutPhoto} alt="Collage of NIB members" />
                </div>
            </section>

            <svg className="splashWave hideOnMobile wave" viewBox="0 0 1440 749" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M713.744 408.887C546.069 469.017 -2 454 -2 454V748.5H1440V0C1282.84 210.195 1071.62 83.1369 975.016 157.385C878.415 231.633 881.418 348.757 713.744 408.887Z" />
            </svg>

            <section className="aboutUsSection">
                <section className="grid container">
                    <div className="left">
                        <img src= {aboutRetreat} alt="Group of NIB members" />
                    </div>
                    <div className="right">
                        <h1>About Us</h1>
                        <p>
                        Net Impact Berkeley is a student-run consulting group at the University of California Berkeley. 
                        We provide comprehensive strategy solutions to our clients—including non-profits, social enterprises, 
                        startups and Fortune 500 corporations—to improve their performance and organizational effectiveness
                        </p>
                        <p>
                        For over 13 years, we have brought together the brightest minds from various disciplines and 
                        backgrounds at UC Berkeley to solve problems and advance positive social and environmental impact.
                        </p>
                    </div>
                </section>
                <section className="statsSection container">
                    <div>
                        <h2>150+</h2>
                        <p>Consulting Projects Completed</p>
                    </div>

                    <div>
                        <h2>18+</h2>
                        <p>Years of Experience</p>
                    </div>

                    <div>
                        <h2>180+</h2>
                        <p>Net Impact Berkeley Alumni</p>
                    </div>

                    <div>
                        <h2>100,000+</h2>
                        <p>Net Impact Members Worldwide</p>
                    </div>
                </section>
            </section>

            <section className="container valuesSection">
                <h1>Driven By Our Core Values</h1> 
                <section className="grid">
                    <Values />
                    <div className="verticallyCenter right hideOnMobile">
                        <img id="bagelBrunchPic" src={values} alt="Collage of NIB members in various scenarios" />
                    </div>
                </section>
            </section>

            <svg className="wave hideOnMobile" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
                <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" />
            </svg>

            <section className="globalSection">
                <div className="container">
                    <div className="showOnMobile">
                        <img src={NetImpactGlobal} alt="2 NIB members attending a Net Impact conference"/>
                    </div>
                    <h1>Net Impact’s Global Network</h1>
                    <div className="grid">
                        <div className="left verticallyCenter hideOnMobile">
                            <img src={NetImpactGlobal} alt="2 NIB members attending a Net Impact conference"/>
                        </div>
                        <div className="right verticallyCenter">
                            <p>We are a leading Gold Status chapter of Net Impact, a global organization consisting of 100,000+ students and 
                            business professionals united by the common mission of using business for social good.<br/>
                            <br/>
                            As a part of this global community, we are able to leverage the minds of industry experts and professionals in our 
                            project work, attend national events and collaborate across our 300 chapters. </p>
                            <Button link="https://www.netimpact.org/" buttonText="Learn About Net Impact Central" external />
                        </div>
                    </div>
                </div>
            </section>

            <svg className="invertedWave hideOnMobile" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
                <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#ffffff"/>
            </svg>

            <section className="cultureSection container">
                <h1>Life in NIB</h1>
                <div className="cultureTable">
                    {cultureData.map((cultureItem) => {
                        return <CultureImage {...cultureItem} key={cultureItem.alt} />;
                    })}
                </div>
            </section>
            <CallToAction />
        </section>
    );
}


export default About;
