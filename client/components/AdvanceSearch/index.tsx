import Heading from "../../Elements/Heading"
import SubHeading from "../../Elements/SubHeading"
import Link from "next/link"
import { useEffect, useState } from "react"

const AdvanceSearch = ({className}:{className?:string | null}) => {
    const d = new Date();
    let year = d.getFullYear();
    const [params, setParams] = useState({});
    const [queryString, setQueryString] = useState('');
    useEffect(()=>{
        // console.log({...params});
        setQueryString(`${new URLSearchParams(params).toString()}`);
    },[params]);
  return (
      <>
        {/* <SubHeading 
            className="text-center" 
            text="Start your new life from here"
        /> */}
        {/* <Heading 
            title="Find your suitable match"
            className="text-center"
        /> */}
        <div className={`ex-component ex-advance-search ${className}`}>
            <form className="theme-grid">
                <div className="grid-item">
                    <label htmlFor="">Looking for</label>
                    <select id="inputLookingFor" className="form-select" onChange={(e)=>{setParams({...params, gender: e.target.value})}}>
                        <option value="">Select</option>
                        <option value="female">Bride</option>
                        <option value="male">Groom</option>
                    </select>
                </div>
                <div className="grid-item">
                    <label htmlFor="">Age range</label>
                    {/* <input type="number" className="form-control" placeholder="min age" onChange={(e)=>{
                        const targetYear = year - e.target.value;
                        setParams({...params, min_year: targetYear})}}/> to
                    <input type="number" className="form-control" placeholder="max age" onChange={(e)=>{
                        const targetYear = year - e.target.value;
                        setParams({...params, max_year: targetYear})}}/> */}
                    <select id="inputRegistration" className="form-select" onChange={(e)=>{setParams({...params, religion: e.target.value})}}>
                        <option>Select</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                        <option value={25}>25</option>
                        <option value={26}>26</option>
                        <option value={27}>27</option>
                        <option value={28}>28</option>
                        <option value={29}>28</option>
                        <option value={30}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                        <option value={28}>28</option>
                    </select>
                    to
                    <select id="inputRegistration" className="form-select" onChange={(e)=>{setParams({...params, religion: e.target.value})}}>
                    <option>Select</option>
                    <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                        <option value={25}>25</option>
                        <option value={26}>26</option>
                        <option value={27}>27</option>
                        <option value={28}>28</option>
                    </select>
                </div>
                <div className="grid-item">
                    <label htmlFor="">Religion</label>
                    <select id="inputRegistration" className="form-select" onChange={(e)=>{setParams({...params, religion: e.target.value})}}>
                        <option>Select</option>
                        <option value="islam">Islam</option>
                        <option value="isaee">Isaee</option>
                        <option value="shanatan">Shanatan</option>
                        <option value="buddha">Buddha</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className="grid-item">
                    <label htmlFor="">Division</label>
                    <select className="form-select" aria-label="Your preferred division" onChange={(e)=>{setParams({...params, division: e.target.value})}}>
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
                <div className="grid-item">
                    <Link href={{
                        pathname: `/search/`,
                        query: params
                    }}>
                        <button type="submit" className="btn btn-primary mt-4" onClick={(e)=>{
                            // e.preventDefault();
                            
                            console.log("Submitted", params);
                        }}>Submit</button>

                    </Link> 
                </div>
            </form>
        </div>
      </>
  )
}

export default AdvanceSearch