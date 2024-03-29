import {BsHouses} from 'react-icons/bs';
const Biodata = ({bio}:{bio: object | null, userId: any}) => {    
  return (
    <div className="sam-component sam-bio-details">
        
        <div className="border rounded p-3 mb-3 pt-2 pb-2 mt-0">
            <h4>About me</h4>
            <span>{bio?.about}</span>
        </div>
        <div className="border rounded p-3 mb-3 pt-2 pb-2 mt-0">
            <h4>Preferance for my mate</h4>
            <span>{bio?.seeking}</span>
        </div>
        <div className="border rounded p-3 mb-3 pt-2 pb-2 mt-0">
            <h4>Family information</h4>
            <div className="col-7">
                <h6>Fathers Name</h6>
                <span>{bio?.fathers_name}</span>
            </div>
            <div className="col-5">
                <h6>Profession</h6>
                <span>{bio?.fathers_profession}</span>
            </div>
            
            <div className="col-7">
                <h6>Mothers Name</h6>
                <span>{bio?.mothers_name}</span>
            </div>
            <div className="col-5">
                <h6>Profession</h6>
                <span>{bio?.mothers_profession}</span>
            </div>
            <div className="col-12">
                <h6>Parents Professional Details</h6>
                <span>{bio?.parents_profession}</span>
            </div>
            <div className="col-12">
                <h6>Syblings</h6>
                <span>{bio?.syblings}</span>
            </div>
            <div className="col-12">
                <h6>Relatives</h6>
                <span>{bio?.relative}</span>
            </div>
        </div>
        <div className="mb-3 sam-basic-info">
            <div className="row">
                <div className="col-4">
                    <div className="border rounded p-3">
                        <h4>Address:</h4>
                        <div>
                            <h6 className="mb-1 d-block">Present Address</h6>
                            <span>{bio?.present_address}</span>
                        </div>
                        <div>
                            <h6 className="mb-1 mt-3 d-block">Present Address</h6>
                            <span>{bio?.parmenent_address}</span>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="border rounded p-3">
                        <h4>Educational qualification</h4>
                        <span>{bio?.educaton}</span>
                    </div>
                </div>
                <div className="col-4">
                    <div className="border rounded p-3">
                        <h4>Professional Information</h4>  
                        <span>{bio?.profession}</span>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Biodata