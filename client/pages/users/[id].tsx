import { useEffect, useState } from "react";
import axios from "axios";
import ProfileBrief from "../../components/ProfileBrief";
import Biodata from "../../components/Biodata";

export async function getServerSideProps (req, res) { 
  const {data} = await axios.get('http://localhost:8000/api/user/biodata', {params: {user: req.query.id}});
  console.log('Data ***> ',data);
  
  return {
    props: {
     data
    }
  }
}

const User = ({data}) => {
  const [userId, setUserIid] = useState();
  useEffect(()=>{
    setUserIid(JSON.parse(window.localStorage.getItem("user"))._id);
  },[userId]);

  return (
    <div className="container">      
      <ProfileBrief user={data?.user }/>
      <Biodata bio={data} userId={data?._id}/>
    </div>
  )
}

export default User;