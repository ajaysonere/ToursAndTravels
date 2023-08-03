import '../styles/home.css';
import React from 'react';
import { Container ,Row , Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import SubTitle from '../shared/SubTitle.js';

import worldImg from '../assets/images/world.png';

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
                     <div className='hero_img-box mt-4'>
                        <video src={heroVideo} alt='' controls></video>
                     </div>
                  </Col>
                  <Col lg='2'>
                     <div className='hero_img-box mt-5'>
                        <img src={heroImg02} alt=''></img>
                     </div>
                  </Col>
               </Row>
            </Container>
          </section>
       </>
    );
}

export default Home;