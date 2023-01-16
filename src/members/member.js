import './member.scss';
import linkedInImage from '../img/linkedin.png';
import calendlyImage from '../img/calendly.png';

const Member = ({person, handleClick}) => {
  const {name, image, sillyImage, title, linkedin, calendly, isDM} = person;
  
  return (
    <div className={"memberProfile"}>
      <div onClick={() => {handleClick(person)}} className="clickable">
        <img src={image} className="memberImage" alt={name} />
        <img src={sillyImage} className="memberSillyImage" alt={name} />
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
