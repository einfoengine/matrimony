import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../../context';
import RenderUsers from '../../components/RenderUsers';
import SideMenu from '../../components/SideMenu';
import UserGallery from '../../components/UserGallery';
import ImageUploader from '../../components/ImageUploader';

import Default from '../../Layouts/Default.layout';

// export async function getServerSideProps(req, res){
//   return{
//     props: {
//       data
//     }
//   }
// }
//  useEffect(()=>{
  // const {data} = axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/users/gallery`);
//  },[]);


const Gallery = () => {
  const [user, setUser] = useState({});
  const [data, setData] = useState({});
  useEffect(()=>{
    const user = JSON.parse(window.localStorage.getItem("user"));
    setUser(user);
  },[]);
  useEffect(()=>{
    axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/users/gallery`, {params:{id:"64446372da37321a1cbeef69"}}).then((res)=>{
      setData(res);
    });
  },[user]);

  const payload:layoutPayload = [
    {
      id:"ex-registratio",
      name: "ex-registratio",
      type: "fixed",
      rows: [
        {
          cols: [
            {
              span: 2,
              components: <>
              <SideMenu active={"message"}/>
              </>
            },
            {
              span: 10,
              components: <>
                <ImageUploader/>
                <UserGallery data={data.data} self={true}/>
              </>
            }
          ]
        }
      ]
    }
  ]
  return (
    <div className="container vd-top-space">
      <Default layoutPayload={payload}/>
    </div>
  )
}
  

export default Gallery