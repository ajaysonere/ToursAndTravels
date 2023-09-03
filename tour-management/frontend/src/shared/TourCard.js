import { Card , CardBody } from "reactstrap";
import {Link} from 'react-router-dom';
import calculatingAvgRating from "../utils/avgRating";

import '../styles/tour-card.css';

function TourCard({tour}){

    const {_id , title , photo , price , featured , reviews ,city} = tour; 

    const {totalRating , avgRating} = calculatingAvgRating(reviews)

    return(
        <>
           <div className="tour_card">
              <Card>
                 <div className="tour_img">
                    <img src={photo} alt="tour img"></img>
                    {featured && <span>Featured</span>}
                 </div>

                    <CardBody>
                        <div className="card_top d-flex align-items-center justify-content-between">
                            <span className="tour_location d-flex align-items-center gap-1">
                                <i class="ri-map-pin-line"></i>{city}
                            </span>
                            <span className="tour_rating d-flex align-items-center gap-1">
                                <i class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}
                                {totalRating === 0 ? ('Not rated ' ): (<span>({reviews.length})</span>)}
                            </span>
                        </div>
                        <h5 className="tour_title"><Link to={`/tours/${_id}`}>{title}</Link></h5>

                        <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
                            <h5>${price} <span>/per person</span></h5>

                            <button className="btn booking_btn">
                                <Link to={`/tours/${_id}`}>Book Now</Link>
                            </button>
                        </div>
                    </CardBody>
              </Card>
              
           </div>
        </>
    )
}

export default TourCard;