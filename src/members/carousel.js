import Flickity from "react-flickity-component";

import photo1 from './img/carousel/photo1.jpg';
import photo2 from './img/carousel/photo2.jpg';
import photo3 from './img/carousel/photo3.jpg';
import photo4 from './img/carousel/photo4.jpg';
import photo5 from './img/carousel/photo5.jpg';

const flickityOptions = {
  initialIndex: 2,
    wrapAround: true,
    fade: true
}

const Carousel = () => {
  return (
      <Flickity
        options={flickityOptions}
      
      >
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" />
        <img src={photo4} alt="" />
        <img src={photo5} alt="" />
      </Flickity>

  )
    
}

export default Carousel;