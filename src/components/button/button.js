import './button.scss';
import arrowBlue from "./bluearrow.png"
import arrowWhite from "./whitearrow.png"

import { Link } from "react-router-dom";

const Button = ({link, buttonText, external, style, arrow}) => {
  
  
  let buttonStyle = "button";

  let arrowRight;

  if(arrow) {
    arrowRight = <img src={arrowWhite} 
    className="arrowRight"
    alt="white arrow right" />
  }

  
  if(style === "light") {
    buttonStyle = "buttonLight";

    if(arrow) {
      arrowRight = <img src={arrowBlue} className="arrowRight" alt="blue arrow right" />
    }
    
  }
  
  if(external) {
    return ( 
      <a href={link} className={buttonStyle} target="_blank" rel="noopener noreferrer">
          {buttonText}
          {arrowRight}
      </a>
    );
  }
  else {
    return (
      <Link to={link} className={buttonStyle}>
        {buttonText}
        {arrowRight}
      </Link>
  );
  }
}

export default Button;