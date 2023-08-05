import {Container , Row , Col , Form , ListGroup} from 'reactstrap';
import {useParams} from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import '../styles/tour-details.css';
function TourDetails(){

    const {id} = useParams()

    const tour = tourData.find(tour => tour.id === id)

    const {photo , title , desc ,address, price , reviews , city , distance , maxGroupSize} = tour;


    const {totalRating , avgRating} = calculateAvgRating(reviews)

    return(
        <>
          <section>
            <Container>
              <Row>
                <Col lg='8'>
                   <div className='tour_content'>
                      <img src={photo} alt='a'/>
                      <div className='tour_info'>
                        <h2>{title}</h2>
                        <div className='d-flex align-items-center gap-5'>
                          <span className="tour_rating d-flex align-items-center gap-1">
                                <i class="ri-star-fill" style={{'color':'var(--secondary-color)'}}></i>{calculateAvgRating === 0 ? null : avgRating}
                                {totalRating === 0 ? ('Not rated ' ): (<span>({reviews.length})</span>)}
                            </span>

                            <span>
                              <i class="ri-map-pin-user-fill"></i>{address}
                            </span>
                        </div>
                        <div className='tour_extra-details'>
                           <span><i class="ri-map-pin-2-line"></i>{city}</span>
                           <span><i class="ri-money-dollar-circle-line"></i>${price} / per person</span>
                           <span><i class="ri-group-line"></i>{maxGroupSize}</span>
                        </div>
                        <h5>Description</h5>
                        <p>{desc}</p>
                      </div>
                   </div>
                </Col>
              </Row>
            </Container>
          </section>
        </>
    );
}

export default TourDetails;