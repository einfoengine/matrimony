import { useEffect, useState } from "react";
import axios from "axios";
import ProfileBrief from "../../components/ProfileBrief";
import Biodata from "../../components/Biodata";

import Default from "../../Layouts/Default.layout";

export async function getServerSideProps (req, res) { 
  const {data} = await axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/user/biodata`, {params: {user: req.query.id}});
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

  const payload:layoutPayload = [
    {
      id:"sam-bio-brif",
      name: "ex-registratio",
      type: "fixed",
      rows: [
          {
              cols: [
                  {
                    span: 4,
                    components: <ProfileBrief user={data?.user }/>
                  },
                  {
                    span: 8,
                    components: <Biodata bio={data} userId={data?._id}/>
                  }
              ]
          }
      ]
    }
  ]

  return (
    <Default layoutPayload={payload}/>
  )
}

export default User;