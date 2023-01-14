import './member.scss';
import linkedInImage from '../img/linkedin.png';

const Member = ({person, isExec, handleClick}) => {
  const {name, image, sillyImage, title, linkedin} = person;

  // const memberData = {
  //   name: name,
  //   image: image,
  //   sillyImage: sillyImage,
  //   title: title,
  //   linkedin: linkedin,
  //   bio: "insert bio param",
  //   calendly: "insert calendly param"
  // }
  
  return (
    <div onClick={() => {handleClick(person)}} className={isExec ? "memberProfile execProfile" : "memberProfile"}>
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
