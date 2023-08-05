import { Form , FormGroup , ListGroup , ListGroupItem , Button} from 'reactstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../styles/booking.css';
function Booking({tour , avgRating}){

    const {price , reviews} = tour;
    const navigate = useNavigate();
    const [credentials , setCredentials] = useState({
        userId: '01',
        userEmail: '', // Mark the field as an empty string initially
        fullName: '',
        phone: '',
        guestSize: '',
        bookAt: ''
    });

    const handleChange = e=>{
        setCredentials(prev=>({...prev , [e.target.id]:e.target.value}))
    }

    // send data to the server
    const handleClick = e=>{
        e.preventDefault();
        if (credentials.userEmail !== '') {
            navigate('/thank-you');
        } else {
            alert('Please fill in all required fields.');
        }
    }

    const serviceFee = 10;
    const totalAmount = Number(price)*Number(credentials.guestSize)+Number(serviceFee);

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
                <Form className='booking_info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type='text' required placeholder='Full Name' id="fullName" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='email' required placeholder='Email' id="userEmail" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='number' required placeholder='Phone Number' id="phone" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='date' required placeholder='Booking at' id="bookAt" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='number' placeholder='Guest size' id="guestSize" onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            {/* booking  form end */}

            {/* booking bottom */}
            <div className='booking_bottom'>
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                      <h5 className='d-flex align-items-center gap-1'>${price} <i class="ri-close-line"/> 1 Person</h5>
                      <span>${price}</span>
                    </ListGroupItem>
                     <ListGroupItem className='border-0 px-0'>
                      <h5>Service Charge<i class="ri-close-line"/> 1 Person</h5>
                      <span>${serviceFee}</span>
                    </ListGroupItem>
                     <ListGroupItem className='border-0 px-0 total'>
                      <h5>Total <i class="ri-close-line"/> 1 Person</h5>
                      <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}> Book Now </Button>
            </div>
        </div>
    );
}

export default Booking;