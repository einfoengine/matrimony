import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { LoginContext } from '../../context';
import axios from 'axios';
import SideMenu from '../../components/SideMenu';

const Message = (props) => {
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
    <div className="container">
        <div className="row">
            {/* Left */}
          <div className="col-md-2">
            <SideMenu/>
          </div>
          {/* content */}
          <div className="col-md-10">
            <div className="row">
                {/* A-1 */}
              <div className="col-md-9">
                <div className="message-menu m-dev-element">
                    <ul className="list-group list-group-horizontal">
                        {/* <li className="list-group-item active"><Link href="/message"><a>All</a></Link></li> */}
                        <li className="list-group-item active"><Link href="/message/inbox"><a>Inbox</a></Link></li>
                        <li className="list-group-item"><Link href="/message/outbox"><a>Outbox</a></Link></li>
                        <li className="list-group-item"><Link href="/message/compose"><a>Compose</a></Link></li>
                    </ul>
                </div>
                {/* A-2 */}
                <div className="m-dev-element">
                    <h3>All Messages</h3>
                    <ol className="list-group list-group-numbered">
                      {
                        messages !== undefined
                          &&
                        
                        messages.map((message)=>{
                          return (
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                              <div className="fw-bold"><Link href={`/users/${message?.sender}`}><a>{message?.sender}</a></Link></div>
                              {message.message}
                              </div>
                              <span className="badge bg-primary rounded-pill">14</span>
                            </li>
                          )
                        })
                      }
                        
                        {/* <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Content for list item
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Content for list item
                            </div>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li> */}
                    </ol>
                </div>
              </div>
              {/* End message position A-1 */}
              
            </div>
          </div>
        </div>
      </div>
    )
}
export default Message
