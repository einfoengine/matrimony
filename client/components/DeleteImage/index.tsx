// This is a selectable gallery. You can pass a function. After selecting and submission the function will be fired. 
import axios from "axios";
import { useEffect, useState } from "react";
import Link from 'next/link';

const DeleteImage = ({gallery_title="gallery", images={}, user}:{gallery_title:any, images: any, self: boolean, user: any}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleImageSelection = (imageId) => {
    setSelectedImages((selectedImages)=>{
      if(selectedImages.includes(imageId)){
        return selectedImages.filter((id) =>id !== imageId);
      }else{
        return [...selectedImages, imageId]
      }
    })
  };

  const handleDelete = async () => {
    try {
      axios.delete(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/users/gallery/delete`, {
        data:{user ,selectedImages}
      });
    } catch (err) {
      console.log("delete error: ", err);
    }
  }

  return (    
    <div className="sam-gallery">
      <div className="sam-tab-nav mb-3">
        <Link href={`/biodata?user=${user}`} passHref>
          <button className="btn btn-light">Biodata</button>
        </Link>
        <Link href={`/users/gallery/${user}`} passHref>
          <button className="btn btn-info">Gallery</button>
        </Link>
        <button className="btn btn-primary " onClick={handleDelete}>Delete Selected Items</button>
      </div>
      <div className="sam-user-image-list p-3 border rounded">
        {images.length>0&&images?.map((image, index) => 
          <div id={image} className={`sam-gallery-item ${selectedImages.includes(image)&& "sam-image-slected"}`} key={`user-gallery-${index}`} onClick={()=>{
            toggleImageSelection(image);
          }}>
            <img className="rounded" src={`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/static/gallery/${images&&images[index]}`} alt={``} key={images[index]}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default DeleteImage