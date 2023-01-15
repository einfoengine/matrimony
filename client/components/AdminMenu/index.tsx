import React from 'react'
import Link from 'next/link';

const AdminMenu = () => {
  return (
    <div className='component'>
        <ul>
            <li><Link href={'./'}><a>Index</a></Link></li>
            <li><Link href={'/admin/users'}><a>Users</a></Link></li>
            <li><Link href={'/admin/agents'}><a>Agents</a></Link></li>
            <li><Link href={'/admin/verify'}><a>Verify</a></Link></li>
        </ul>
    </div>
  )
}

export default AdminMenu