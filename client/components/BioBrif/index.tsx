import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';


const BioBrief = ({user}:{user:object}) => {
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

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("avatar", avatar);
    try {
      const response = await axios({
        method: "post",
        url: "/api/users/user/avatar",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      router.reload(window?.location?.pathname);
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0])
  }

  if(userDetails){
    return (
      <div className='sam-component border rounded sam-bio-brif'>
        <figure className="p-3">
          <img src={`http://localhost:8000/static/images/${profilePic}`} layout='responsive' width={50} height={50}/>
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
          <div>
            <h6 className="mt-4">Upload profile picture</h6>
            <form onSubmit={handleSubmit}>
              <div className="custom-file input-group">
                <input type="file" name="" id="profilePicInput" className="file-pro-pic custom-file-input form-control" onChange={handleFileSelect}/>
                <button type="submit" className="input-group-text btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </figure>
      </div>
    )
  }
  <h3 className='text-center'>User undefined!</h3>
}

export default BioBrief