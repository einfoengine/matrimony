import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import SideMenu from "../../components/SideMenu";
import MessageNav from "../../components/MessageNav";

const ComposeMessage = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({});
  const [user, setUser] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(payload!==undefined){
      try {
        const req = await axios.post(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_HOST}/api/messages/create`, payload);
      } catch (err) {
        console.log(`Client error on message - ${err}`);
      }
    }else{
      alert("Write your message first");
    }
  }

  useEffect(()=>{
    if(!user){
      setUser(JSON.parse(window.localStorage.getItem("user"))._id)
    }
  },[]);

  useEffect(()=>{
    
      setPayload({...payload, 
        sender: user,
        receiver: router.query.receiver,
        status: 1
      })
  },[user]);

  const changeMessage = useCallback((e)=>{

    setPayload({...payload, message: e.target.value})
  }, [payload])

  return (
    <section className="sam-section">
      
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SideMenu active={"message"}/>
          </div>
          {/* content */}
          <div className="col-md-9">
            <MessageNav/>
            {/* A-2 */}
            <div className="m-dev-element rounded border p-3">
                <h3>New Messages</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">User ID</label>
                    {router.query.receiver!==undefined?
                      <input type="email" className="form-control" id="exampleFormControlInput1" defaultValue={router.query.receiver} disabled/>
                      :
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example: 12342ce561e683f0a2b10e1234"/>
                    }
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} onChange={changeMessage}></textarea>
                  </div>
                  <button key="bio-form-submission" className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
          </div>
          {/* End message position A-1 */}
        </div>
      </div>
    </section>
  )
}

export default ComposeMessage
