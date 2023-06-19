import axios from "axios";
import { useRouter } from "next/router";
import { useState, useContext, useEffect} from "react";
import { LoginContext } from "../../context";

const LoginForm = () => {
    const [user_name, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {state, dispatch} = useContext(LoginContext);
    
    const router = useRouter();
        
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try{
            const response = await axios.post('/api/users/login', {user_name, password});
            const {data: {user, token}} = response;
            console.log("Login response *** ", user.biodata);
            localStorage.setItem("user", JSON.stringify({_id: user._id, biodata: user.biodata, token}));
            dispatch({
                type: 'login',
                payload: {_id: user._id, biodata: user.biodata, token},
            })
            if(user.biodata!=="complete"){
                router.push(`/biodata/create/?user=${user._id}`);
            }
        }catch(err){
            console.log("Login Error!", err);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="ex-login-id" className="form-label">Email address</label>
                    <input type="email" className="form-control ex-regirtration-name" id="ex-login-id" aria-describedby="ex-regirtration-name" onChange={(e)=>{setUserName(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="sam-registration-password" className="form-label">Password</label>
                    <input type="password" className="form-control sam-registration-password" id="sam-registration-password" onChange={e=>setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Submit</button>
            </form>
        </>
    )
}

export default LoginForm;