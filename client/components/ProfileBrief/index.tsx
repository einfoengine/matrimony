import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';


const ProfileBrief = ({user}:{user:object}) => {
  const [userDetails, setUserDetails] = useState();
  const [profilePic, setProfilePic] = useState();
  const [avatar, setSelectedFile] = useState(null);
  const router = useRouter();
  const date = new Date();
  let year = date.getFullYear();


  useEffect(()=>{
    const data = axios.get(`/api/users/user/${user}`).then((res)=>{
      console.log(res?.data)
      setUserDetails(res?.data);
      setProfilePic(res?.data?.avatar);
    });
    console.log("User Details ", userDetails);
    console.log("User ", user);
  },[user]);


  if(userDetails){
    return (
      <div className='ex-component border rounded'>
          <figure className="p-3">
              <Link href={`/users/gallery/${userDetails?._id}`}><img src={`http://localhost:8000/static/images/${profilePic}`} layout='responsive' width={50} height={50}/></Link>
              <h4 className='d-inline-block'>{userDetails?.name}</h4>
              <Link href={`/users/gallery/${userDetails?._id}`}><button type='button' className='btn btn-info'>See pictures</button></Link>
              <div>User ID - {userDetails?._id}</div>
              <hr />
              <div className="">
                  <div>Email - {userDetails?.user_name}</div>
                  <div>Age - {year - Number(userDetails?.dob)}</div>
                  <div>City - {userDetails?.city}</div> 
                  <div>Religion - {userDetails?.religion}</div>
              </div>
          </figure>
      </div>
    )
  }
  <h3 className='text-center'>User undefined!</h3>
}

export default ProfileBrief