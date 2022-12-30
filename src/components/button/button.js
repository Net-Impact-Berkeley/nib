import './button.scss';
import { Link } from "react-router-dom";

const Button = ({link, buttonText, external}) => {
  if(external) {
    return ( 
      <a href={link} className="button" target="_blank" rel="noopener noreferrer">
          {buttonText}
      </a>
    );
  }
  else {
    return (
      <Link to={link} className="button">
        {buttonText}
      </Link>
  );
  }
}

export default Button;