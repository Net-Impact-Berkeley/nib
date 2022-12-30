import React from 'react';
import spectrumInfo from './data/projectDomains';
import Button from '../components/button';
import ProjectDomain from './projectDomain';

const SpectrumSection = () => {
    let row1 = spectrumInfo.slice(0, 3).map((project) => (
        <ProjectDomain
            name={project.name}
            image={project.icon}
            key={project.name}
        />
    ));

    let row2 = spectrumInfo.slice(3, 9).map((project) => (
        <ProjectDomain
            name={project.name}
            image={project.icon}
            key={project.name}
        />
    ));

    let row3left = spectrumInfo.slice(9, 11).map((project) => (
        <ProjectDomain
            name={project.name}
            image={project.icon}
            extendedClass="hideOnMobile"
            key={project.name}
        />
    ));

    let row3right = spectrumInfo.slice(11, 13).map((project) => (
        <ProjectDomain
            name={project.name}
            image={project.icon}
            extendedClass="hideOnMobile"
            key={project.name}
        />
    ));

    let row4 = spectrumInfo.slice(13, 17).map((project) => (
        <ProjectDomain
            name={project.name}
            image={project.icon}
            key={project.name}
        />
    ));

    let mobileRow1 = spectrumInfo.slice(0, 6).map((project) => (
        <img src={project.icon} alt={project.name} key={project.name}/>
    ));

    let mobileRow2 = spectrumInfo.slice(6, 13).map((project) => (
        <img src={project.icon} alt={project.name} key={project.name} />
    ));

    let mobileRow3 = spectrumInfo.slice(13, 20).map((project) => (
        <img src={project.icon} alt={project.name} key={project.name} />
    ));

    return (
        <section className="spectrums">

            {/* MOBILE START */}
            <div className="mobileRow hideOnWeb">{mobileRow1}</div>
            <div className="mobileRow hideOnWeb">{mobileRow2}</div>
            {/* MOBILE END */}

            <div className="row hideOnMobile">{row1}</div>
            <div className="row hideOnMobile">{row2}</div>
            <div className="spectrumText container">
                <h1>Impact Across Many Domains</h1>
                <p>Our members have worked on projects in all kinds of impact areas. We continually seek to engage with new clients operating in different industries.</p>
            </div>
            <div className="row">
                {row3left}
                <Button
                    link="/projects"
                    buttonText="Learn About Our Projects"
                />
                {row3right}
            </div>
            <div className="mobileRow hideOnWeb">{mobileRow3}</div>
            <div className="row hideOnMobile">{row4}</div>
        </section>
    );
}

export default SpectrumSection;