import { useState } from 'react';
import arrow from '@/assets/img/arrow.png';


function Collapse({title, content}) {
    //Definie la valeur de l'état à false à l'objet activated
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse__title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                {/* Expression conditionnelle 
                Si content est un tableau, chaque élément du tableau est affiché avec
                une balise p et une clé unique key en utilisant la méthode map(). Sinon,
                le contenu est simplement affiché sans boucler sur chaque élément.
                */}
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