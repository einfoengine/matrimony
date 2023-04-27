// import axios from 'axios'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const RenderUsers = ({users, showLike, showMessage, showBio, liked}:{liked: any, user:any, users:any, handleLike: any, showLike: true|false, showMessage: true|false, showBio: true|false}) => {
  const [status, setStatus]=useState();
  const [slide, setSlide]=useState({state: "closed"})
  const [likedUsers , setLikedUsers] = useState();
  const d = new Date();
  let y = d.getFullYear();

  useEffect(()=>{
    const token = jwt_decode(JSON.parse(window.localStorage.getItem("user")).token)
    setStatus(token);
  },[]);

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
    <div id='sam-users' className='theme-flex-4 sam-component'>
      {console.log("likedUsers --> ", liked)}
    {
      users.map((e:any)=>{
        return (
          <div className='sam-user border rounded' key={'user_id_'+e._id}>
            <figure>
              {e.avatar
                &&
                (status?.status!=='verified'?
                <img src={`http://localhost:8000/static/images/${e?.avatar}`} layout='responsive' className='img-fluid' user_id={e._id} onClick={(e)=>{
                  alert("You are Not Verified!", slide);
                }}/>
                :
                <Link href={`http://localhost:3000/users/${e._id}`} passHref>
                  <img src={`http://localhost:8000/static/images/${e?.avatar}`} layout='responsive' className='img-fluid' user_id={e._id} />
                </Link>
              )}
              <span className='badge bg-success sam-verify'>{e?.status?"Verified":"Not verified"}</span>  
              <div className="sam-user-info">
                {status?.status==='verified'?<Link href={`http://localhost:3000/users/${e._id}`} passHref>
                  <h4 className='mt-3'>{e?.status === 'verified' ? e?.name.split(" ") : e?.name.split(" ")[0]}</h4>
                </Link>:<h4 className='mt-3'>{e?.status === 'verified' ? e?.name.split(" ") : e?.name.split(" ")[0]} - {y - Number(e?.dob)}</h4>}
                {status?.status&&<span>User ID - {e?._id}</span>}
                <div>Profession - {e?.profession}</div>
                {status?.status === 'verified' && <div>NID - {e?.nid}</div>}
                <div>Lives in - {e?.city}</div>
                <div>Religion - {e?.religion}</div>
                {status?.status==='verified' && <div>Email - {e?.user_name}</div>}
              </div>
              {
                showLike===true
                &&
                <>
                  {/* hi */}
                  <button type='button' className={`sam-btn-like ${liked?.includes(e._id)&&'sam-liked'}`} onClick={()=>{handleLike(e?._id)}}>
                      {/* like */}
                      <FontAwesomeIcon icon={faHeart} className='sam-icon'/>
                  </button>
                </>
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
        )
      })
    }
      {/* <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
      </div> */}
    </div>
  )}

export default RenderUsers
