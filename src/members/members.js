import './members.scss';
import Member from './member.js';
import CallToAction from '../components/callToAction';
import Carousel from './carousel';
import "./flickity.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from '../components/button';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import AlumniCompanies from './data/alumniCompanies';
import memberInfo from './data/memberInfo';
import imageList from './data/carousel';

import imageLeft from './img/splash-left.png';
import imageRight from './img/splash-right.png';
import photo1 from './img/carousel/photo1.jpg';


import p1 from './img/splash-carousel/photo1.jpg';


import photo2 from './img/carousel/photo2.jpg';
import photo3 from './img/carousel/photo3.jpg';
import linkedInImage from '../img/linkedin.png';
import calendlyImage from '../img/calendly.png';



// Create a context to manage the imagesLoaded state
const ImagesLoadedContext = createContext();

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

    useEffect(() => {
        const blobs = document.querySelectorAll('.membersHero');
    
        blobs.forEach((blob, index) => {
          const delay = index * 50;
    
          setTimeout(() => {
            blob.style.opacity = 1;
          }, delay);
        });
      }, []);

    let execList = memberInfo.execList.map((person) => <Member person={person} key={person.name} handleClick={handleClick}/>);
    let pmList = memberInfo.pmList.map((person) => <Member person={person} key={person.name} handleClick={handleClick}/>);
    let memberList = memberInfo.memberList.map((person) => <Member person={person} key={person.name} handleClick={handleClick}/>);

    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // useEffect(() => {
    //     const handleImageLoad = () => {
    //       // Check if all images have loaded
    //       const allImages = document.querySelectorAll('.photo img');
    //       const loadedImages = Array.from(allImages).every(img => img.complete);
    
    //       if (loadedImages) {
    //         // All images have loaded, enable scrolling
    //         setImagesLoaded(true);
    //       }
    //     };
    
    //     // Use window.onload for reliable image loading detection
    //     window.onload = handleImageLoad;
    
    //     return () => {
    //       window.onload = null; // Remove the event listener
    //     };
    //   }, []);
  
    useEffect(() => {
        // if(imagesLoaded) {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
          
                // Apply the transform to move the carousels to the left based on the scroll position
                const carousel1 = containerRef1.current;
                const carousel2 = containerRef2.current;
        
                // Adjust the initial position and direction for each carousel
                carousel1.style.transform = `translateX(calc(-${scrollPosition}px - 200px))`; // Adjust as needed
        
                if (window.innerWidth < 768) {
                    carousel2.style.transform = `translateX(calc(-${Math.round(scrollPosition * 1.5)}px - 200px))`
                }
                else if(window.innerWidth > 1700) {
                    console.log("window.innerWidth", window.innerWidth)
                    carousel2.style.transform = `translateX(calc(-50% + ${scrollPosition}px + 200px))`; 
                }
                else {
                    carousel2.style.transform = `translateX(calc(-100% + ${scrollPosition}px + 200px))`;  // Adjust as needed
                }
                
              };


       // Set the initial position of the second carousel on page load
       const carousel2 = containerRef2.current;

       if (window.innerWidth < 768) {
           carousel2.style.transform = `translateX(-200px)`
       }
       else if(window.innerWidth > 1700) {
           carousel2.style.transform = `translateX(calc(-50% + 200px))`; 
       }
       else {
           carousel2.style.transform = `translateX(calc(-100% + 200px))`;
       }

   //    carousel2.style.transform = `translateX(calc(-100% + 200px))`;  // Adjust as needed


                
      // Apply scroll handling only for non-mobile devices
    // if (window.innerWidth > 768) {
        window.addEventListener('scroll', handleScroll);
        // }
        // else {
        //     // carousel1.style.transform = `translateX(0px))`;
        //     // carousel2.style.transform = `translateX(0px))`;
        // }
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        // }
      

    }, []);

    const photos1 = [];

    for (let i = 1; i <= 12; i++) {
      const photoImport = require(`./img/splash-carousel/photo${i}.jpg`)
      console.log("photo", photoImport)
      photos1.push(
        <div className="photo" key={`photo${i}`}>
          <img alt={`photo${i}`} src={photoImport} />
        </div>
      );
    }

    const photos2 = [];

    for (let i = 13; i <= 27; i++) {
      const photoImport = require(`./img/splash-carousel/photo${i}.jpg`);
      photos2.push(
        <div className="photo" key={`photo${i}`}>
          <img alt={`photo${i}`} src={photoImport} />
        </div>
      );
    }

    return (
        <section className="membersPage" 
        >
            <section className="membersHero">
                <section className="">
                        <h1>Meet Our Members</h1>
                    <ImagesLoadedContext.Provider value={imagesLoaded}>
                    <div className="carousel-wrapper">
                        <div className="photo-carousel"  id="carousel1" ref={containerRef1}>
                            {photos1}
                        </div>
                        <div className="photo-carousel" id="carousel2" ref={containerRef2}>
                            {photos2}
                        </div>
                    </div>
                    </ImagesLoadedContext.Provider>
                </section>
            </section>
            <svg class="memberSplashWave hideOnMobile wave" viewBox="0 0 1440 749" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M713.744 408.887C546.069 469.017 -2 454 -2 454V748.5H1440V0C1282.84 210.195 1071.62 83.1369 975.016 157.385C878.415 231.633 881.418 348.757 713.744 408.887Z" fill="#F0FCFE">
            </path>
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

export const useImagesLoaded = () => {
    return useContext(ImagesLoadedContext);
  };

export default Members;
