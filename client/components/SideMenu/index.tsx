import React from 'react';
import Link from 'next/link';

const SideMenu = ({active}) => {
  return (
    <div className='component'>
        <ul className='list-group'>
            <li className='list-group-item  '><Link href="/dashboard"><a>Account</a></Link></li>
            <li className='list-group-item'><Link href="/gallery"><a>My Gallery</a></Link></li>
            <li className='list-group-item'><Link href="/message"><a>Message</a></Link></li>
            <li className='list-group-item'><Link href=""><a>Choice List</a></Link></li>
        </ul>
    </div>
  )
}

export default SideMenu