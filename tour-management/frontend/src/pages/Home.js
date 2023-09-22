import '../styles/home.css';
import React from 'react';
import { Container ,Row , Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import experienceImg from '../assets//images/experience.png';
import SubTitle from '../shared/SubTitle.js';
import SearchBar from '../shared/SearchBar';
import Testimonials from '../components/Testimonials/Testimonials';
import FeaturedTourList from '../Featured-tours/FeaturedTourList';
import ServiceList from '../services/ServiceList';
import worldImg from '../assets/images/world.png';
import MasonryImagesGallery from '../images-gallery/MasonryImagesGallery';
import NewsLetter from '../shared/NewsLetter';

function Home(){
    return (
       <>
       {/* Hero section start */}
          <section>
            <Container>
               <Row>
                  <Col lg="6">
                     <div className='hero_content'>
                        <div className='hero_subtitle d-flex align-items-center'>
                           <SubTitle subtitle="Know Before You Go" />
                           <img src={worldImg} alt='wa'/>
                        </div>
                        <h1>Traveling opens the door to creating {" "}<span className='highlights'>memories</span> </h1>
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </p>
                     </div>
                  </Col>

                  <Col lg='2'>
                     <div className='hero_img-box'>
                        <img src={heroImg} alt=''></img>
                     </div>
                  </Col>
                  <Col lg='2'>
                     <div className='hero_img-box hero_video-box mt-4'>
                        <video src={heroVideo} alt='' controls></video>
                     </div>
                  </Col>
                  <Col lg='2'>
                     <div className='hero_img-box mt-5'>
                        <img src={heroImg02} alt=''></img>
                     </div>
                  </Col>
                  <SearchBar/>
               </Row>
            </Container>
          </section>

          <section>
            <Container>
               <Row>
                  <Col lg="3">
                     <h5 className='services_subtitle'>
                        What we serve 
                     </h5>
                     <h2 className='servies_title'>We offer our best services </h2>
                  </Col>
                  <ServiceList/>
               </Row>
            </Container>
          </section>

          {/* featured tour section start */}
          <section>
            <Container>
               <Row>
                  <Col lg="12" className='mb-5'>
                      <SubTitle subtitle={'Explore'} />
                      <h2 className='featured_tour_title'>
                        Our featured tours 
                      </h2>
                  </Col>
                  <FeaturedTourList/>
               </Row>
            </Container>
          </section>
          {/* featured tour section end */}
           
          {/* Experience Section start */}
         <section>
            <Container>
               <Row>
                  <Col lg='6'>
                     <div className='experience_content'>
                        <SubTitle subtitle={'Experience'}/>

                        <h2>With our all experience <br /> we will serve you </h2>
                        <p>lorem ipsum dolor sit amet , consider adipiscing elit
                           <br/>
                           Quas alique , hic tempora inventore suscipt undeo.
                        </p>
                     </div>

                     <div className='counter_wrapper d-flex align-items-center gap-5'>
                       <div className='counter_box'>
                          <span>12k+</span>
                          <h6>successful trip </h6>
                       </div>
                       <div className='counter_box'>
                          <span>2k+</span>
                          <h6>Regular Clients </h6>
                       </div>
                       <div className='counter_box'>
                          <span>15</span>
                          <h6>Years experience</h6>
                       </div>
                     </div>

                  </Col>
                  <Col lg='6'>
                     <div className='experience_img'>
                        <img src={experienceImg} alt='exp'></img>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
          {/* Experience Section end */}

          {/* Gallery Section Start */}
          <section>
            <Container>
               <Row>
                  <Col lg='12'>
                     <SubTitle subtitle={'Gallery'}/>
                     <h2 className='gallery_title'>
                        Visit our customers tour gallery
                     </h2>
                  </Col>
                  <Col lg='12'>
                    <MasonryImagesGallery/>
                  </Col>
               </Row>
            </Container>
          </section>
          {/* Gallery Section end */}
          {/* Testimonial section start */}
          <section>
            <Container>
               <Row>
                  <Col lg="12">
                     <SubTitle subtitle={'Fans Love'}/>
                     <h2 className='testimonial_title'>
                        What our fans say about us .
                     </h2>
                  </Col>
                  <Col lg='12'>
                     <Testimonials/>
                  </Col>
               </Row>
            </Container>
          </section>
          {/* Testimonial section end */}
          <NewsLetter/>
       </>
    );
}

export default Home;