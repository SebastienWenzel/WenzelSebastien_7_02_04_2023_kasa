import { useState, useEffect  } from 'react';
import {  useParams, Navigate } from 'react-router-dom';
import Logement from '@/data/Logement'
import Slider from '@/components/slider/Slider';
import Collapse from '@/components/collapse/Collapse';
import Rating from '@/components/rating/Rating';

const Accomodation = () => {

    // Déclare un tableau image slider
    const [imageSlider, setImageSlider] = useState([]);

    // Défini idAccomodation avec l'id située dans l'url
    const idLogement = useParams('id').id;

    // Défini dataLogement en trouvant la donnée id du tableau data égale celle située dans l'url
    const dataLogement = Logement.filter(data => data.id ===  idLogement);
    //Défini la liste d'images contenues dans picture de l'entrée du tableau avec pour id celle de l'url    
    useEffect(() => {
        const dataLogement = Logement.filter(data => data.id === idLogement);
        if (dataLogement.length > 0) {
            setImageSlider(dataLogement[0].pictures);
        }
    }, [idLogement]);
    //redirection
    if (dataLogement.length ===  0) {
        return <Navigate to="/404"/>;
    }

    const name = dataLogement[0].host.name.split(' ');
    const rating = dataLogement[0].rating;
    const description  = dataLogement[0].description;
	const equipments = dataLogement[0].equipments;
    return (
        <div className="mainHome">
            <Slider imageSlider={imageSlider}/>
            <main className="accomodation">
                <div className="accomodation__content">
                    <div className="accomodation__content--infos">
                        <h1>{dataLogement[0].title}</h1>
                        <p>{dataLogement[0].location}</p>
                        <div>
                            <span>{dataLogement[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}</span>
                        </div>
                    </div>
                    <div className="accomodation__content--host">
                        <div>
                            <div className="accomodation__content--host-name">
                                <span>{name[0]}</span>
                                <span>{name[1]}</span>
                            </div>
                            <img src={dataLogement[0].host.picture} alt='host of accomodation' />
                        </div>
                        <Rating rating={rating}/>
                    </div>
                </div>
                <div className="accomodation__collapse">
                    <div className="accomodation__collapse__item">
                        <Collapse title={'Description'} content={description} />
                    </div>
                    <div className="accomodation__collapse__item">
                        <Collapse title={'Équipements'} content={equipments}/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Accomodation;
