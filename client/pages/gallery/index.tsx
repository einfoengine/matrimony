import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../../context';
import RenderUsers from '../../components/RenderUsers';
import SideMenu from '../../components/SideMenu';
import EasyGallery from '../../components/EasyGallery';
import ImageUploader from '../../components/ImageUploader';

const Gallery = () => {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-2">
                <SideMenu active={"message"}/>
            </div>
            <div className="col-md-10">
                <ImageUploader/>
                <EasyGallery/>
            </div>
        </div>
    </div>
    )
}
  

export default Gallery