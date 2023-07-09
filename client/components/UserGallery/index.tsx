import LightGallery from 'lightgallery/react';

// Import component
import ImageUploader from '../ImageUploader';

// import styles
import 'photoswipe/style.css'; 
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from 'next/link';


const UserImageList = ({gallery_title="gallery", images={}, self=false, className=''}:{gallery_title:any, images: any, self: boolean, className: string}) => {
  console.log(self);
  return (
    <div className={`sam-component sam-user-gallery ${className}`}>
      <h3 className=''>{gallery_title}</h3>
      {
        self===true
        &&
        <div className="row">
          <div className="col-12 d-flex">
            <ImageUploader />
            <Link href={`/dashboard/gallery/delete`} passHref>
              <button className='btn btn-primary'>Delete</button>
            </Link>
          </div>
        </div>
      }
      <div className="sam-gallery">
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          {images.length>0&&images?.map((image, index) => 
            <div className='sam-gallery-item' href={`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/static/gallery/${images&&images[index]}`} key={'user-gallery-' + index}>
              <img src={`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/static/gallery/${images&&images[index]}`} alt={``}/>
            </div>
          )}
        </LightGallery>
      </div>
    </div>
  )
}

export default UserImageList