import { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../../components/SideMenu';
import Default from '../../../Layouts/Default.layout';
import DeleteImage from '../../../components/DeleteImage';
import UserGallery from '../../../components/UserGallery';
import Link from 'next/link'
import ProfileBrief from '../../../components/ProfileBrief';

interface GalleryData {
  id: string;
  name: string;
  images: string[]; 
}

const Gallery = (): JSX.Element => {
  const [data, setData] = useState<GalleryData[]>([]);
  const [images, setImages] = useState<string[]>([]); 
  const [user, setUser] = useState<any>();

  useEffect(() => {
    try {
      const currentUser = JSON.parse(window.localStorage.getItem('user') || '');
      setUser(currentUser?._id);
      const fetchData = async () => {
        const { data } = await axios.get('/api/users/gallery', { params: { id: currentUser._id } });
        await setData(data);
        setImages(data?.images || []); 
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(images);
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
              }
              </>
            },
            {
              span: 8,
              components: (
                <div className="sam-bio-wrapper">
                  <DeleteImage user={user} images={images} gallery_title="" self={true}/>
                </div>
              ),
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
