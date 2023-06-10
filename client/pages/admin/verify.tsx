import axios from "axios";
import AdminMenu from "../../components/AdminMenu"
import { useRouter } from "next/router";
import { useState } from "react";

const Verify = () => {
  const [findings, setFindings] = useState();
  const [message, setMessage] = useState();
  const [info, setInfo] = useState();
  const router = useRouter();
  const handleSumit = (e) =>{
    e.preventDefault();
    axios.put(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/users/verify`,{
      user: router.query.id,
      message: message,
      findings: findings,
      status: info
    }).then((res)=>{
      console.log("Status - ",res?.data?.result?.status);
    });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu/>
          </div>
          <div className="col-md-9">
            <form onSubmit={handleSumit}>
              <div className="target-user mb-3">
                <label className="form-label">User ID</label>
                <input type="text" className="form-control" defaultValue={router.query.id} disabled/>
              </div>
              <div className="target-user-info mb-3">
                <label className="form-label">Biodata information</label>
                <select className="form-select mb-3" onChange={(e)=>{setInfo(e.target.value)}}> 
                  <option>Selct</option>
                  <option value="verified">True</option>
                  <option value="failed">False</option>
                </select>
                <label className="form-label">Comment on biodata</label>
                <textarea className="form-control" id="" cols="30" rows="10" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
              </div>
              <div className="target-onground-observation mb-3">
                <label className="form-label">Ongrond findings</label>
                <textarea className="form-control" id="" cols="30" rows="10" onChange={(e)=>{setFindings(e.target.value)}}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verify