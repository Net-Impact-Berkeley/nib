import './member.scss';
import linkedInImage from '../img/linkedin.png';

const Member = ({isExec, name, image, sillyImage, title, linkedin}) => {
  return (
    <div className={isExec ? "memberProfile execProfile" : "memberProfile"}>
      <img src={image} className="memberImage" alt={name} />
      <img src={sillyImage} className="memberSillyImage" alt={name} />
      <div className="name">
        <h4>{name}</h4>
        <p>{title}</p>
        <p><a href={linkedin} target="_blank" rel="noopener noreferrer"><img src={linkedInImage} className="icon" alt="LinkedIn icon" /></a></p>
      </div>
    </div>
  );
}

export default Member;
