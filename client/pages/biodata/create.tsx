import type { layoutPayload } from "../../types/global.type"
import BiodataForm from "../../components/Biodata/create"
import Default from "../../Layouts/Default.layout"
import ProfileBrief from "../../components/ProfileBrief"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { LoginContext } from "../../context"

const Biodata = ({data, userId}) => {
  const [user, setUser] = useState<object|null>(userId);
  
  const handlePpSubmit = (e) => {
    e.preventDefault();
    const res = axios.post('http://localhost:8000/api/upload', );
  }
  
  const payload:layoutPayload = [
    {
      id:"ex-registration",
      name: "ex-registration",
      className: "",
      type: "fixed",
      rows: [
          {
              cols: [
                  {
                    span: 4,
                    components: <>
                    <ProfileBrief user={user}/>
                    </>
                  },
                  {
                    span: 8,
                    components: <BiodataForm bio={data} userId={userId}/>
                  }
              ]
          }
      ]
    }
  ]
 
  
  return (
    <div className="ex-page ex-page-registration">
      <Default layoutPayload = {payload}/>
    </div>
  )
}

export default Biodata

export async function getServerSideProps (req, res) { 
  const {data} = await axios.get('http://localhost:8000/api/user/biodata', {params: req.query});
  return {
    props: {
     data, userId: req.query.user
    }
  }
}