import './members.scss';
import Member from './member.js';
import CallToAction from '../components/callToAction';
import Carousel from './carousel';
import "./flickity.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from '../components/button';
import React, {useState} from 'react';

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

    return (
        <section className="membersPage">
            <section className="membersHero">
                <section className="container">
                    <img src={imageLeft} alt="Collage of individual NIB members on Zoom" />
                    <h1>Meet Us</h1>
                    <img src={imageRight} alt="Collage of individual NIB members on Zoom" />
                </section>
            </section>
            <svg className="invertedWave showOnMobile" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
                <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" />
            </svg>
            <svg width="600" className="splashWaveLeft hideOnMobile" viewBox="0 0 600 569" xmlns="http://www.w3.org/2000/svg">
                <path d="M229.5 22.5C170.5 2 0 0 0 0V562.5C0 562.5 99 575.004 132.5 562.5C166 549.996 186 520 258.5 483C331 446 407 521.5 493.5 515.5C580 509.5 638.5 451 567.5 362C496.5 273 302.5 323.5 272.5 260.5C242.5 197.5 334.5 207.5 338 143C341.5 78.5 288.5 43 229.5 22.5Z" />
            </svg>
            <svg width="599" className="splashWaveRight hideOnMobile" viewBox="0 0 599 569" xmlns="http://www.w3.org/2000/svg">
                <path d="M369.721 545.557C428.721 566.057 599.221 568.057 599.221 568.057V5.55713C599.221 5.55713 500.221 -6.94641 466.721 5.55713C433.221 18.0607 413.221 48.0571 340.721 85.0571C268.221 122.057 192.221 46.5571 105.721 52.5571C19.2207 58.5571 -39.2793 117.057 31.7207 206.057C102.721 295.057 296.721 244.557 326.721 307.557C356.721 370.557 264.721 360.557 261.221 425.057C257.721 489.557 310.721 525.057 369.721 545.557Z" />
            </svg>
            <svg className="splashWave wave hideOnMobile" viewBox="0 0 1440 749" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M713.744 408.887C546.069 469.017 -2 454 -2 454V748.5H1440V0C1282.84 210.195 1071.62 83.1369 975.016 157.385C878.415 231.633 881.418 348.757 713.744 408.887Z" />
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
