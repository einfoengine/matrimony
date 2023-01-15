import axios from 'axios'
import AdminUsersList from '../../components/AdminUsersList';
import Login from '../login';
import Link from 'next/link';
import AdminMenu from '../../components/AdminMenu';

const Admin = ({users}:{users:any}) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu/>
          </div>
          <div className="col-md-9">
            <AdminUsersList users={users} />
          </div>
        </div>
      </div>
      {/* <Login/> */}

    </div>
  )
}
  
export default Admin

export async function getStaticProps(){
  const result = await axios.get('http://localhost:8000/api/users');
  const users = result.data;
  return {
    props: {
      users
    }
  }
}