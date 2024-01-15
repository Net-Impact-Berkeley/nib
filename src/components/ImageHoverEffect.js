import React, { useRef, useState } from 'react';

const ImageHoverEffect = (props) => {
  const [bounds, setBounds] = useState(null);
  const cardRef = useRef(null);

  const rotateToMouse = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };
    const distance = Math.sqrt(center.x**2 + center.y**2);

    cardRef.current.style.transform = `
      scale3d(1.04, 1.04, 1.04)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 1}deg
      )
    `;

    cardRef.current.querySelector('.glow').style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width/2}px
        ${center.y * 2 + bounds.height/2}px,
        #ffffff55,
        #0000000f
      )
    `;
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      setBounds(cardRef.current.getBoundingClientRect());
      document.addEventListener('mousemove', rotateToMouse);
    }
  };

  const handleMouseLeave = () => {
    document.removeEventListener('mousemove', rotateToMouse);
    if (cardRef.current) {
      cardRef.current.style.transform = '';
      cardRef.current.querySelector('.glow').style.backgroundImage = '';
    }
  };

  return (
    <div ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {props.image}
      <div className="glow"></div>
    </div>
  );
};

export default ImageHoverEffect;
