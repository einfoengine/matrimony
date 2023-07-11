import axios from 'axios'
import RenderUsers from '../../components/RenderUsers';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../context';
import RecomendedUsers from '../../components/RecomendedUsers';
import AdvanceSearch from '../../components/AdvanceSearch';

import Default from '../../Layouts/Default.layout';




const Users = () => {
  const {state} = useContext(LoginContext);
  const [users, setUsers] = useState();
  const [liked, setLiked] = useState();
  useEffect(()=>{
    axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/users`, { withCredentials: true }).then((res)=>{
      const users = res.data;
      users.map((user:object, index:number)=>{
        console.log(user);
        axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/user/biodata`, {params: {user: user._id}}).then((res)=>{
          users[index].about = res?.data?.about;
        })
        .then(()=>{
          setUsers(users);
        });
      });
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
    const likedIds = liked?.map((e)=>{
      return e._id
    })
    const payload:layoutPayload = [
      {
        // id:'hero',
        name: "main-content",
        // className: "",
        type: 'fixed',
        rows: [
          {
            cols:[
              {
                span: 4,
                className:"sam-side-bar",
                components: <>
                  <h4>Filter users</h4>
                  <AdvanceSearch className={"border rounded p-3"} />
                </>
              },
              {
                span: 8,
                components: <>
                  <h4>Recomended users</h4>
                  <RenderUsers showBio={true} users={users} liked={likedIds} showLike={true}/>
                </>
              },
            ]
          },
        ],
      }
    ]
    return (
      <Default layoutPayload={payload}/>
    )
  }else{
    return(
      <h3>Users not found!</h3>
    )
  }
}

export default Users;