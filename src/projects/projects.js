import React, {useEffect} from 'react';

import CallToAction from '../components/callToAction';
import ProjectType from '../components/ProjectType';
import ProjectBreakdown from './projectBreakdown';

import ProjectHeroImage from './img/projectsHero2.png';
import ClientSpectrumNew from './img/ClientSpectrum.png';
import projectTypeInfo from './data/ProjectTypesText';
import clients from './data/clients';
import clientBreakdownsInfo from './data/clientBreakdowns';

import ClientImage from './clientImage';


import wb from './img/clients/wb.png';
import salesforce from './img/clients/salesforce.png';
import bestbuy from './img/clients/bestbuy.png';
import amazon from './img/clients/amazon.png';
import kaiser from './img/clients/kaiser.png';
import clif from './img/clients/clif.png';
import sce from './img/clients/SCE.png';
import heifer from './img/clients/heifer.png';
import reformation from './img/clients/reformation.png';
import lls from './img/clients/lls.png';
import subject from './img/clients/subject.png';
import bmgf from './img/clients/bmgf.png';
import goodwill from './img/clients/goodwill.png';

import greyArrow from './img/grey-arrow.png';

import Modal from '@mui/material/Modal';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './projects.scss';


const Projects = () => {
    const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const [breakdownType, setBreakdownType] = React.useState(0);

const openModalHandler = (type) => {
    console.log("this is the type", type)
    setBreakdownType(type);
    handleOpen();
}
// profit, mission, nonprofit

    let projectTypes = projectTypeInfo.map((project) => {
        return <ProjectType {...project} key={project.title} />
    });

    let clientImages = clients.map((client) => {
        return <ClientImage {...client} key={client.link} />
    });

    let clientImagesMobile = clientImages.slice(0, 12);

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


    document.title = 'NIB | Projects';
    return (
        <section className="projectsPage" id="projectsPageEaster">
            <section className="hero container">
                <div className="left">
                    <h3>PROJECTS</h3>
                    <h1>Making an Impact <br /> With Our Clients</h1>
                    <p>Each semester, our teams help companies, social enterprises, and non-profits form strategies to solve social and environmental problems. <br />
                    <br />
                    We take a multi-disciplinary approach to working on projects across a wide range of industries and impact areas.</p>
                </div>
                <div className="right heroImage verticallyCenter">
                    <img src={ProjectHeroImage} alt="NIB members collage" />
                </div>
            </section>
            <svg className="wave" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
                <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" />
            </svg>
            <section className="projectTypesSection">
                <section className="container">
                    <h1>Our Solutions</h1>
                    <p>For over a decade, we’ve developed and expanded our consulting capabilities to support clients in many ways, some of which include:</p>
                    <div className="flex projectTypes">
                        {projectTypes}
                    </div>
                </section>
            </section>
            <div className="waveAnchor">
                <div className="backgroundWaves">
                <svg className="thickblue" xmlns="http://www.w3.org/2000/svg" width="1440" height="146" viewBox="0 0 1440 146" fill="none">
                    <path d="M-1 2L79 7.3C159 13 319 23 479 50C639 77 799 119 959 135.3C1119 151 1279 141 1359 135.3L1439 130" stroke="#A9EAFF" stroke-width="3" stroke-linejoin="round" className="wave-path" />
                </svg>
                <svg className="darkblue" xmlns="http://www.w3.org/2000/svg" width="1440" height="135" viewBox="0 0 1440 135" fill="none">
                <path d="M0 34L80 55.3C160 77 320 119 480 130C640 141 800 119 960 92.7C1120 66 1280 34 1360 18L1440 2" stroke="#1B67B1" stroke-width="4" className="wave-path" />
                </svg>

                <svg className="thinblue" xmlns="http://www.w3.org/2000/svg" width="1440" height="154" viewBox="0 0 1440 154" fill="none">
                <path d="M-1 1L79 6.3C159 12 319 22 479 54.3C639 86 799 140 959 150.3C1119 161 1279 129 1359 113L1439 97" stroke="#D4FAFF" stroke-width="2" stroke-linejoin="round"
                className="wave-path"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="11918" height="296" viewBox="0 0 11918 296" fill="none" className="thickblue2">
                <path d="M1 193.217L199.6 165.193C398.2 137.169 795.4 81.1201 1192.6 62.3789C1589.8 44.3383 1987 61.8534 2384.2 109.144C2781.4 156.435 3178.6 229.999 3575.8 268.007C3973 305.314 4370.2 305.314 4767.4 249.266C5164.6 193.217 5561.8 81.1201 5959 43.8128C6356.2 5.80486 6753.4 44.3382 7150.6 71.8371C7547.8 100.387 7945 117.902 8342.2 109.144C8739.4 100.387 9136.6 61.8534 9533.8 34.3546C9931 5.80487 10328.2 -11.7103 10725.4 15.7885C11122.6 44.3382 11519.8 117.902 11718.4 155.91L11917 193.217" stroke="#1B67B1" stroke-width="3" className="wave-path" />
                </svg>

            
                </div>
            </div>
            <section className="container projectSpectrumSection">
                <h1>Our Clients</h1>
                
                <div className="clientTypes">
                    <div className="clientTypeBox" onClick={() => openModalHandler(0)}>
                        <h2><b>For-profit</b> companies</h2>
                        <div className="clientLogos">
                            <img src={salesforce} />
                            <img src={bestbuy} />
                            <img src={amazon} />
                            <img src={kaiser} />
                        </div>
                        <p>Learn more about our work <span className="arrow"><img src={greyArrow}></img></span></p>
                    </div>
                    <div className="clientTypeBox" onClick={() => openModalHandler(1)}>
                        <h2><b>Mission-driven</b> companies</h2>
                        <div className="clientLogos">
                            <img src={clif} />
                            <img src={sce} />
                            <img src={heifer} />
                            <img src={reformation} />
                        </div>
                        <p>Learn more about our work <span className="arrow"><img src={greyArrow}></img></span></p>
                    </div>
                    <div className="clientTypeBox" onClick={() => openModalHandler(2)}>
                        <h2><b>Nonprofit</b> organizations</h2>
                        <div className="clientLogos">
                            <img src={goodwill} />
                            <img src={bmgf} />
                            <img src={lls} />
                            <img src={wb} />
                        </div>
                        <p>Learn more about our work <span className="arrow"><img src={greyArrow}></img></span></p>
                    </div>
                </div>

                <p>We work with organizations of all kinds that are interested in contributing to a better, more sustainable world.
                Whether it's for-profit corporations that allow us to deep dive into
                one component of their programs, mission-driven corporations that continuously strive for solutions beyond the
                baseline of "good enough", or smaller social enterprises and nonprofits that give us the opportunity to touch
                multiple aspects, we work with them all. </p>
                <div className="clientsSection hideOnMobile">
                    {clientImages}
                </div>
                <div className="clientsSection showOnMobile">
                    {clientImagesMobile}
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <ProjectBreakdown 
                        breakdownType={breakdownType}
                    />
                </Modal>
            </section>
            <CallToAction />
        </section>
    );
}


export default Projects;
