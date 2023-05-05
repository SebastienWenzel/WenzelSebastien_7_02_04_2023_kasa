import { Link } from 'react-router-dom';


const Card = ({id, title, cover}) => {
    return (
        <Link to={`/accomodation/${id}`}>
             <div className='card'>
                <img src={cover} alt={title}/>
                <h3>{title}</h3>
            </div>
        </Link>
       
    )
};

export default Card;