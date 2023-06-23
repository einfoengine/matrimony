import { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../../components/SideMenu';
import UserGallery from '../../../components/UserGallery';
import ImageUploader from '../../../components/ImageUploader';
import Default from '../../../Layouts/Default.layout';

interface GalleryData {
  id: string;
  name: string;
}

const Gallery = (): JSX.Element => {
  const [data, setData] = useState<GalleryData[]>([]);
  const [images, setImages] = useState();

  useEffect(() => {
    try {
      const currentUser = JSON.parse(window.localStorage.getItem('user'));
      const fetchData = async () => {
        const {data} = await axios.get('/api/users/gallery', {params: {id: currentUser._id}})
        setData(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  
  useEffect(()=>{
    setImages(data?.images);
  },[data]);
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
              span: 2,
              components: <SideMenu active="message" />,
            },
            {
              span: 10,
              components: (
                <>
                  <UserGallery images={images} gallery_title={"Images"} self={false} />
                  {/* {console.log("Data", data?.images)} */}
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
