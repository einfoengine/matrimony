import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../context';
import axios from 'axios';
import MessageNav from '../../components/MessageNav';
import SideMenu from '../../components/SideMenu';

const Inbox = (props) => {
  const {state}=useContext(LoginContext);
  const [messages, setMessages] = useState();

  const getMessages = async () => {
    const {data} = await axios.get(`http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/messages/list`, {params: {user: state.user._id}});
    setMessages(data);
    return data;
  }

  useEffect(()=>{
    if(state.user !== null){
      getMessages();
    }
  }, [state.user]);
  
  return (
    <section className="sam-section sam-inbox">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideMenu active={"messages"}/>
          </div>
          <div className="col-md-9">
            <div className="m-dev-element">
              <MessageNav/>
                <ol className="list-group list-group-numbered">
                  {
                    messages !== undefined
                      &&
                    
                    messages.map(()=>{
                      return (
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                          <div className="fw-bold">Subheading</div>
                          Content for list item
                          </div>
                          <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                      )
                    })
                  }
                </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Inbox
