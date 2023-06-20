import greystar from '../../assets/img/greystar.svg'
import orangestar from '../../assets/img/orangestar.svg'

function Rating({rating}) {
  const starValue = [1, 2, 3, 4, 5];
  return (
    <div className="accomodation__content--host-star">
      {starValue.map((data, index) => {
        return (rating) >= data ? (
          <img key={index} src={orangestar} alt="star" />
        ) : (
          <img key={index} src={greystar} alt="star" />
        );
      })}
    </div>
  )
}


export default Rating;



  