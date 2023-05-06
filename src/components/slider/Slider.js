import { useState } from "react";
import arrowL from '@/assets/img/arrowleft.png'
import arrowR from '@/assets/img/arrowright.png'


const Slider = ({imageSlider}) => {
    // Déclare une nouvelle variable d'état
  const [iSlider, setImageSlider] = useState(0);
  // La longueur d'un tableau 
  const length = imageSlider.length;

  //gérer le clic sur les arrows
  const nextSlide = () => {
    setImageSlider(iSlider === length - 1 ? 0 : iSlider + 1);
  };

  const prevSlide = () => {
    setImageSlider(iSlider === 0 ? length - 1 : iSlider - 1);
  };
  
    return ( 
      <section className="carousel" style={{backgroundImage : `url(${imageSlider[iSlider]})`}}>
        {imageSlider.length > 1 && 
          <>
            {/*Condition avant la balise Masque le bouton de contrôle  */}
            <img className="arrow_L" src={arrowL} onClick={prevSlide} alt="show-content" />
            <img className="arrow_R" src={arrowR} onClick={nextSlide} alt="show-content" />
            
            {/* COMPTEUR*/}
            <p className='slideCount'>{iSlider + 1} / {imageSlider.length}</p> 
          </>
        } 
      </section>
    );
};

export default Slider;