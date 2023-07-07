import { useEffect } from "react";
import axios from "axios";

import 'photoswipe/style.css'; 
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { layoutPayload } from "../../../types/global.type";

import Default from "../../../Layouts/Default.layout";
import UserGallery from "../../../components/UserGallery";

export async function getServerSideProps(req, res) {
  const { data } = await axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/users/gallery`, { params: { id: req.query.id } });
  return {
    props: {
      data
    }
  }
}

const Gallery = ({ data }: { data: any }) => {
  const { images } = data;

  // useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   console.log(images); // Log the images value on the client-side
    // }
  // }, []);

  const payload: layoutPayload = [
    {
      id: "ex-registratio",
      name: "ex-registratio",
      className: "sam-user-gallery",
      type: "fixed",
      rows: [
        {
          cols: [
            {
              span: 12,
              components: <UserGallery images={images} gallery_title={"Images"} self={false} />
            },
          ]
        }
      ]
    }
  ]

  return (
    <div>
      <Default layoutPayload={payload} />
    </div>
  );
}

export default Gallery;
