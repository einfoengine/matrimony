import Link from 'next/link';

const MessageNav = () => {
  return (
    <div className="message-menu m-dev-element">
        <ul className="list-group list-group-horizontal sam-tab-nav mb-3">
            {/* <li className="list-group-item"><Link href="/message"><a>All</a></Link></li> */}
            <li className="list-group-item"><Link href="/message/"><a>Inbox</a></Link></li>
            <li className="list-group-item"><Link href="/message/outbox"><a>Outbox</a></Link></li>
            <li className="list-group-item active"><Link href="/message/compose"><a>Compose</a></Link></li>
        </ul>
    </div>
  )
}
export default MessageNav