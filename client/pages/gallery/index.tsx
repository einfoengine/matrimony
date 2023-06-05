import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../../context';
import RenderUsers from '../../components/RenderUsers';
import SideMenu from '../../components/SideMenu';
import EasyGallery from '../../components/EasyGallery';
import ImageUploader from '../../components/ImageUploader';

import Default from '../../Layouts/Default.layout';

const Gallery = () => {
    const payload:layoutPayload = [
        {
          id:"ex-registratio",
          name: "ex-registratio",
          className: "no-padding",
          type: "fixed",
          rows: [
              {
                  cols: [
                      {
                        span: 4,
                        components: <>
                        <SideMenu active={"message"}/>
                        </>
                      },
                      {
                        span: 8,
                        components: <>
                          <ImageUploader/>
                          <EasyGallery/>
                        </>
                      }
                  ]
              }
          ]
        }
    ]
    return (
    <div className="container vd-top-space">
        <Default layoutPayload={payload}/>
    </div>
    )
}
  

export default Gallery