import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../../context';
import RenderUsers from '../../components/RenderUsers';
import SideMenu from '../../components/SideMenu';

const Dashboard = () => {
  const [userLiked, setUserLiked] = useState();
  const [userLikedBy, setUserLikedBy] = useState(0);
  // const [liked, useState] = useState();
    const {state} = useContext(LoginContext);
    const ctx = useContext(LoginContext);
    useEffect(()=>{
      if(state.user){
        try {
          axios.get('/api/users/liked/', {params: {user: state.user._id}}).then((res)=>{
            setUserLiked(res.data);
          });
          axios.get('/api/users/likedby/', {params: {user: state.user._id}}).then((res)=>{
            setUserLikedBy(res.data);
          });
        } catch (error) {
          console.log("Dashboard find user rejection - ", error);
        }
      }
    },[state?.user?._id]);
    return (
      <section className="sam-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <SideMenu active={"message"}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-9">
                  <div className="border rounded p-3 mb-3">
                    <h6>Your account is not varified</h6>
                  </div>
                  {userLiked !== (null || undefined)&&
                  <RenderUsers users={userLiked} showLike={false} showMessage={true} showBio={false} handleLike={()=>{console.log("No like")}}/>} 
                </div>
                <div className="col-md-3">
                  <div className="border rounded p-3 mb-3">
                    <h6>Your subscription started at Jul 11 2023, it will end Oct 11 2023</h6>
                  </div>
                  <div className="border rounded p-3 mb-3">
                    <h6>{userLikedBy?.length} people liked you</h6>
                  </div>
                  <div className="border rounded p-3 mb-3">
                    <h6>Contact with admins to find your suitable match</h6>
                  </div>
                  <div className="border rounded p-3">
                    <h6>You have 3 new messages</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

export default Dashboard