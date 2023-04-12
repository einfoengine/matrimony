// import axios from 'axios'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";

const RecomendedUsers = ({users, showLike, showMessage, showBio}:{user:any, users:any, handleLike: any, showLike: true|false, showMessage: true|false, showBio: true|false}) => {
  const [status, setStatus]=useState();
  const [slide, setSlide]=useState({state: "closed"})
  const d = new Date();
  let y = d.getFullYear();

  useEffect(()=>{
    const token = jwt_decode(JSON.parse(window.localStorage.getItem("user")).token)
    setStatus(token);
    console.log("Local", token);
  },[]);
  
  useEffect(()=>{

  },[slide]);

  const handleLike = async (e:any) => {
    try {
      const like = await axios.put('/api/users/like/',{
        user: JSON.parse(window.localStorage.user)._id,
        like: e
      });
      const sendBio = await axios.post('/api/messages/create', {
        sender: JSON.parse(window.localStorage.user)._id,
        receiver: e,
        status: 1,
        message: `Hello, greetings! I really liked your profile. Would you please have a look at my profile? Regards.`
      });
    } catch (err) {
      console.log('Like err - ', err)
    }
  }


  return (
    <div className='theme-grid-3'>
    {
      users.map((e:any)=>{
        return <div className='sam-component border rounded' key={'user_id_'+e._id}>
          <figure className="p-3">
            {e.avatar&&
            (
              status?.status!=='verified'
              ?
              <img src={`http://localhost:8000/static/images/${e?.avatar}`} layout='responsive' className='img-fluid' user_id={e._id} 
              onClick={(e)=>{
                alert("You are Not Verified!", slide)}
              }/>
              :
              <Link href={`http://localhost:3000/users/${e._id}`} passHref>
                <img src={`http://localhost:8000/static/images/${e?.avatar}`} layout='responsive' className='img-fluid' user_id={e._id} />
              </Link>
            )}
            {status?.status==='verified'?<Link href={`http://localhost:3000/users/${e._id}`} passHref>
                <h4 className='mt-3'>{e?.status === 'verified' ? e?.name.split(" ") : e?.name.split(" ")[0]}</h4>
            </Link>:<h4 className='mt-3'>{e?.status === 'verified' ? e?.name.split(" ") : e?.name.split(" ")[0]}</h4>}
            <span className='badge bg-success'>{e?.status?"Verified":"Not verified"}</span>  
            <div className="">
              <div>Profession - {e?.profession}</div>
              {status?.status==='verified' && <div>Email - {e?.user_name}</div>}
            </div>
            {
              showLike===true
              &&
              <button type='button' className='btn-primary mt-2' onClick={()=>{handleLike(e?._id)}}>Like</button>
            }
            {
              showMessage===true
              &&
              <Link href={
                {
                  pathname: "/message/compose",
                  query: {
                    receiver: e._id,
                  }
                }
              }>
                <a className='btn btn-primary'>Send Message</a>
              </Link>
            }
          </figure>
        </div>
      })
    }
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {slide.state + " - " + slide.user}

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

export default RecomendedUsers
