// import axios from 'axios'
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';

const AdminUsersList = ({users, handleLike, showLike, showMessage}:{users:any, handleLike: any, showLike: true|false, showMessage: true|false}) => {

  const handleVerify = (u) => {
    console.log("Verified");
  }
  const handleActive = (u) => {
    console.log("Active");
  }
  const handleDelete = async (u) => {
    const response = await axios.delete(`http://localhost:8000/api/users/user/${u._id}`);
  }
  
  return (
    <div className='container d-flex'>
    {
      users.map((e:any)=>{
        return <div className='sam-component border rounded' key={'user_id_'+e._id}>
          <figure className="p-3">
            <Image src="/images/profiles/user-1.jpg" layout='responsive' width={50} height={50}/>
              <Link href={`http://localhost:3000/users/${e._id}`} passHref >
                <h4>{e?.name}</h4>
              </Link>
              <span>User ID - {e?._id}</span>
              <hr />
              <div className="">
                  <div>Phone - {e?.phone_number}</div>
                  <div>Email - {e?.email}</div>
                  <div>Lives in {e?.city}</div>
              </div>
              {/* {
                showLike===true
                &&
                <button type='button' className='btn-primary' onClick={()=>{handleLike(e?._id)}}>Like</button>
              } */}
              <Link href={{pathname:"/admin/verify", query:{id:e?._id}}}><button type='button' className='btn-primary' onClick={()=>{handleVerify(e)}}>Verify</button></Link>
              <button type='button' className='btn-primary' onClick={()=>{handleActive(e)}}>Active</button>
              <button type='button' className='btn-primary' onClick={()=>{handleDelete(e)}}>Delete</button>
          </figure>
        </div>
      })
    }
    </div>
  )
  }

export default AdminUsersList