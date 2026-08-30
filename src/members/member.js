import { useState } from 'react';
import './member.scss';
import useQueuedImage from '../utils/useQueuedImage';
import linkedInImage from '../img/linkedin.png';
import calendlyImage from '../img/calendly.webp';

// A touch screen has no hover, so the swap that desktop gets for free has to be
// asked for. Devices that do hover keep the old behaviour exactly: one click
// opens the bio.
const canHover = typeof window !== 'undefined'
  && typeof window.matchMedia === 'function'
  && window.matchMedia('(hover: hover)').matches;

const Member = ({person, handleClick}) => {
  const {name, image, sillyImage, title, linkedin, calendly, isDM} = person;
  // The hover image is only ever visible on hover, so fetching it up front doubles
  // the page's image requests for something most visitors never see. Mount it on
  // first hover and keep it mounted so the fade only pays the cost once.
  const [hovered, setHovered] = useState(false);
  // Touch only: the first tap shows the silly photo, the second opens the bio.
  // Booking is unaffected either way, since the Calendly icon sits outside the
  // clickable area and is its own tap target.
  const [flipped, setFlipped] = useState(false);
  // Queued rather than lazy-loaded: see utils/imageQueue for why the browser's own
  // scheduling overwhelms OCF here.
  const queuedImage = useQueuedImage(image);

  const openOrFlip = () => {
    if (canHover || flipped) {
      // Put the professional photo back as the bio opens, so closing it returns
      // to the card the way it started rather than to the silly one.
      setFlipped(false);
      handleClick(person);
      return;
    }
    setHovered(true);
    setFlipped(true);
  };

  return (
    <div className={"memberProfile"} onMouseEnter={() => setHovered(true)}>
      <div onClick={openOrFlip} className="clickable">
        <img src={queuedImage} className={queuedImage ? "memberImage isLoaded" : "memberImage"} alt={name} decoding="async" />
        {hovered && <img src={sillyImage} className={flipped ? "memberSillyImage isFlipped" : "memberSillyImage"} alt={name} decoding="async" />}
        <div className="name">
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
      <div className={"links name"}>
              {!isDM && calendly ? <p><a href={calendly} target="_blank" rel="noopener noreferrer"><img src={calendlyImage} className="icon" alt="Calendly icon" /></a></p> : null}
              <p><a href={linkedin} target="_blank" rel="noopener noreferrer"><img src={linkedInImage} className="icon" alt="LinkedIn icon" /></a></p>
          </div>
    </div>
  );
}

export default Member;
