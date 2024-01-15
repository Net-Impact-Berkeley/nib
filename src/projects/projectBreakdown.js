import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import bestbuy from './img/clients/bestbuy.png';
import clientBreakdownsInfo from './data/clientBreakdowns';
import nibLogo from './img/niblogo.png';


function ProjectBreakdown(props) {
    let breakdown =  clientBreakdownsInfo[props.breakdownType];
    let title = breakdown.title

    const createMarkup = (text) => {
        return { __html: text };
      };


    let projects = breakdown.projects.map((project) => {
        console.log(project)
        if(Object.keys(project).length === 0) {
            return <></>;
        }

        const formattedAboutClient = project.aboutClient.replace(/\n/g, '<br /><br />');
        const formattedOurWork = project.ourWork.replace(/\n/g, '<br /><br />');
        const formattedImpact = project.impact.replace(/\n/g, '<br /><br />');

        return (
            <Accordion key={props.breakdownType}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                            <div className="projectHeader">
                                <img src={project.projectLogo} alt={`Logo for ${project.projectName}`}  />
                                <h2>{project.projectName}</h2>
                            </div>
                           
                    </AccordionSummary>
                    <AccordionDetails>
                    <div className="projectDescription">
                            <h3>ABOUT THE CLIENT</h3>
                            <p dangerouslySetInnerHTML={createMarkup(formattedAboutClient)} />
                            <h3>OUR WORK</h3>
                            <p dangerouslySetInnerHTML={createMarkup(formattedOurWork)} />
                            <h3>IMPACT</h3>
                            <p dangerouslySetInnerHTML={createMarkup(formattedImpact)} />
                    </div>
                    </AccordionDetails>
                </Accordion>
        );
       
    });


    return (
        <div className="breakdownModal" key={props.breakdownType}>
                        <div className="topSection">
                            <div className="title">
                                <h1>{title}</h1>
                                <p>Click on a client to learn about the project</p>
                            </div>
                            <img src={nibLogo} />
                        </div>
                        <div className="breakdownCompanies">
                            {projects}
                        </div>
        </div>
    );
}

export default ProjectBreakdown;
