import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../../context';
import RenderUsers from '../../components/RenderUsers';
import SideMenu from '../../components/SideMenu';

const Dashboard = () => {
  const [user, setUser] = useState();
  // const [liked, useState] = useState();
    const {state} = useContext(LoginContext);
    const ctx = useContext(LoginContext);
    useEffect(()=>{
      console.log("CTX state",ctx);
      if(state.user){
        try {
          axios.get('/api/users/liked/', {params: {user: state.user._id}}).then((res)=>{
            setUser(res.data);
          });
        } catch (error) {
          console.log("Dashboard find user rejection - ", error);
        }
      }
    },[state?.user?._id]);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <SideMenu active={"message"}/>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-9">
                <div className="bd-component">
                  <h3>Liked</h3>
                  <div>
                    {user !== (null || undefined)&&
                    <RenderUsers users={user} showLike={false} showMessage={true} showBio={true} handleLike={()=>{console.log("No like")}}/>                    } 
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h3>New Messages</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Dashboard