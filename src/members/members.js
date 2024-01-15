import './members.scss';
import Member from './member.js';
import CallToAction from '../components/callToAction';
import Carousel from './carousel';
import "./flickity.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from '../components/button';
import React, {useState, useRef, useEffect } from 'react';

import AlumniCompanies from './data/alumniCompanies';
import memberInfo from './data/memberInfo';
import imageList from './data/carousel';

import imageLeft from './img/splash-left.png';
import imageRight from './img/splash-right.png';
import photo1 from './img/carousel/photo1.jpg';
import photo2 from './img/carousel/photo2.jpg';
import photo3 from './img/carousel/photo3.jpg';
import linkedInImage from '../img/linkedin.png';
import calendlyImage from '../img/calendly.png';

const AlumniCompany = ({name, href, fileName}) => {
    return <a href={href} target="_blank" rel="noopener noreferrer"><img src={require(`./img/careers/${fileName}`)} alt={name} /></a>;
}
const Modal = ({toggleShow, person}) => {
    const {name, image, bio, calendly, title, linkedin, isDM} = person;


    
    return (
        <div className='overlay'>
            <div className='bioContainer'>
                <div className='bioTitle'>
                    <img src={image} className="image" alt={name} />
                    <h4 className='name'>{name}</h4>
                    <p className='title'>{title}</p>
                </div>
                <div className='bioContent'>
                    <button className='close' onClick={() => toggleShow(person)}>X</button>
                    {bio.map(paragraph => <p>{paragraph}</p>)}
                    <div className='links'>
                        {!isDM ? <p><a href={calendly} target="_blank" rel="noopener noreferrer"><img src={calendlyImage} className="icon" alt="Calendly icon" /></a></p> : null}
                        <p><a href={linkedin} target="_blank" rel="noopener noreferrer"><img src={linkedInImage} className="icon" alt="LinkedIn icon" /></a></p>
                    </div>
                </div>
            </div>
        </div> 
    );
};

const Members = () => {
    document.title = 'NIB | Members';

    const [showModal, setShowModal] = useState(false);
    const [modalInfo, setModalInfo] = useState(null);

    const handleClick = (person) => {
        setShowModal(!showModal);
        setModalInfo(person);
    }

    let execList = memberInfo.execList.map((person) => <Member person={person} key={person.name} handleClick={handleClick}/>);
    let pmList = memberInfo.pmList.map((person) => <Member person={person} key={person.name} handleClick={handleClick}/>);
    let memberList = memberInfo.memberList.map((person) => <Member person={person} key={person.name} handleClick={handleClick}/>);

    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        // Apply the transform to move the carousels to the left based on the scroll position
        const carousel1 = containerRef1.current;
        const carousel2 = containerRef2.current;

        // Adjust the initial position and direction for each carousel
        carousel1.style.transform = `translateX(calc(-${scrollPosition}px - 200px))`; // Adjust as needed
        carousel2.style.transform = `translateX(calc(-100% + ${scrollPosition}px + 200px))`;  // Adjust as needed
      };

       // Set the initial position of the second carousel on page load
       const carousel2 = containerRef2.current;
       carousel2.style.transform = `translateX(calc(-100% + 200px))`;  // Adjust as needed
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <section className="membersPage" 
        >
            <section className="membersHero">
                <section className="">
                        <h1>Meet our members</h1>
                    <div className="carousel-wrapper">
                        <div class="photo-carousel"  id="carousel1" ref={containerRef1}>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/10-3d64ee03c79ccfea99fef2552e88edab763129a2506d081f12fc32c8ee8a3f5e.jpg" />
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/9-4c0eb0c0f41ea554032633a6903ee27aaf2f7d3f7aa6dfba8f460dc66f924086.jpg" />    
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/8-8f8681eed1f992d82024a808d32b4b9ce274c90e6ad7c7d70a3ebe8199942f0f.jpg" />
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/10-3d64ee03c79ccfea99fef2552e88edab763129a2506d081f12fc32c8ee8a3f5e.jpg" />
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/9-4c0eb0c0f41ea554032633a6903ee27aaf2f7d3f7aa6dfba8f460dc66f924086.jpg" />    
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/8-8f8681eed1f992d82024a808d32b4b9ce274c90e6ad7c7d70a3ebe8199942f0f.jpg" />
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/10-3d64ee03c79ccfea99fef2552e88edab763129a2506d081f12fc32c8ee8a3f5e.jpg" />
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/9-4c0eb0c0f41ea554032633a6903ee27aaf2f7d3f7aa6dfba8f460dc66f924086.jpg" />    
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/8-8f8681eed1f992d82024a808d32b4b9ce274c90e6ad7c7d70a3ebe8199942f0f.jpg" />
                            </div>
                        </div>
                        <div class="photo-carousel" id="carousel2" ref={containerRef2}>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/10-3d64ee03c79ccfea99fef2552e88edab763129a2506d081f12fc32c8ee8a3f5e.jpg" />
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/9-4c0eb0c0f41ea554032633a6903ee27aaf2f7d3f7aa6dfba8f460dc66f924086.jpg" />    
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/8-8f8681eed1f992d82024a808d32b4b9ce274c90e6ad7c7d70a3ebe8199942f0f.jpg" />
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/10-3d64ee03c79ccfea99fef2552e88edab763129a2506d081f12fc32c8ee8a3f5e.jpg" />
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/9-4c0eb0c0f41ea554032633a6903ee27aaf2f7d3f7aa6dfba8f460dc66f924086.jpg" />    
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/8-8f8681eed1f992d82024a808d32b4b9ce274c90e6ad7c7d70a3ebe8199942f0f.jpg" />
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/10-3d64ee03c79ccfea99fef2552e88edab763129a2506d081f12fc32c8ee8a3f5e.jpg" />
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/9-4c0eb0c0f41ea554032633a6903ee27aaf2f7d3f7aa6dfba8f460dc66f924086.jpg" />    
                            </div>
                            <div class="photo">
                                <img alt="" src="https://calblueprint.org/assets/about/8-8f8681eed1f992d82024a808d32b4b9ce274c90e6ad7c7d70a3ebe8199942f0f.jpg" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="596" viewBox="0 0 1440 596" fill="none" className="memberSplashWave">
            <path d="M765.968 439.5C660.541 528.5 463.178 538 0 596H1440V0C1391.2 57.8333 1278.61 183.1 1218.65 221.5C1143.71 269.5 1055.27 207.5 949.84 272.5C844.414 337.5 871.395 350.5 765.968 439.5Z" fill="#F0FCFE" />
            </svg>
            {showModal ? <Modal toggleShow={handleClick} person={modalInfo}></Modal> : null}
            <section className="memberGallery">
                <h4 className='description'>Click on our members to learn more and set up a time to coffee chat!</h4>
                <h4 className='description'>Please limit to 3 coffee chats.</h4>
                <section className= "showOnMobile tapQueue">
                    <section className= "abiTest">
                        <h4 className= "tapOn"> Tap on a member's image for a surprise </h4>
                    </section>
                </section>
                <section className="container">
                    <h2>Executive Board</h2>
                    <div>{execList}</div>
                    <h2>Members</h2>
                    <div>{pmList}</div>
                    <div>{memberList}</div>
                </section>
            </section>
            <section className="advisor">
                <section className="grid container">
                    <div>
                        <img src={require('./img/azb.jpg')} alt="Alex Budak" />
                    </div>
                    <div className="verticallyCenter">
                        <h2>Faculty Advisor</h2>
                        <p>Professor Alex Budak is a lecturer at Berkeley 
                        Haas specializing in leadership, change, and social entrepreneurship. He 
                        co-founded and now advises the social enterprise <a href="https://startsomegood.com/" target="_blank">startsomegood.com</a> and is 
                        the creator and instructor of UC Berkeley's "Becoming a Changemaker" course. 
                        Professor Budak is also a member of the World Economic Forum's Expert Network 
                        for Social Innovation and serves as Executive Director of the Berkeley Haas 
                        Global Access Program.</p>
                        <span>
                            <Button
                                link="https://alexbudak.com/about"
                                buttonText="Learn more"
                                external
                            />
                        </span>
                    </div>
                </section>
            </section>
            <section className="carousel hideOnMobile">
                <section className="container">
                    <div className="carouselView">
                        <Carousel>
                            <img src={photo1} alt="" />
                            <img src={photo2} alt="" />
                            <img src={photo3} alt="" />
                        </Carousel>
                    </div>
                </section>
            </section>
            <svg className="invertedWave hideOnMobile" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
                <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#ffffff"/>
            </svg>
            <section className="alumniSection">
                <section className="grid container">
                    <div>
                        <img src={require('./img/alumni.jpg')} alt="NIB alumni" />
                    </div>
                    <div className="verticallyCenter">
                        <h2>Alumni</h2>
                        <p>After their time in Net Impact Berkeley, our alumni have gone on to make their impacts in a wide 
                        array of career paths, from consulting to software engineering to finance to grad school and more.</p>
                    </div>
                </section>
                <section className="container">
                    <h2>Where Our Alumni Are</h2>
                    <div className="company-logos">
                        {AlumniCompanies.map((company, i) =>
                            <AlumniCompany key={i} name={company.name} href={company.href} fileName={company.fileName} />)}
                    </div>
                </section>
            </section>
            <CallToAction />
        </section>
    );
}

export default Members;
