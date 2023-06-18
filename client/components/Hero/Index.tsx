import Link from 'next/link'
import React, { useContext } from 'react'
// import Image from 'next/image'
import Modal from '../../Elements/Modal'
import Registration from '../Registration'
import { LoginContext } from '../../context'

const Hero = ({
    className,
    childWrapClass,
    title,
    subTitle,
    text,
    link,
    backgroundImage,
    colorOverly,
}:{
    className: string
    childWrapClass: string,
    title: string,
    subTitle: string,
    text: string,
    link: string,
    backgroundImage: string,
    colorOverly: string,
}) => {
  let background = require(`../../public/images/${backgroundImage}`)
  let {state} = useContext(LoginContext);
  
    return (
      <div className={`ex-element ex-banner ${className}`} style={{backgroundImage: `url(${background.default.src})`}}>
        <div className={childWrapClass} style={{backgroundColor: colorOverly}}>
          <h3 className='sam-jumbotron-title ex-text-white'>{title}</h3>
          <h4 className='sam-jumbotron-sub-title ex-text-dal-white'>{subTitle}</h4>
          <p className='sam-jumbotron-paragraph ex-text-dal-white'>{text}</p>        
          {state.user
          ?
          <Link href={`/biodata/?user=${state.user._id}`}>
            <a className="btn btn-primary">
              Biodata
            </a>
          </Link>
          :
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registrationModal">
            Register
          </button>
        }
        </div>
          <Modal modalId="registrationModal" modalTitle='Registation form - Step 1' modalSubmitText="Register">
              <Registration />
          </Modal>
      </div>
    )
}

export default Hero