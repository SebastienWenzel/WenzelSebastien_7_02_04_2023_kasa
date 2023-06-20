import { useState } from 'react';
import arrow from '../../assets/img/arrow.png';


function Collapse({title, content}) {
    //Defini la valeur de l'état à false
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse__title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_down' :'arrow arrow_up' } 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>

                <div className={toggle ? 'collapse__content' : 'collapse__content--hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}

export default Collapse;