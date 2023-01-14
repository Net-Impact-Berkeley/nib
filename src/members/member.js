import './member.scss';
import linkedInImage from '../img/linkedin.png';
import React, {useState} from 'react';

const Member = ({isExec, name, image, sillyImage, title, linkedin}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  }

  const memberData = {
    name: name,
    image: image,
    sillyImage: sillyImage,
    title: title,
    linkedin: linkedin,
    bio: "insert bio param",
    calendly: "insert calendly param"
  }
  
  return (
    <div onClick={handleClick} className={isExec ? "memberProfile execProfile" : "memberProfile"}>
      <img src={image} className="memberImage" alt={name} />
      <img src={sillyImage} className="memberSillyImage" alt={name} />
      <div className="name">
        <h4>{name}</h4>
        <p>{title}</p>
        <Modal show={showModal} memberData={memberData}></Modal>
        <p><a href={linkedin} target="_blank" rel="noopener noreferrer"><img src={linkedInImage} className="icon" alt="LinkedIn icon" /></a></p>
      </div>
    </div>
  );
}

const Modal = ({show, memberData}) => {
  const toggleDisplay = show ? "memberBio show" : "memberBio hide";

  return (
    <div className={toggleDisplay}>
      <h1>{memberData.name}</h1>
    </div>
  );
};

export default Member;
