const Biodata = ({bio}:{bio: object | null, userId: any}) => {    
  return (
    <div className="ex-component ex-registration d-block">  
        <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
            <h4>Address:</h4>
            <div className="col-12">
                <h6 className="mb-1 d-block">Present Address</h6>
                <span>{bio?.present_address}</span>
            </div>
            <div className="col-12">
                <h6 className="mb-1 mt-3 d-block">Present Address</h6>
                <span>{bio?.parmenent_address}</span>
            </div>
        </div>
        <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
            <h4>Educational qualification</h4>
            <span>{bio?.educaton}</span>
        </div>
        <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
            <h4>Professional Information</h4>  
            <span>{bio?.profession}</span>  
        </div>
        <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
            <h4>Family information</h4>
            <div className="col-7">
                <h6 className="form-label">Fathers Name</h6>
                <span>{bio?.fathers_name}</span>
            </div>
            <div className="col-5">
                <h6 className="form-label">Profession</h6>
                <span>{bio?.fathers_profession}</span>
            </div>
            
            <div className="col-7">
                <h6 className="form-label">Mothers Name</h6>
                <span>{bio?.mothers_name}</span>
            </div>
            <div className="col-5">
                <h6 className="form-label">Profession</h6>
                <span>{bio?.mothers_profession}</span>
            </div>
            <div className="col-12">
                <h6 className="form-label">Parents Professional Details</h6>
                <span>{bio?.parents_profession}</span>
            </div>
            <div className="col-12">
                <h6 className="form-label">Syblings</h6>
                <span>{bio?.syblings}</span>
            </div>
            <div className="col-12">
                <h6 className="form-label">Relatives</h6>
                <span>{bio?.relative}</span>
            </div>
        </div>
        <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
            <h4>What type of partner are you looking for?</h4>
            <span>{bio?.seeking}</span>
        </div>
        <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
            <h4>Write about yourself</h4>
            <span>{bio?.about}</span>
        </div>
    </div>
  )
}

export default Biodata