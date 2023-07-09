import { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../../components/SideMenu';
import Default from '../../../Layouts/Default.layout';
import DeleteImage from '../../../components/DeleteImage';

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
              span: 2,
              components: <SideMenu active="message" />,
            },
            {
              span: 10,
              components: (
                <>
                  <DeleteImage user={user} images={images} gallery_title="Images" self={true}/>
                </>
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
