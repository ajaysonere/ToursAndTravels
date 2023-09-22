import React , {useEffect, useRef , useState,useContext} from 'react';
import {Container , Row , Col , Form , ListGroup} from 'reactstrap';
import {useParams} from 'react-router-dom';
import NewsLetter from '../shared/NewsLetter';
import calculateAvgRating from '../utils/avgRating';
import '../styles/tour-details.css';
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking.js';
import  useFetch  from './../hooks/useFetch.js';
import {BASE_URL} from './../utils/config.js';
import {AuthContext} from '../context/AuthContext.js';

function TourDetails(){

    const {id} = useParams();
    const reviewMsgRef = useRef('');
    const [tourRating , setTourRating] = useState(null);
    const {user} = useContext(AuthContext)
    // fetch data from database
    const {data:tour , loading,error} = useFetch(`${BASE_URL}/tours/${id}`)

    const {photo , title , desc ,address, price , reviews=[], city , distance , maxGroupSize} = tour;


    const {totalRating , avgRating} = calculateAvgRating(reviews)

    // format date
    const options = {day: "numeric" , month: "long",year:"numeric"};

    // submit request to the server
    const submitHandler = async e=>{
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;

        try{
           if(!user || user===undefined || user===null){
             alert(`Please sign in`);
           }
           
           const reviewObj = {
            username:user?.username,
            reviewText,
            rating:tourRating,
           }

           const res = await fetch(`${BASE_URL}/review/${id}` , {
              method:'post',
              headers:{
                'content-type':'application/json'
              },
              credentials:'include',
              body:JSON.stringify(reviewObj)
           })
            
           const result = await res.json();
           if(!res.ok) {
             return alert(result.message);
           }
          alert(result.message);

        }catch(err){
           alert(err.message);
        }
    }

    useEffect(()=>{
       window.scrollTo(0,0)
    },[tour])


    return(
        <>
          <section>
            <Container>
              {
                loading && <h4 className='text-center pt-5 '>Loading......</h4>
              }
              {
                error && <h4 className='text-center pt-5 '>{error}</h4>
              }
              {
              !loading && !error && (<Row>
                <Col lg='8'>
                  <div className='tour_content'>
                    <img src={photo} alt='a' />
                    <div className='tour_info'>
                      <h2>{title}</h2>
                      <div className='d-flex align-items-center gap-5'>
                        <span className="tour_rating d-flex align-items-center gap-1">
                          <i class="ri-star-fill" style={{ 'color': 'var(--secondary-color)' }}></i>{avgRating === 0 ? null : avgRating}
                          {totalRating === 0 ? ('Not rated ') : (<span>({reviews?.length})</span>)}
                        </span>

                        <span>
                          <i class="ri-map-pin-user-fill"></i>{address}
                        </span>
                      </div>
                      <div className='tour_extra-details'>
                        <span><i class="ri-map-pin-2-line"></i>{city}</span>
                        <span><i class="ri-money-dollar-circle-line"></i>${price} / per person</span>
                        <span><i class="ri-map-pin-time-line"></i>{distance}km/h</span>
                        <span><i class="ri-group-line"></i>{maxGroupSize}</span>
                      </div>
                      <h5>Description</h5>
                      <p>{desc}</p>
                    </div>
                    {/* tour reviews section start*/}
                    <div className='tour_reviews mt-4'>
                      {/* <h4>Reviews ({reviews.length} reviews)</h4> */}
                      <Form onSubmit={submitHandler}>
                        <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                          <span onClick={() => setTourRating(1)}>
                            <i class='ri-star-s-fill'></i>
                          </span>
                          <span onClick={() => setTourRating(2)}>
                            <i class='ri-star-s-fill'></i>
                          </span>
                          <span onClick={() => setTourRating(3)}>
                            <i class='ri-star-s-fill'></i>
                          </span>
                          <span onClick={() => setTourRating(4)}>
                            <i class='ri-star-s-fill'></i>
                          </span>
                          <span onClick={() => setTourRating(5)}>
                            <i class='ri-star-s-fill'></i>
                          </span>
                        </div>
                        <div className='review_input'>
                          <input type='text' ref={reviewMsgRef} placeholder='share your thoughts'
                            required>
                          </input>
                          <button className='btn primary__btn text-white' type='submit'>Submit</button>
                        </div>
                      </Form>

                      <ListGroup className='user_reviews'>
                        {
                          reviews.map((reviews,index) => (
                            <div key={index} className='review_item'>
                              <img src={avatar} alt='ava' />
                              <div className='w-100'>
                                <div className='w-100 d-flex align-items-center justify-centent-between '>
                                  <div className='w-100'>
                                    <h5>{reviews.username}</h5>
                                    <p>{new Date(reviews.createdAt).toLocaleDateString('en-US', options)}
                                    </p>
                                  </div>
                                  <span className=''>
                                    {reviews.rating}<i class="ri-star-s-fill"></i>
                                  </span>
                                </div>
                                <h6>{reviews.reviewText}</h6>
                              </div>
                            </div>
                          ))
                        }
                      </ListGroup>
                    </div>
                    {/* tour reviews section end*/}

                  </div>
                </Col>
                <Col lg='4'>
                  <Booking tour={tour} avgRating={avgRating} />
                </Col>
              </Row>
              )
              }
            </Container>
          </section>
          <NewsLetter/>
        </>
    );
}

export default TourDetails;