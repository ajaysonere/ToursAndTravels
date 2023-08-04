import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';


function Testimonials(){

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slideToScroll:1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
           <div className='testimonial py-4 px-3'>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                   <img src={ava01} alt='av' className='w-25 h-25 rounded-2'/>
                   <div>
                     <h6 className='mb-0 mt-3'> John Doe</h6>
                     <p>Customer</p>
                   </div>
                </div>
           </div>

           <div className='testimonial py-4 px-3'>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                   <img src={ava02} alt='av' className='w-25 h-25 rounded-2'/>
                   <div>
                     <h6 className='mb-0 mt-3'> Lia Franklin</h6>
                     <p>Customer</p>
                   </div>
                </div>
           </div>
           <div className='testimonial py-4 px-3'>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                   <img src={ava03} alt='av' className='w-25 h-25 rounded-2'/>
                   <div>
                     <h6 className='mb-0 mt-3'> John Doe</h6>
                     <p>Customer</p>
                   </div>
                </div>
           </div>
           <div className='testimonial py-4 px-3'>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                   <img src={ava02} alt='av' className='w-25 h-25 rounded-2'/>
                   <div>
                     <h6 className='mb-0 mt-3'> Lia Franklin</h6>
                     <p>Customer</p>
                   </div>
                </div>
           </div>
        </Slider>
    );
}
export default Testimonials;