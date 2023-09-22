import { Form , FormGroup , ListGroup , ListGroupItem , Button} from 'reactstrap';
import { useState , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './../../styles/booking.css';
import {AuthContext} from './../../context/AuthContext.js';
import {BASE_URL} from './../../utils/config.js';

function Booking({tour , avgRating}){

    const {price , reviews , title} = tour;
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);

    const [booking , setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email, 
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = e=>{
        setBooking(prev=>({...prev , [e.target.id]:e.target.value}))
    }

    // send data to the server
    const handleClick = async e=>{
        e.preventDefault();

        // console.log( `${booking}is`);

         try {
            if(!user || user === undefined || user===null){
                return alert('please sign in');
            }

            const res = await fetch(`${BASE_URL}/booking` , {
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(booking)
            })
            const result = await res.json();

            if(!res.ok){
                return alert(result.message);
            }
            navigate('/thank-you');
         } catch (err){
            alert(err.message);
         }
    }

    const serviceFee = 10;
    const totalAmount = Number(price)*Number(booking.guestSize)+Number(serviceFee);

    return (
        <div className='booking'>
            <div className='booking_top d-flex align-items-center justify-content-between'>
                <h3>${price}<span>/per person</span></h3>
                <span className="tour_rating d-flex align-items-center">
                                <i class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}({reviews && reviews.length > 0 ? ` (${reviews.length})` : ' (Not rated)'})
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