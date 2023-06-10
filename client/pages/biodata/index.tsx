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
      className: "no-padding",
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
                    components: <>
                      <BiodataForm bio={data} userId={userId}/>
                      <Link href={`/biodata/create/?user=${userId}`}>
                        <a className="btn btn-info">Edit</a>
                      </Link>
                    </>
                  }
              ]
          }
      ]
    }
  ]
 
  
  return (
    <div className="ex-page vd-top-space">
      <Default layoutPayload = {payload}/>
    </div>
  )
}

export default Biodata
