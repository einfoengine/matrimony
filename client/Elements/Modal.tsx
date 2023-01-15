const Modal = ({
    modalId,
    modalTitle,
    modalSubmitText,
    children
}:{
    modalId:string,
    modalTitle: string,
    modalSubmitText: string,
    children: any
}) =>{
    return (
        // <!-- Modal -->
<div className="modal fade" id={modalId} aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {children}
      </div>
    </div>
  </div>
</div>
    )
}

export default Modal;