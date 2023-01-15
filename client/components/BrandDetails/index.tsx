import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationPin, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


const BrandDetails = ({brandName, brandAddress, brandContact, brandEmail}:{
    brandName: string,
    brandClassNames?: string,
    brandAddress: string,
    brandAddressClassNames?: string,
    brandContact: string,
    brandContactClassNames?: string,
    brandEmail: string
    brandEmailClassNames?: string
}) => {
  return (
      <>
        <ul>
          <li><h1 className='text-2xl text-center mb-4'>{brandName}</h1></li>
          <li className='text-center'>
            <span className='mr-4'><FontAwesomeIcon icon={faLocationPin} />{brandAddress}</span>
            <span className='mr-4'><FontAwesomeIcon icon={faPhone} />{brandContact}</span>
            <span className='mr-4'><FontAwesomeIcon icon={faEnvelope} />{brandEmail}</span>
          </li>
        </ul>
      </>
    )
}

export default BrandDetails