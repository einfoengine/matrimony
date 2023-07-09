import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import AvatarEditor from 'react-avatar-editor';

const BioBrief = ({ user }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [avatar, setSelectedFile] = useState(null);
  const editorRef = useRef();
  const router = useRouter();
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/users/user/${user}`);
        setUserDetails(response.data);
        setProfilePic(response.data?.avatar);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchData();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (avatar) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob(async (blob) => {
        const croppedImageFile = new File([blob], 'cropped-image.png', { type: 'image/png' });

        const formData = new FormData();
        formData.append('avatar', croppedImageFile);

        try {
          const response = await axios.post('/api/users/user/avatar', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });

          console.log('Image upload response:', response);

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

  return (
    <div className="sam-component border rounded sam-profile-brif">
      <figure className="p-3">
        <div>
          <AvatarEditor
            ref={editorRef}
            image={avatar ? avatar : `http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/static/images/${profilePic}`}
            width={750}
            height={750}
            border={1}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1}
            rotate={0}
          />
          <form onSubmit={handleSubmit}>
            <div className="custom-file input-group">
              <input
                type="file"
                name=""
                id="profilePicInput"
                className="file-pro-pic custom-file-input form-control"
                onChange={handleFileSelect}
              />
              <button className="input-group-text btn-primary" type="submit">Set Image</button>
            </div>
          </form>
        </div>
        <h4 className="d-inline-block">{userDetails?.name}</h4>
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
};

export default BioBrief;
