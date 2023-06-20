import Logement from '../../data/Logement';
import AccomodationCard from '../accomodationcard/AccomodationCard';

const AccomodationGallery = () => {
    return (
        <main className='gallery'>
             {Logement.map(data =>  {
                return (
                    <AccomodationCard 
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    cover={data.cover} 
                    />
                );
             })} 
        </main>
    );
};

export default AccomodationGallery;