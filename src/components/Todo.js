import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
    const [modaIsOpen, setModalIsOpen ] = useState(false);
    function deletHandler() {
        setModalIsOpen(true);
        }
        function closeModalHandler() {
            setModalIsOpen(false)
        }
  return(
    <div className="card">
        <h2>{props.text}</h2>
        <div className="action">
          <button className="btn" onClick={deletHandler}>Delete</button>
        </div>
        {modaIsOpen && (
            <Modal onCancle={closeModalHandler} onConfirm={closeModalHandler}  />)}
            {modaIsOpen && <Backdrop onClick={closeModalHandler}
            />}

      </div> 
  );
}

export default Todo;