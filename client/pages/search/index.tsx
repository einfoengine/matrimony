import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import RenderUsers from '../../components/RenderUsers';

const UsersBySearch = ({users}) => {
  return (
    <RenderUsers users={users}/>
  )
}

export default UsersBySearch

export async function getServerSideProps(context:any){
  const {query} = context;
  const users = await axios.get('http://localhost:8000/api/user/biodata/search', {
    params: query
  });
  return{
      props: {users:users.data}
  }
}

