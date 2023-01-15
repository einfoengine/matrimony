import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
    const [gallery, setSelectedFile] = useState();
    
    const date = new Date();
    let year = date.getFullYear();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("gallery", gallery);
        try {
          const response = await axios({
            method: "post",
            url: "/api/users/user/gallery",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch(error) {
          console.log(error)
        }
      }

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0])
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="custom-file input-group">
              <input type="file" name="" id="profilePicInput" className="file-pro-pic custom-file-input form-control" onChange={handleFileSelect}/>
              <button type="submit" className="input-group-text btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ImageUploader