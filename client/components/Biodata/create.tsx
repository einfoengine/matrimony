import { useEffect, useState } from "react";
import axios from 'axios';
import Link from "next/link";
import { useRouter } from "next/router";

const CreateBiodata = ({bio, userId}:{bio: object | null, userId: any}) => {
    const router = useRouter();
    const [present_address, setPresentAddress] = useState(bio?.present_address);
    const [parmenent_address, setPermanentAddress] = useState(bio?.present_address);
    const [city, setCity] = useState(bio?.city);
    const [educaton, setEducation] = useState(bio?.educaton);
    const [profession, setProfssion] = useState(bio?.profession);
    const [fathers_name, setFathersName] = useState(bio?.fathers_name);
    const [fathers_profession, setFathersProfsssion] = useState(bio?.fathers_profession);
    const [mothers_name, setMothersName] = useState(bio?.mothers_name);
    const [mothers_profession, setMothersProfsssion] = useState(bio?.mothers_profession);
    const [parents_profession, setParentsProfession] = useState(bio?.parents_profession);
    const [syblings, setSyblings] = useState(bio?.syblings);
    const [relative, setRelative] = useState(bio?.relative);
    const [seeking, setLookingForDetails] = useState(bio?.seeking);
    const [about, setAboutSelf] = useState(bio?.about);

    const handleSubmit = async(e:any) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/user/biodata',{user: userId , present_address, parmenent_address, city, educaton, profession, fathers_name, fathers_profession, mothers_name, mothers_profession, parents_profession, relative, syblings, seeking, about});
            router.push(`/biodata?user=${userId}`);
            console.log("Bio response", response);
        } catch (err) {
            alert("Something wrong! Biodata create/edit error: ");
            console.log(err);
        }
    }
  return (
    <div className="sam-component sam-registration d-block">  
        <form onSubmit={handleSubmit}>
            <div className="border rounded p-3 mb-3 pt-2 pb-2 mt-0">
                <h4>Parmanent Address</h4>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Present Address</label>
                    <input type="text" className="form-control" id="inputAddress" name="inputAddress" placeholder="1234 Main St" defaultValue={bio?.present_address} onChange={(e)=>setPresentAddress(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" name="inputAddress2" placeholder="Apartment, studio, or floor" defaultValue={bio?.parmenent_address} onChange={e=>setPermanentAddress(e.target.value)}/>
                </div>
            </div>
            <div className="border rounded p-3 mb-3 pt-2 pb-2 mt-0">
                <h4>Educational qualification</h4>
                <div className="form-floating">
                    <textarea name="" id="" cols="30" rows="10" className="form-control" onChange={(e)=>{setEducation(e.target.value)}} defaultValue={bio?.educaton}></textarea>
                </div>
            </div>
            <div className="border rounded p-3 mb-3 pt-2 pb-2 mt-0">
                <h4>Professional Information</h4>    
                    <div className="form-floating">
                        <textarea name="" id="" cols="30" rows="10" className="form-control" onChange={e=>setProfssion(e.target.value)} defaultValue={bio?.profession}></textarea>
                    </div>
            </div>
            <div className="border rounded p-3 mb-3 pt-2 pb-2 mt-0">
                <h4>Family information</h4>
                <div className="col-7">
                    <label className="form-label">Fathers Name</label>
                    <input id="bio-family-info" name="bio-family-info" type="text" className="form-control" placeholder="Name" defaultValue={bio?.fathers_name} onChange={e=>setFathersName(e.target.value)}/>
                </div>
                <div className="col-5">
                    <label className="form-label">Profession</label>
                    <select name="bio-father-profession" id="" className="form-select" placeholder="Select profession" onChange={e=>setFathersProfsssion(e.target.value)}>
                        <option value="private">Select one</option>
                        <option value="private" selected={bio?.fathers_profession==="private"&&true}>private service</option>
                        <option value="bank" selected={bio?.fathers_profession==="bank"&&true}>Bank high official</option>
                        <option value="gvt-a" selected={bio?.fathers_profession==="gvt-a"&&true}>GVT Job</option>
                        <option value="gvt-b" selected={bio?.fathers_profession==="gvt-b"&&true}>GVT high official</option>
                        <option value="multinational-b" selected={bio?.fathers_profession==="multinational-b"&&true}>Job in miltinational company</option>
                        <option value="multinational-a" selected={bio?.fathers_profession==="multinational-a"&&true}>Multinational company high official</option>
                        <option value="small-business" selected={bio?.fathers_profession==="small-business"&&true}>Small business</option>
                        <option value="medium-business" selected={bio?.fathers_profession==="medium-business"&&true}>Medium business</option>
                        <option value="large-business" selected={bio?.fathers_profession==="large-business"&&true}>Large business</option>
                        <option value="family-business" selected={bio?.fathers_profession==="family-business"&&true}>Home maker</option>
                    </select>
                </div>
                
                <div className="col-7">
                    <label className="form-label">Mothers Name</label>
                    <input id="bio-mothers-name" name="bio-mothers-name" type="text" className="form-control" placeholder="Name" defaultValue={bio?.mothers_name} onChange={e=>setMothersName(e.target.value)}/>
                </div>
                <div className="col-5">
                    <label className="form-label">Profession</label>
                    <select name="bio-mother-profession" id="bio-mother-profession" className="form-select" onChange={e=>setMothersProfsssion(e.target.value)}>
                        <option value="home-maker" selected={bio?.mothers_profession==="home-maker"&&true}>Home maker</option>
                        <option value="private" selected={bio?.mothers_profession==="private"&&true}>private service</option>
                        <option value="bank-a" selected={bio?.mothers_profession==="bank-a"&&true}>Bank high official</option>
                        <option value="gvt-b" selected={bio?.mothers_profession==="gvt-b"&&true}>GVT Job</option>
                        <option value="gvt-a" selected={bio?.mothers_profession==="gvt-a"&&true}>GVT high official</option>
                        <option value="multinational-a" selected={bio?.mothers_profession==="multinational"&&true}>Job in miltinational company</option>
                        <option value="multinational-a" selected={bio?.mothers_profession==="multinational-b"&&true}>Multinational company high official</option>
                        <option value="small-business" selected={bio?.mothers_profession==="small-business"&&true}>Small business</option>
                        <option value="medium-business" selected={bio?.mothers_profession==="medium-business"&&true}>Medium business</option>
                        <option value="large-business" selected={bio?.mothers_profession==="large-business"&&true}>Large business</option>
                    </select>
                </div>
                <div className="col-12">
                    <label className="form-label">Parents Professional Details</label>
                    <textarea id="relative" className="form-control" name="relative" defaultValue={bio?.relative} onChange={e=>setParentsProfession(e.target.value)}></textarea>
                </div>
                <div className="col-12">
                    <label className="form-label">Syblings</label>
                    <textarea id="relative" className="form-control" name="relative" defaultValue={bio?.relative} onChange={e=>setSyblings(e.target.value)}></textarea>
                </div>
                <div className="col-12">
                    <label className="form-label">Relatives</label>
                    <textarea id="relative" className="form-control" name="relative" defaultValue={bio?.relative} onChange={e=>setRelative(e.target.value)}></textarea>
                </div>
            </div>
            <div className="border rounded p-3 mb-3 pt-2 pb-2 mt-0">
                <h4>What type of partner are you looking for?</h4>
                <div className="form-floating">
                    <textarea id="bio-looking-for-type" name="bio-looking-for-type" className="form-control" placeholder="Leave a comment here" defaultValue={bio?.seeking} onChange={e=>setLookingForDetails(e.target.value)}></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
            </div>
            <div className="border rounded p-3 mb-3 pt-2 pb-2 mt-0">
                <h4>Write about yourself</h4>
                <div className="form-floating">
                    <textarea id="bio-yourself" name="bio-yourself" className="form-control" placeholder="Leave a comment here" defaultValue={bio?.about} onChange={e=>setAboutSelf(e.target.value)}></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
            </div>
            <button key="bio-form-submission" className="row btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CreateBiodata