import Heading from "../../Elements/Heading"
import LoginForm from "../LoginForm"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../context"
import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"


const Login = () => {
  const {state, dispatch} = useContext(LoginContext);
  const [user, setUser] = useState();
  const [profilePic, setProfilePic] = useState();
  const router = useRouter();

  useEffect(()=>{
    axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/users/user/${state?.user?._id}`).then((res)=>{
      setUser(res?.data);
    });
    axios.get(`/api/users/user/${state?.user?._id}`).then((res)=>{
      setProfilePic(res?.data?.avatar);
    });
  },[state]);
  if(user){
    return (
      <div>
      <style jsx>
        {`
          .eie-link{
            cursor:pointer
          }
        `}
      </style>
        {
          state.user
          ?
          <div className="d-flex">
          {console.log(state.user )}
            <img src={`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_HOST}/static/images/${profilePic}`} layout='responsive' width={50} height={50} style={{marginRight: "10px", borderRadius: "50px", background: "rgba(255,255,255,0.2)", padding: "2px"}}/>
            <div className="dropdown">
              <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{user.name}</a>
              <ul className="dropdown-menu">
                <Link href={'/dashboard'}><li className="dropdown-item eie-link"><a>Dashboard</a></li></Link>
                {/* {state.user && <Link href={`/biodata?user=${state?.user?._id}`}><a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Profile</a></Link>} */}
                {state.user && <Link href={`/users/${state?.user?._id}`}><li className="dropdown-item eie-link"><a>Profile</a></li></Link>}
                <Link href={`/message`}><li className="dropdown-item eie-link"><a >Messages</a></li></Link>
                {state.user && <Link href={`/biodata/create/?user=${state?.user?._id}`}><li className="dropdown-item eie-link"><a >Edit Profile</a></li></Link>}
                <li data-bs-toggle="modal" data-bs-target="#logOutModal" className="dropdown-item eie-link"><a>Logout</a></li>
              </ul>
            </div>
          </div>
          :
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
            Login
          </button>
        }
        
        <div className="modal fade" id="loginModal" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <Heading title="Login" className="modal-title"/>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <LoginForm/>
              </div>
              <div className="modal-footer">
                if you dont have an account <a className="text-primary" href="">Signup</a>
              </div>
            </div>
          </div>
        </div>
  
        <div className="modal fade" id="logOutModal" aria-labelledby="logOutModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <Heading title="Logout" className="modal-title"/>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Are you sure to logout?
                <a className="text-primary" href="#" data-bs-dismiss="modal" aria-label="Close" onClick={
                  (e)=>{
                    e.preventDefault();
                    axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/users/logout`).then((res)=>{
                      console.log(res);
                    });
                    dispatch({
                      type: "logout"
                    });
                    localStorage.removeItem("user");
                    router.push('/index');
                  }}>Logout</a>
              </div>
              <div className="modal-footer">
                Thank you for using our app
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;