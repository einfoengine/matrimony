import React from 'react';
import Link from 'next/link';

const SideMenu = ({active}) => {
  return (
    <div className='component'>
        <ul className='list-group'>
            <li className='list-group-item  '><Link href="/dashboard"><a>Dashboard</a></Link></li>
            <li className='list-group-item'><Link href="/message"><a>Message</a></Link></li>
            <li className='list-group-item'><Link href=""><a>Matches</a></Link></li>
        </ul>
    </div>
  )
}

export default SideMenu