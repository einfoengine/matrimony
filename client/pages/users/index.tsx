import axios from 'axios'
import RenderUsers from '../../components/RenderUsers';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../context';
import RecomendedUsers from '../../components/RecomendedUsers';

import Default from '../../Layouts/Default.layout';




const Users = () => {
  const {state} = useContext(LoginContext);
  const [users, setUsers] = useState();
  useEffect(()=>{
    axios.get('http://localhost:3000/api/users', { withCredentials: true }).then((res)=>{
      const users = res.data;
      setUsers(users);
    });
  },[state]);
  
  if(users){
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
                  <h4>Recomended for you</h4>
                  <RecomendedUsers users={users} showLike={true}/>
                  <h4>All users</h4>
                  <RenderUsers users={users} showLike={true}/>
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