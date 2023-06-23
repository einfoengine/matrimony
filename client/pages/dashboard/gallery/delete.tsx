import { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../../components/SideMenu';
import UserGallery from '../../../components/UserGallery';
import ImageUploader from '../../../components/ImageUploader';
import Default from '../../../Layouts/Default.layout';

interface GalleryData {
  id: string;
  name: string;
  images: string[]; // Specify the type of 'images' array
}

const Gallery = (): JSX.Element => {
  const [data, setData] = useState<GalleryData[]>([]);
  const [images, setImages] = useState<string[]>([]); // Specify the type of 'images' state

  useEffect(() => {
    try {
      const currentUser = JSON.parse(window.localStorage.getItem('user') || '');
      const fetchData = async () => {
        const { data } = await axios.get('/api/users/gallery', { params: { id: currentUser._id } });
        await setData(data);
        setImages(data?.images || []); // Set the 'images' state with the first element's 'images' array
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
                  <UserGallery images={images} gallery_title="Images" self={false} />
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
