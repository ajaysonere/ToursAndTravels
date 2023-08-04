import GalleryImages from './GalleryImage';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

function MasonryImagesGallery(){
    return(
      <ResponsiveMasonry columnCountBreakPoints={{350:1 , 768:3,992:4}}>
        <Masonry gutter = "1rem">
           {
             GalleryImages.map((item , index)=>(
                <img
                className='masonry_img'
                 src={item}
                 key={index}
                 alt='im'
                 style={{width:"100%" , display:"block" , borderRadius:"10px"}}
                />
             ))
           }
        </Masonry>
      </ResponsiveMasonry>
    );
}

export default MasonryImagesGallery;