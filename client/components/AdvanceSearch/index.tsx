import Heading from "../../Elements/Heading"
import SubHeading from "../../Elements/SubHeading"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../context"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdvanceSearch = ({className}:{className?:string | null}) => {
    const d = new Date();
    let year = d.getFullYear();
    const [params, setParams] = useState({});
    const [queryString, setQueryString] = useState('');
    const {state} = useContext(LoginContext);
    useEffect(()=>{
        setQueryString(`${new URLSearchParams(params).toString()}`);
    },[params]);

    const notify = () => toast("You need to login!")
  return (
      <>
        <div className={`sam-component ex-advance-search ${className}`}>
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
                        <option value={29}>29</option>
                        <option value={30}>30</option>
                        <option value={31}>31</option>
                        <option value={32}>32</option>
                        <option value={33}>33</option>
                        <option value={34}>34</option>
                        <option value={35}>35</option>
                        <option value={36}>36</option>
                        <option value={37}>37</option>
                        <option value={38}>38</option>
                        <option value={39}>39</option>
                        <option value={40}>40</option>
                        <option value={41}>41</option>
                        <option value={42}>42</option>
                        <option value={43}>43</option>
                        <option value={44}>44</option>
                        <option value={45}>45</option>
                        <option value={46}>46</option>
                        <option value={47}>47</option>
                        <option value={48}>48</option>
                        <option value={49}>49</option>
                        <option value={50}>50</option>
                        <option value={51}>51</option>
                        <option value={52}>52</option>
                        <option value={53}>53</option>
                        <option value={54}>54</option>
                        <option value={55}>55</option>
                        <option value={56}>56</option>
                        <option value={57}>57</option>
                        <option value={58}>58</option>
                        <option value={59}>59</option>
                        <option value={60}>60</option>
                        <option value={61}>61</option>
                        <option value={62}>62</option>
                        <option value={63}>63</option>
                        <option value={64}>64</option>
                        <option value={65}>65</option>
                        <option value={66}>66</option>
                        <option value={67}>67</option>
                        <option value={68}>68</option>
                        <option value={69}>69</option>
                        <option value={79}>70</option>
                    </select>
                    to
                    <select id="inputRegistration" className="form-select" onChange={(e)=>{setParams({...params, religion: e.target.value})}}>
                    <option>Select</option>
                    <option value={18}>18</option>
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
                        <option value={29}>29</option>
                        <option value={30}>30</option>
                        <option value={31}>31</option>
                        <option value={32}>32</option>
                        <option value={33}>33</option>
                        <option value={34}>34</option>
                        <option value={35}>35</option>
                        <option value={36}>36</option>
                        <option value={37}>37</option>
                        <option value={38}>38</option>
                        <option value={39}>39</option>
                        <option value={40}>40</option>
                        <option value={41}>41</option>
                        <option value={42}>42</option>
                        <option value={43}>43</option>
                        <option value={44}>44</option>
                        <option value={45}>45</option>
                        <option value={46}>46</option>
                        <option value={47}>47</option>
                        <option value={48}>48</option>
                        <option value={49}>49</option>
                        <option value={50}>50</option>
                        <option value={51}>51</option>
                        <option value={52}>52</option>
                        <option value={53}>53</option>
                        <option value={54}>54</option>
                        <option value={55}>55</option>
                        <option value={56}>56</option>
                        <option value={57}>57</option>
                        <option value={58}>58</option>
                        <option value={59}>59</option>
                        <option value={60}>60</option>
                        <option value={61}>61</option>
                        <option value={62}>62</option>
                        <option value={63}>63</option>
                        <option value={64}>64</option>
                        <option value={65}>65</option>
                        <option value={66}>66</option>
                        <option value={67}>67</option>
                        <option value={68}>68</option>
                        <option value={69}>69</option>
                        <option value={79}>70</option>
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
                    {
                        state.user?
                        <Link href={{pathname: `/search/`, query: params}}>
                            <button type="submit" className="btn btn-primary mt-4">Submit</button>
                        </Link> :
                        <>
                            <a type="submit" className="btn btn-primary mt-4" onClick={notify}>Submit</a>
                            <ToastContainer />
                        </>
                    }
                    
                </div>
            </form>
        </div>
      </>
  )
}

export default AdvanceSearch