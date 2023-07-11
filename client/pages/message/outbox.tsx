import Link from 'next/link';
import MessageNav from '../../components/MessageNav';
import SideMenu from '../../components/SideMenu';

const Outbox = () => {
    return (
      <section className="sam-section sam-outbox">
        <div className="container">
          <div className="row">
              {/* Left */}
            <div className="col-md-3">
              <SideMenu active={"messages"}/>
            </div>
            {/* content */}
            <div className="col-md-9">
              
                  {/* A-1 */}
                
                  <MessageNav/>
                  {/* A-2 */}
                  <div className="m-dev-element">
                      <ol className="list-group list-group-numbered">
                          <li className="list-group-item d-flex justify-content-between align-items-start">
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
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                              <div className="fw-bold">Subheading</div>
                              Content for list item
                              </div>
                              <span className="badge bg-primary rounded-pill">14</span>
                          </li>
                      </ol>
                  </div>
                
                {/* End message position A-1 */}
                
              
            </div>
          </div>
        </div>
      </section>
    )
}
export default Outbox