import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import RenderUsers from '../../components/RenderUsers';

const UsersBySearch = ({users}) => {
  return (
    <section id='sam-search' className='sam-search'>
      <div className="sam-container container">
        <RenderUsers users={users}/>
      </div>
    </section>
  )
}

export default UsersBySearch

export async function getServerSideProps(context:any){
  const {query} = context;
  const users = await axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/user/biodata/search`, {
    params: query
  });
  return{
      props: {users:users.data}
  }
}

