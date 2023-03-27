import { useEffect } from "react";
import axios from "axios";
import 'photoswipe/style.css'; 

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Default from "../../../Layouts/Default.layout";

export async function getServerSideProps(req, res){
    const {data} = await axios.get('http://localhost:3000/api/users/gallery', {params:{id: req.query.id}});
    return{
      props: {
        data
      }
    }
}

const Gallery = ({data}) => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  const payload:layoutPayload = [
    {
      id:"ex-registratio",
      name: "ex-registratio",
      className: "no-padding",
      type: "fixed",
      rows: [
          {
              cols: [
                  {
                    span: 12,
                    components: 
                    <span className="eie-gallery">
                      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
                        {data?.images?.map((image, index) => (
                          <a href={`http://localhost:8000/static/gallery/${data?.images[index]}`} key={'user-gallery-' + index}>
                            <img src={`http://localhost:8000/static/gallery/${data?.images[index]}`} alt="" />
                          </a>
                        ))}
                      </LightGallery>
                    </span>
                  },
              ]
          }
      ]
    }
  ]
  return (
      <div className="vd-top-space">
          <Default layoutPayload={payload}/>
      </div>
  );
}

export default Gallery;