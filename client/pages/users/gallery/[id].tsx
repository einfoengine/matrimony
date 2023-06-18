import { useEffect } from "react";
import axios from "axios";

import LightGallery from 'lightgallery/react';

// import styles
import 'photoswipe/style.css'; 
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Default from "../../../Layouts/Default.layout";
import UserGallery from "../../../components/UserGallery";

export async function getServerSideProps(req, res){
    const {data} = await axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/users/gallery`, {params:{id: req.query.id}});
    return{
      props: {
        data
      }
    }
}

const Gallery = ({data}) => {
  const payload:layoutPayload = [
    {
      id:"ex-registratio",
      name: "ex-registratio",
      type: "fixed",
      rows: [
          {
              cols: [
                  {
                    span: 12,
                    components: 
                    <div className="sam-gallery">
                      {/* <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                        {data?.images?.map((image, index) => (
                          <a href={`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/static/gallery/${data?.images[index]}`} key={'user-gallery-' + index}>
                            <img src={`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/static/gallery/${data?.images[index]}`} alt="" />
                          </a>
                        ))}
                      </LightGallery> */}
                      {/* {console.log("Image data --- ",data)} */}
                      <UserGallery data={data}/>
                    </div>
                  },
              ]
          }
      ]
    }
  ]
  console.log("Data for gallery: ",data);
  return (
    console.log("Gallery data ",data),
    <div>
        <Default layoutPayload={payload}/>
    </div>
  );
}

export default Gallery;