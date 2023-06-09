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
  const router = useRouter();

  useEffect(()=>{
    axios.get(`http://localhost:3000/api/users/user/${state?.user?._id}`).then((res)=>{
      setUser(res?.data);
    });
  },[state]);

    return (
      <>
        {
          state.user
          ?
          <>
            <div className="dropdown">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{user.name}</a>
              <ul className="dropdown-menu">
                {/* <li data-bs-toggle="modal" data-bs-target="#logOutModal" className="dropdown-item"><a >Logout</a></li> */}
                <Link href={`/biodata?user=${user?._id}`}><a className="dropdown-item">Biodata</a></Link>
                <Link href={`/dashboard`}><a className="dropdown-item">Dashboard</a></Link>
                <li data-bs-toggle="modal" data-bs-target="#logOutModal" className="dropdown-item sam-menu-dropdown"><a >Logout</a></li>
              </ul>
            </div>
          </>
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
                    axios.get(`http://localhost:3000/api/users/logout`).then((res)=>{
                      console.log(res);
                    });
                    dispatch({
                      type: "logout"
                    });
                    localStorage.removeItem("user");
                    router.push('../index');
                  }}>Logout</a>
              </div>
              <div className="modal-footer">
                Thank you for using our app
              </div>
            </div>
          </div>
        </div>
      </>
    )
  
}

export default Login;