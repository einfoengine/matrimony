// This is a selectable gallery. You can pass a function. After selecting and submission the function will be fired. 
import axios from "axios";
import { useEffect, useState } from "react";

const DeleteImage = ({gallery_title="gallery", images={}}:{gallery_title:any, images: any, self: boolean}) => {
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
        data:{selectedImages}
      });
    } catch (err) {
      console.log("delete error: ", err);
    }
  }

  useEffect(()=>{

  },[]);

  return (
    <>
    {console.log(selectedImages)}
    <div className="sam-module-header d-flex mb-3 sam-pull-title">
      <h3 className=''>{gallery_title}</h3>
      <button className="btn btn-primary sam-left-auto" onClick={handleDelete}>Delete</button>
    </div>
      <div className="sam-gallery">
        <div className="sam-user-image-list">
          {images.length>0&&images?.map((image, index) => 
            <div id={image} className={`sam-gallery-item ${selectedImages.includes(image)&& "sam-image-slected"}`} key={`user-gallery-${index}`} onClick={()=>{
              toggleImageSelection(image);
            }}>
              <img src={`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/static/gallery/${images&&images[index]}`} alt={``} key={images[index]}/>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default DeleteImage