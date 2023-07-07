import type { layoutPayload } from "../../types/global.type"
import BiodataForm from "../../components/Biodata"
import Default from "../../Layouts/Default.layout"
import ProfileBrief from "../../components/ProfileBrief"
import { useState, useContext } from "react"
import Link from "next/link"
import axios from "axios"
import { LoginContext } from "../../context"
// import BioBrief from "../../components/BioBrif"

export async function getServerSideProps (req, res) { 
  const {data} = await axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/user/biodata`, {params: req.query});
  return {
    props: {
     data, userId: req.query.user
    }
  }
}

const Biodata = ({data, userId}:{data: object, userId: object}) => {
  const [user, setUser] = useState<object|null>(userId);

  const userContext = useContext(LoginContext);
  const payload:layoutPayload = [
    {
      id:"ex-registratio",
      name: "ex-registratio",
      className: "sam-biodata",
      type: "fixed",
      rows: [
          {
              cols: [
                  {
                    span: 4,
                    components: <><ProfileBrief user={user}/></>
                    // components: <><BioBrief user={user}/></>
                  },
                  {
                    span: 8,
                    components: <div className="sam-bio-wrapper">
                      <div className="sam-tab-nav mb-3">
                        <button className="btn btn-info">Information</button>
                        <Link href={`/users/gallery/${userId}`}>
                          <button className="btn btn-light">Gallery</button>
                        </Link>
                        <Link href={`/biodata/create/?user=${userId}`}>
                          <a className="btn btn-danger">Edit</a>
                        </Link>
                      </div>
                      <BiodataForm bio={data} userId={userId}/>
                    </div>
                  }
              ]
          }
      ]
    }
  ]
 
  
  return (
    <div className="sam-page sam-page-bio">
      <Default layoutPayload = {payload}/>
    </div>
  )
}

export default Biodata
