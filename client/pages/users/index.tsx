import axios from 'axios'
import RenderUsers from '../../components/RenderUsers';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../context';
import RecomendedUsers from '../../components/RecomendedUsers';

import Default from '../../Layouts/Default.layout';




const Users = () => {
  const {state} = useContext(LoginContext);
  const [users, setUsers] = useState();
  const [liked, setLiked] = useState();
  useEffect(()=>{
    axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/users`, { withCredentials: true }).then((res)=>{
      const users = res.data;
      setUsers(users);
    });
    if(state.user){
      try {
        axios.get('/api/users/liked/', {params: {user: state.user._id}}).then((res)=>{
          setLiked(res.data);
        });
      } catch (error) {
        console.log("Dashboard find user rejection - ", error);
      }
    }
  },[state]);
  
  if(users){
    console.log("Liked:", liked);
    const likedIds = liked?.map((e)=>{
      return e._id
    })
    const payload:layoutPayload = [
      {
        id:'hero',
        name: "hero",
        className: "no-padding",
        type: 'fluid',
        rows: [
          {
            cols:[
              {
                components: <>
                  <h4>All users</h4>
                  <RenderUsers users={users} liked={likedIds} showLike={true}/>
                </>
              },
            ]
          },
        ],
      }
    ]
    return (
      <section id="sam-users" className="sam-users sam-section">
        <div className='container'>
          <Default layoutPayload={payload}/>
        </div>
      </section>
    )
  }
}

export default Users;