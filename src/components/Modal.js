function Modal(props) {
    function cancleHandler() {
        props.onCancle()
    }
    function confirmHandler() {
        props.onConfirm()
    }
    return(
       <div className="modal">
         <p>Are you sure</p>
        <button className="btn" onClick={cancleHandler}>Cancel</button>
        <button className="btn btn--alt" onClick={confirmHandler}>Confirm</button>
       </div>
    )
}
export default Modal;