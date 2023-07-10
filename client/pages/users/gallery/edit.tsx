import { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../../components/SideMenu';
import UserGallery from '../../../components/UserGallery';
import ImageUploader from '../../../components/ImageUploader';
import Default from '../../../Layouts/Default.layout';
import ProfileBrief from '../../../components/ProfileBrief';
import Link from 'next/link';

interface GalleryData {
  id: string;
  name: string;
}

const Gallery = (): JSX.Element => {
  
  const [images, setImages] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      const currentUser = JSON.parse(window.localStorage.getItem('user'));
      setUser(currentUser._id);
      const fetchData = async () => {
        const {data} = await axios.get('/api/users/gallery', {params: {id: currentUser._id}});
        setImages(data?.images);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  
  console.log("Images: ", images);
  
  const payload = [
    {
      id: 'ex-registratio',
      name: 'ex-registratio',
      type: 'fixed',
      rows: [
        {
          cols: [
            {
              span: 4,
              components: <>{
                user&&<ProfileBrief user={user}/>
              }</>,
            },
            {
              span: 8,
              components: 
              <div className="sam-bio-wrapper">
                <div className="sam-tab-nav mb-3">
                  <Link href={`/biodata?user=${user}`} passHref>
                    <button className="btn btn-light">Biodata</button>
                  </Link>
                  <Link href={`/users/gallery/${user}`} passHref>
                    <button className="btn btn-info">Gallery</button>
                  </Link>
                  <Link href={`/users/gallery/delete`} passHref>
                    <button className='btn btn-primary'>Delete</button>
                  </Link>
                </div>
                <UserGallery images={images} gallery_title={""} self={true} className='border rounded p-3'/>
              </div>
              ,
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="container vd-top-space">
      <Default layoutPayload={payload} />
    </div>
  );
};

export default Gallery;
