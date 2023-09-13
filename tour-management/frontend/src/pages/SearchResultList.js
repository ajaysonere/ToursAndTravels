import React , {useState} from 'react';
import CommonSection from './../shared/CommonSection.js';
import { Container , Row , Col} from 'reactstrap';
import { useLocation } from 'react-router-dom';
import TourCard from './../shared/TourCard.js';

function SearchResultList(){
    const location = useLocation();
    const [data] = useState(location.state);
    console.log(data);
    return(
      <>
          <CommonSection title={'Tour search Result'} />
          <section>
            <Container>
              <Row>
                {
                  data.length === 0? <h4>No tour found</h4>:data?.map(tour=>(
                    <Col lg='3' className='mb-4' key={tour._id}>
                      <TourCard tour={tour}/>
                    </Col>
                  ))
                }
              </Row>
            </Container>
          </section>
      </>
    );
}

export default SearchResultList;