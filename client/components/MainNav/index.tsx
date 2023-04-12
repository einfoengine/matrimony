import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../context";
import styles from "../../styles/MainNav.module.css"
const index = () => {
  const {state} = useContext(LoginContext);
  return (
    <>
      <nav className={styles.exbg}>
        <Link href={'/'}><a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Home</a></Link>
        {/* {state.user && <Link href={`/biodata?user=${state?.user?._id}`}><a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Biodata</a></Link>} */}
        {state.user?.biodata === "complete" && <Link href={'/users'}><a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Users</a></Link>}
      </nav>
    </>
  )
}

export default index