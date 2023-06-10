import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context";
import styles from "../../styles/MainNav.module.css";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainNav = () => {
  const {state} = useContext(LoginContext);
  const [user, setUser] = useState();
  // const router = useRouter();

  useEffect(()=>{
    axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_CLIENT_PORT}/api/users/user/${state?.user?._id}`).then((res)=>{
      setUser(res?.data);
    });
  },[state]);

  const notify = () => toast("To find partner, login first!");
  return (
    <>
      <nav className={styles.exbg}>
        <Link href={'/'}><a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Home</a></Link>
        {/* {state.user && <Link href={`/biodata?user=${state?.user?._id}`}><a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Biodata</a></Link>} */}
        {/* {state.user?.biodata === "complete" && <Link href={'/users'}><a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Users</a></Link>} */}
        {
          user?._id?
          <Link href={'/users'}><a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">See biodatas</a></Link>
          :
          <a onClick={notify} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">See biodatas</a>
        }
      </nav>
      <ToastContainer />
    </>
  )
}

export default MainNav
