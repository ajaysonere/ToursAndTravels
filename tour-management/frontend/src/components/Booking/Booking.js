import { Form , FormGroup , ListGroup , ListGroupItem , Button} from 'reactstrap';
import './../../styles/booking.css';
function Booking({tour , avgRating}){

    const {price , reviews} = tour;

    const handleChange = e=>{

    }
    return (
        <div className='booking'>
            <div className='booking_top d-flex align-items-center justify-content-between'>
                <h3>${price}<span>/per person</span></h3>
                <span className="tour_rating d-flex align-items-center">
                                <i class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}({reviews.length})
                            </span>
            </div>

            {/* booking  form start */}
            <div className='booking_form'>
                <h5>Information</h5>
                <Form className='booking_info-form'>
                    <FormGroup>
                        <input type='text' placeholder='Full Name' id = "fullname" required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <input type='number' placeholder='Phone Number' id = "phone" required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='date' placeholder='Booking at' id = "fullname" required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <input type='number' placeholder='Guest size ' id = "fullname" required onChange={handleChange}/>
                    </FormGroup>
                </Form>
            </div>
            {/* booking  form end */}
        </div>
    );
}

export default Booking;