import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AvatarEditor from 'react-avatar-editor';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useRouter } from 'next/router';

const BioBrief = ({ user }: { user: object }) => {
  const [userDetails, setUserDetails] = useState();
  const [profilePic, setProfilePic] = useState();
  const [avatar, setSelectedFile] = useState(null);
  const router = useRouter();
  const date = new Date();
  let year = date.getFullYear();

  const editorRef = useRef();

  useEffect(() => {
    const data = axios.get(`/api/users/user/${user}`).then((res) => {
      setUserDetails(res?.data);
      setProfilePic(res?.data?.avatar);
    });
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', avatar);
    try {
      const response = await axios({
        method: 'post',
        url: '/api/users/user/avatar',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      router.reload(window?.location?.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = () => {
    // if (editorRef.current) {
    //   const canvas = editorRef.current.getImageScaledToCanvas();
    //   canvas.toBlob((blob) => {
    //     const blobURL = URL.createObjectURL(blob);
    //     console.log(blobURL);
    //     setSelectedFile(blobURL);
    //   });
    // }
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob(async (blob) => {
        const croppedImageFile = new File([blob], 'cropped-image.png', { type: 'image/png' });
  
        const formData = new FormData();
        formData.append('avatar', croppedImageFile);
  
        try {
          const response = await axios.post('/api/users/user/avatar', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
  
          // Handle the response from the server as needed
          console.log('Image upload response:', response);
  
          // Optionally reload the page or perform other actions
          router.reload(window?.location?.pathname);
        } catch (error) {
          console.error('Image upload error:', error);
        }
      }, 'image/png');
    }
  };

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  if (userDetails) {
    return (
      <div className="sam-component border rounded sam-profile-brif">
        {console.log("avatar: ", avatar)}


        <figure className="p-3">
          <div>
          <AvatarEditor
            ref={editorRef}
            image={avatar?avatar:`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/static/images/${profilePic}`}
            width={750}
            height={750}
            border={1}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1}
            rotate={0}
          />
            {/* <h6 className="mt-4">Upload profile picture</h6> */}
            <form onSubmit={handleSubmit}>
              <div className="custom-file input-group">
                <input
                  type="file"
                  name=""
                  id="profilePicInput"
                  className="file-pro-pic custom-file-input form-control"
                  onChange={handleFileSelect}
                />
                {/* <button type="submit" className="input-group-text btn-primary">
                  Submit
                </button> */}
                <button className="input-group-text btn-primary" onClick={handleButtonClick}>Set Image</button>
              </div>
            </form>
          </div>
          {/* <img
            src={`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/static/images/${profilePic}`}
            layout="responsive"
            width={50}
            height={50}
          /> */}
          <h4 className="d-inline-block">{userDetails?.name}</h4>
          {/* <Link href={`/users/gallery/${userDetails?._id}`}><button type='button' className='btn btn-info'>See pictures</button></Link> */}
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
    );
  }

  return <h3 className="text-center">User undefined!</h3>;
};

export default BioBrief;
