
import React , {useState , useEffect} from "react";
import CommonSection from "../shared/CommonSection";
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import NewsLetter from '../shared/NewsLetter';
import tourData from '../assets/data/tours';
import '../styles/tour.css';
import { Container, Row ,Col} from "reactstrap";
function Tour(){

    const [pageCount , setPageCount] = useState(0);
    const [page , setPage] = useState(0);

    useEffect(()=>{
       const pages = Math.ceil(5/4);
       setPageCount(pages);
    } ,[page]);

    return (
        <>
          <CommonSection title={'All Tours'}/>
          <section>
            <Container>
              <Row>
                <SearchBar />
              </Row>
            </Container>
          </section>
          <section className="pt-0">
            <Container>
              <Row>
                 {
                   tourData?.map(tour => (
                     <Col lg='3' key={tour.id} className="mb-4">
                      <TourCard tour={tour}/>
                     </Col>
                   ))
                 }

                 <Col lg='12'>
                    <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                       {
                         [...Array(pageCount).keys()].map(number=>(
                           <span key={number} onClick={()=>setPage(number)}
                           className={page ===number ? 'active_page' : ''}
                           >
                            {number+1}
                           </span>
                         ))
                       }
                    </div>
                 </Col>
              </Row>
            </Container>
          </section>
          
          <NewsLetter/>
        </>
    );
}

export default Tour;