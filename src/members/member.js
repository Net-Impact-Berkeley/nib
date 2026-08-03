import { useState } from 'react';
import './member.scss';
import linkedInImage from '../img/linkedin.png';
import calendlyImage from '../img/calendly.png';

const Member = ({person, handleClick}) => {
  const {name, image, sillyImage, title, linkedin, calendly, isDM} = person;
  // The hover image is only ever visible on hover, so fetching it up front doubles
  // the page's image requests for something most visitors never see. Mount it on
  // first hover and keep it mounted so the fade only pays the cost once.
  const [hovered, setHovered] = useState(false);

  return (
    <div className={"memberProfile"} onMouseEnter={() => setHovered(true)}>
      <div onClick={() => {handleClick(person)}} className="clickable">
        <img src={image} className="memberImage" alt={name} loading="lazy" decoding="async" />
        {hovered && <img src={sillyImage} className="memberSillyImage" alt={name} decoding="async" />}
        <div className="name">
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
      <div className={"links name"}>
              {!isDM ? <p><a href={calendly} target="_blank" rel="noopener noreferrer"><img src={calendlyImage} className="icon" alt="Calendly icon" /></a></p> : null}
              <p><a href={linkedin} target="_blank" rel="noopener noreferrer"><img src={linkedInImage} className="icon" alt="LinkedIn icon" /></a></p>
          </div>
    </div>
  );
}

export default Member;
