import axios from "axios";
import Link from "next/link";
import 'photoswipe/style.css'; 
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { layoutPayload } from "../../../types/global.type";

import Default from "../../../Layouts/Default.layout";
import UserGallery from "../../../components/UserGallery";
import ProfileBrief from "../../../components/ProfileBrief";

export async function getServerSideProps(req, res) {
  let { data: gallery } = await axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/users/gallery`, { params: { id: req.query.id } });
  if(gallery===null){
    gallery = {}
  }
  console.log(gallery)
  return {
    props: {
      user: req.query.id,
      gallery
    }
  }
}

const Gallery = ({ gallery, user }: { gallery: any, user: string}) => {
  const { images } = gallery;
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
              span: 4,
              components: <ProfileBrief user={user}/>
            },
            {
              span: 8,
              components: <div className="sam-bio-wrapper">
                <div className="sam-tab-nav mb-3">
                  <Link href={`/biodata?user=${user}`} passHref>
                    <button className="btn btn-light">Biodata</button>
                  </Link>
                  <button className="btn btn-info">Gallery</button>
                  <Link href={`/users/gallery/edit`} passHref>
                    <button className="btn btn-danger">Edit</button>
                  </Link>
                </div>
                <UserGallery images={images} gallery_title={""} self={false} className="rounded border p-3"/>
              </div>
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
