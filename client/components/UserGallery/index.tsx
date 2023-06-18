import LightGallery from 'lightgallery/react';
// import styles
import 'photoswipe/style.css'; 
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const UserGallery = ({gallery_title, data={}, self=false}:{gallery_title:any, data: any, self: boolean}) => {
  return (
    <div className="sam-gallery">
      <h3>{gallery_title?gallery_title:"Gallery"}</h3>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        {data?.images?.map((image, index) => (
          <div href={`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/static/gallery/${data?.images[index]}`} key={'user-gallery-' + index}>
            {self===true&&"delete"}
            <img src={`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/static/gallery/${data?.images[index]}`} alt={``}/>
          </div>
        ))}
      </LightGallery>
    </div>
  )
}

export default UserGallery