import Button from '../components/button';
import './apply.scss';
import TimelineItem from './TimelineItem';
import Timeline from './data/timeline';
import prepareTypeInfo from './data/prepareText';
import ProjectType from '../components/ProjectType';
import CallToAction from 'components/callToAction';


import blob1 from './img/shapes/photo1.png';
import blob2 from './img/shapes/photo2.png';
import zoom from './img/zoom.png';


import chat from './img/atAGlance/chat.png';
import doc from './img/atAGlance/doc.png';
import network from './img/atAGlance/network.png';
import {ReactComponent as Arrow} from './img/atAGlance/arrow.svg';
import {ReactComponent as DownArrow} from './img/atAGlance/down.svg';


const Apply = () => {
   const virtualTablingLink = "https://berkeley.zoom.us/j/95663292195";
   const coffeeChatSignUp = "https://airtable.com/shr5tNafnTL2VsY33";
   const interestForm = "https://airtable.com/appZJCBfhJN79Dc23/shryCqmih6Nbw3f1Q";
   const application = "https://airtable.com/appZJCBfhJN79Dc23/shrs73X85oN1iDBX2";
   const caseCoachingSignUp = "https://berkeley.zoom.us/meeting/register/tJEkdu-urjspGtA68NPJLepuKa-CBfMsTvm3";
   const infosession1 = "https://berkeley.zoom.us/j/99404517995?pwd=Q1ljRTlwb3RBdG9TUFpUTzY0L0UvUT09";
   const infosession2 = "https://berkeley.zoom.us/j/96961413275?pwd=TTJzVGhteFdVa2QzSjlDZk82MFlPZz09";
   const caseCoachingSession = "TBD";


   document.title = 'NIB | Apply';


   return (
   <section className="applyPage">
       <section className="hero">
           <div className="container">
               <div className="left">
                   <h3>APPLY</h3>
                   <h1>Join our Family</h1>
                   {/* <p>Interested in applying to Net Impact? Our application period is over for the semester, but feel free to look around to see what applying has looked like in the past!</p> */}
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
           </div>
           <div className="right hideOnMobile">
               <svg className="bigBlob" viewBox="0 0 550 572" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M502.554 212.204C541.576 245.066 628.38 256.67 643.225 281.052C658.284 305.025 600.382 341.773 581.058 406.475C561.127 471.38 579.347 565.055 550.932 563.71C522.517 562.365 449.319 466.203 387.941 449.188C326.957 432.378 277.186 494.918 227.285 513.511C177.384 532.103 124.86 507.768 77.2651 467.309C29.8841 426.442 -12.5676 369.45 11.5662 323.365C35.0923 277.482 125.812 242.302 167.751 190.978C209.509 139.04 202.093 70.7509 226.505 34.6806C250.523 -1.59575 306.762 -5.44739 354.672 6.60652C402.582 18.6604 442.771 46.4181 457.91 86.5371C473.443 126.862 463.713 179.956 502.554 212.204Z" />
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
                       <p>Wednesday, 8/23 - Thursday, 8/31</p>
                       <ul>
                           <li>From August 23 - 31, anytime 8am-4pm, come say hi on at our table on Sproul or the Glade!</li>
                           {/* <li>Sign up for a 1:1 with a NIB member sometime January 17th - 26th.</li> */}
                           <li>Fill out our <a className="underline-magical" href="https://airtable.com/appZJCBfhJN79Dc23/shryCqmih6Nbw3f1Q" target="_blank" rel="noopener noreferrer">interest form</a>!</li>
                       </ul>
                   </div>
                   <div className="item">
                       <img src={network} alt="chat icon" />
                       <h4>Infosessions</h4>
                       <p>Tuesday, 8/29 - Thursday, 8/31</p>
                       <ul>
                           <li>Tuesday: Infosession #1</li>
                           <li>Wednesday: Infosession #2 + Case Workshop</li>
                           <li>Thursday: Case coaching session</li>
                       </ul>
                   </div>
                   <div className="item">
                       <img src={doc} alt="chat icon" />
                       <h4>Applications and Interviews</h4>
                       <p>Friday 9/1 - Tuesday 9/5</p>
                       <ul>
                           <li>Applications are due at 1PM on September 1st.</li>
                           Apply <a className="underline-magical" href="https://airtable.com/appZJCBfhJN79Dc23/shrs73X85oN1iDBX2" target="_blank" rel="noopener noreferrer"> here. </a>
                           <li>Check out our interview FAQ and tips <a className="underline-magical" href="/nib-app-checklist.pdf" target="_blank" rel="noopener noreferrer"> here! </a></li>
                       </ul>
                   </div>
               </div>
           </section>
           <section className="container">
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
               <img src={require("./img/timelinePhotos/photo1.jpg")} alt="" />
               {/* <img src={require("./img/timelinePhotos/photo2.jpg")} alt="" /> */}
               <img src={require("./img/timelinePhotos/photo3.jpg")} alt="" />
               <img src={require("./img/timelinePhotos/photo4.jpg")} alt="" />
               <img src={require("./img/timelinePhotos/photo5.jpg")} alt="" />
               <img src={require("./img/timelinePhotos/photo6.jpg")} alt="" />
               <img src={require("./img/timelinePhotos/photo9.JPG")} alt="" />
               <img src={require("./img/timelinePhotos/photo8.jpg")} alt="" />
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

