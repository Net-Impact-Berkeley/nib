import React, {useEffect} from 'react';

import Button from '../components/button';
import './apply.scss';
import TimelineItem from './TimelineItem';
import Timeline from './data/timeline';
import prepareTypeInfo from './data/prepareText';
import ProjectType from '../components/ProjectType';
import CallToAction from 'components/callToAction';


import blob1 from './img/shapes/blobphoto1.png';
import blob2 from './img/shapes/blobphoto2.png';
import zoom from './img/zoom.png';


import chat from './img/atAGlance/chat.png';
import doc from './img/atAGlance/doc.png';
import network from './img/atAGlance/network.png';
import {ReactComponent as Arrow} from './img/atAGlance/arrow.svg';
import {ReactComponent as DownArrow} from './img/atAGlance/down.svg';


const Apply = () => {
   const virtualTablingLink = "https://berkeley.zoom.us/j/95663292195";
   const coffeeChatSignUp = "https://airtable.com/shr5tNafnTL2VsY33";
   const interestForm = "https://airtable.com/appSxxFiFv8wKG96P/shrWZTvjyCgbbMGif";
   const application = "https://airtable.com/appSxxFiFv8wKG96P/pagasA5eZl1Uy0Ca9/form";
   const caseCoachingSignUp = "https://berkeley.zoom.us/meeting/register/tJEkdu-urjspGtA68NPJLepuKa-CBfMsTvm3";
   const infosession1 = "https://berkeley.zoom.us/j/99404517995?pwd=Q1ljRTlwb3RBdG9TUFpUTzY0L0UvUT09";
   const infosession2 = "https://berkeley.zoom.us/j/96961413275?pwd=TTJzVGhteFdVa2QzSjlDZk82MFlPZz09";
   const caseCoachingSession = "TBD";


   document.title = 'NIB | Apply';

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
   <section className="applyPage">
       <section className="hero container">
               <div className="left">
                   <h3>APPLY</h3>
                   <h1>Join our Family</h1>
                   <p>Our application for Spring 2025 is now open! Scroll to learn more about our timeline and events</p>
                   <Button
                       link={interestForm}
                       buttonText="Interest Form"
                       external
                   />
                   <Button
                       link={application}
                       buttonText="Application"
                       external
                   />
               </div>
           <div className="right hideOnMobile">
           <svg xmlns="http://www.w3.org/2000/svg" width="603" height="530" viewBox="0 0 603 530" fill="none" className="bigBlob">
                <path d="M468.196 199.22C504.878 230.111 586.476 241.019 600.431 263.938C614.587 286.475 560.157 321.018 541.992 381.841C523.257 442.853 540.384 530.91 513.673 529.646C486.962 528.381 418.154 437.986 360.457 421.991C303.13 406.19 256.344 464.979 209.435 482.457C162.527 499.934 113.153 477.059 68.4125 439.026C23.873 400.609 -16.0327 347.036 6.65372 303.714C28.7689 260.583 114.048 227.513 153.471 179.267C192.726 130.443 185.755 66.2499 208.702 32.3427C231.28 -1.75803 284.146 -5.37868 329.183 5.95234C374.22 17.2834 411.998 43.3764 426.229 81.0893C440.831 118.996 431.685 168.906 468.196 199.22Z" fill="#A9EAFF"/>
            </svg>


               <img src={blob1} className="hideOnMobile blob1" alt="3 NIB members posing" />
               <img src={blob2} className="blob2" alt="NIB seniors relaxing on a hill" />
           </div>
       </section>
       <svg className="splashWave hideOnMobile" viewBox="0 0 1440 749" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M713.744 408.887C546.069 469.017 -2 454 -2 454V748.5H1440V0C1282.84 210.195 1071.62 83.1369 975.016 157.385C878.415 231.633 881.418 348.757 713.744 408.887Z" />
       </svg>
       <section className="preparationSection">
               <section className="container atAGlance hideOnMobile">
               <h1>Timeline at a Glance</h1>
               <a href="/apply#timelineSection">
                   <p>Full timeline + links below <DownArrow /></p>
               </a>
               <div className="flex">
                   <Arrow />
                   <div className="item">
                       <img src={chat} alt="chat icon" />
                       <h4>Tabling</h4>
                       <p>Tuesday, 1/21 – Thursday, 1/30</p>
                       <ul>
                           <li>From January 21th through January 30th anytime 8am-4pm, come say hi on at our table on Sproul!</li>
                           {/* <li>Sign up for a 1:1 with a NIB member sometime January 17th - 26th.</li> */}
                           <li>Fill out our <a className="underline-magical" href={interestForm} target="_blank" rel="noopener noreferrer">interest form</a>!</li>
                       </ul>
                   </div>
                   <div className="item">
                       <img src={network} alt="chat icon" />
                       <h4>Infosessions</h4>
                       <p>Tuesday, 1/28 - Thursday, 1/30</p>
                       <ul>
                           <li>Tuesday: Infosession #1</li>
                           <li>Wednesday: Infosession #2 + Case Workshop</li>
                           <li>Thursday: Case coaching session</li>
                       </ul>
                   </div>
                   <div className="item">
                       <img src={doc} alt="chat icon" />
                       <h4>Applications and Interviews</h4>
                       <p>Friday 1/31 - Tuesday 2/4</p>
                       <ul>
                           <li>Applications are due at 1PM on January 31st.</li>
                           Apply <a className="underline-magical" href="https://airtable.com/appSxxFiFv8wKG96P/pagasA5eZl1Uy0Ca9/form" target="_blank" rel="noopener noreferrer"> here. </a>
                           <li>Check out our interview FAQ and tips <a className="underline-magical" href="/nib-app-checklist.pdf" target="_blank" rel="noopener noreferrer"> here! </a></li>
                       </ul>
                   </div>
               </div>
           </section>
           <section className="container how">
               <h1>How Should I Prepare?</h1>
               <div className="flex projectTypes">
                   {prepareTypeInfo.map((project) => {
                       return <ProjectType {...project} key={project.title} />;
                   })}
               </div>
               <div className="resources">
                   <h4><b>Recruitment Resources</b></h4>
                   <p>New to consulting? Click through our recruitment resources below to get started</p>
                   <Button
                       link="/nib-app-checklist.pdf"
                       buttonText="Recruiting Tips"
                       external
                   />
                   <Button
                       link="/sample-case.pdf"
                       buttonText="Sample 1st Round Case"
                       external
                   />
                   <Button
                       link="https://www.youtube.com/watch?v=COYgGdxBrso&feature=youtu.be"
                       buttonText="Case Interview Demo"
                       external
                   />
                   <Button
                       link="https://www.netimpactberkeley.org/_files/ugd/7349c5_aed0f4abfbcf4fb48d4b9763d25aa028.pdf"
                       buttonText="Case in Point Guide"
                       external
                   />
                   <Button
                       link="https://www.netimpactberkeley.org/_files/ugd/7349c5_36e1153ac96449fd9e1dce237df545c4.pdf"
                       buttonText="MBB Case Book"
                       external
                   />
               </div>
           </section>
           {/* <div className='caseDemo'>
                <div>
                    <h1>Case Demonstration</h1>
                    <p>Watch this case interview demonstration from our VP of Consulting, Evan Mallah, to see how our interview case process works. </p>
                </div>
                <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> 
           </div> */}
       </section>
       <svg className="endWave" viewBox="0 0 1440 264" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M1440 264V0.0714111H-1C-1 0.0714111 1440 0.0714111 1440 264Z" />
       </svg>


       <section className="container timelineSection" id="timelineSection">
           <h1>Timeline</h1>
           <div className="timelinePhotos">
                <img src={require("./img/timelinePhotos/photo11new.jpg")} alt="" />
               <img src={require("./img/timelinePhotos/photo10new.jpg")} alt="" />
               {/* <img src={require("./img/timelinePhotos/photo2.jpg")} alt="" /> */}
               <img src={require("./img/timelinePhotos/photo3new.JPEG")} alt="" />
               <img src={require("./img/timelinePhotos/photo4new.JPEG")} alt="" />
               <img src={require("./img/timelinePhotos/photo5new.JPEG")} alt="" />
               <img src={require("./img/timelinePhotos/photo6new.jpg")} alt="" />
               <img src={require("./img/timelinePhotos/photo1new.JPEG")} alt="" />
               <img src={require("./img/timelinePhotos/photo8new.jpg")} alt="" />
               {/* <img src={require("./img/timelinePhotos/photo7new.JPEG")} alt="" /> */}
           </div>
           <div className="timelineContainer">
               <ul className="timeline">
                   {Timeline.map((timelineItem) => {
                       return <TimelineItem {...timelineItem} key={timelineItem.title} />;
                   })}
               </ul>
           </div>
       </section>

       <CallToAction />

       {/* <section>
           <svg viewBox="0 0 1440 239" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
               <path d="M692.426 116.5C486.926 116.5 -2.07446 238.5 -2.07446 238.5H1440.93V0C1440.93 0 1408.43 183.5 1193.93 184.5C979.426 185.5 897.926 116.5 692.426 116.5Z" />
           </svg>
           <div className="callToAction">
               <div>
                   <h1>Ready to Join?</h1>
                   <Button
                       link="https://nib.berkeley.edu/apply"
                       buttonText="Interest Form"
                       external
                   />
               </div>
           </div>
       </section> */}
   </section>
   );
}


export default Apply;

