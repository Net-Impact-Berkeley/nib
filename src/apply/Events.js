import React from 'react';
import Button from '../components/button';
import '../css/Apply.scss';
import TimelineItem from '../components/TimelineItem';
import Timeline from '../data/Timeline';
import prepareTypeInfo from '../data/prepareText';
import ProjectType from '../components/ProjectType';

import blob1 from '../img/apply/shapes/photo1.png';
import blob2 from '../img/apply/shapes/photo2.png';
import zoom from '../img/apply/zoom.png';


const Apply = () => {
    document.title = 'NIB | Apply';
    let timelineInfo = Timeline.map((timelineItem) => (
        <TimelineItem
            date={timelineItem.date}
            title={timelineItem.title}
            description={timelineItem.description}
            link={timelineItem.link}
            buttonTitle={timelineItem.buttonTitle}
            buttonLink={timelineItem.buttonLink}
            key={timelineItem.title}
        />
    ));

    let preparationTypes = prepareTypeInfo.map((project) => {
        return <ProjectType
            img={project.img}
            alt={project.alt}
            title={project.title}
            description={project.description}
            key={project.title}
        />
    })

    return (
        <section className="applyPage">
            <section className="container timelineSection">
                <h1>Timeline</h1>
                <div className="timelinePhotos">
                    <img src={require("../img/apply/timelinePhotos/photo1.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo2.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo3.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo4.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo5.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo6.jpg")} alt="" />
                </div>
                <div className="timelineContainer">
                    <ul className="timeline">
                        {timelineInfo}
                    </ul>
                </div>
            </section>

            <section>
                <svg viewBox="0 0 1440 239" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
                    <path d="M692.426 116.5C486.926 116.5 -2.07446 238.5 -2.07446 238.5H1440.93V0C1440.93 0 1408.43 183.5 1193.93 184.5C979.426 185.5 897.926 116.5 692.426 116.5Z" fill="#F0FCFE"/>
                </svg>
                <div className="callToAction">
                    <div>
                        <h1>Ready to Join?</h1>
                        <Button
                            link="https://airtable.com/shrDaa4bxNXoRB7gQ"
                            buttonText="Interest Form"
                            external
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Apply;
