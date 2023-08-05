import { Form , FormGroup , ListGroup , ListGroupItem , Button} from 'reactstrap';
import './../../styles/booking.css';
function Booking({tour , avgRating}){

    const {price , reviews} = tour;
    return (
        <div className='booking'>
            <div className='booking_top d-flex align-items-center justify-content-between'>
                <h3>${price}<span>/per person</span></h3>
                <span className="tour_rating d-flex align-items-center">
                                <i class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}({reviews.length})
                            </span>
            </div>
        </div>
    );
}

export default Booking;