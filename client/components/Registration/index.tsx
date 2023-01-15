import { useState, useContext } from "react";
import  axios from "axios";
import { useRouter } from "next/router";
import { LoginContext } from "../../context";

// const [userName, serEmailAddress] = useState('')
const Registration = () => {
  const [user_name, setUserName] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [city, setCity] = useState('')
  const [religion, setReligion] = useState('')
  const [gender, setGender] = useState('')
  const [nid, setNid] = useState('')
  const [profession, setProfession] = useState('')
  const router = useRouter();
  const {state, dispatch} = useContext(LoginContext);
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try{
      const data = await axios.post('http://localhost:8000/api/users/registration', {name, dob, religion, city, user_name, password, gender, phone_number, profession, nid});
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
      console.log("Registration failed!")
      console.log(err);
    }
  }

  return (
    <div className="">
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="reg-phone-number" className="form-label">Email</label>
            <input type="email" className="form-control" id="reg-phone-number" onChange={e=>setUserName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="reg-password" className="form-label">Password</label>
            <input type="password" className="form-control" id="reg-password" onChange={e=>setPassword(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="reg-password" className="form-label">Phone number</label>
            <input type="number" className="form-control" id="reg-password" onChange={e=>setPhoneNumber(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="reg-name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="reg-name" onChange={e=>setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="reg-birth-year" className="form-label">Birth year</label>
            <input type="text" className="form-control" id="reg-birth-year" onChange={e=>setDob(e.target.value)} placeholder="Your birth year only."/>
          </div>
          <div className="mb-3">
            <label htmlFor="profession" className="form-label">Profession</label>
            <select className="form-select" aria-label="Your preferred profession" onChange={(e)=>{setProfession(e.target.value)}}>
                <option>Select</option>
                <option value="Small-business">Small-business</option>
                <option value="Business">Business</option>
                <option value="Industrialist">Industrialist</option>
                <option value="Doctor">Doctor</option>
                <option value="Engineer">Engineer</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Programmer">Programmer</option>
                <option value="BCS-Officer">BCS-Officer</option>
                <option value="Army-officer">Army-officer</option>
                <option value="Gvt-officer">Gvt officer</option>
                <option value="Gvt-service">Gvt service</option>
                <option value="Bank-officer">Bank officer</option>
                <option value="Corporate">Corporate</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="division" className="form-label">City</label>
            <select className="form-select" aria-label="Your preferred division" onChange={(e)=>{setCity(e.target.value)}}>
                <option>Select</option>
                <option value="dhaka">Dhaka</option>
                <option value="khulna">Khulna</option>
                <option value="chittagong">Chittagong</option>
                <option value="barishal">Barishal</option>
                <option value="sylhet">Sylhet</option>
                <option value="rangpur">Rangpur</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="mymenshing">Mymenshing</option>
                <option value="komilla">Komilla</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="reg-religion" className="form-label">Religion</label>
            <select id="inputRegistration" className="form-select" onChange={(e)=>{setReligion(e.target.value)}}>
              <option value="">Select</option>
              <option value="islam">Islam</option>
              <option value="isaee">Isaee</option>
              <option value="shanatan">Shanatan</option>
              <option value="buddha">Buddha</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="reg-nid" className="form-label">Nid</label>
            <input type="nid" className="form-control" id="reg-nid" onChange={e=>setNid(e.target.value)}/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="nt-reg-seeking" className="form-label">Looking For</label>
            <select name="seeking" id="nt-reg-seeking" className="form-control" onChange={e=>setGender(e.target.value)}>
              <option value="0">Select One</option>
              <option value="female">Groom</option>
              <option value="male">Bride</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary d-block mb-3" data-bs-dismiss="modal" aria-label="Close" onSubmit={handleSubmit}>Submit</button>
          <div className="ml-3 d-inline-block">
            if you have already an account, <u><a href="#">login</a></u> in stead.
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration