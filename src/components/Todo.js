import React, { useState } from "react"
import Backdrop from "./Backdrop"
import Modal from "./Modal"

const Todo = (props) => {
  const [showModal, setShowModal] = useState(false)
  const { title } = props

  const deleteHandler = () => {
    setShowModal(true)
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }

  return (
    <div>
      <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {showModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {showModal && <Backdrop onClick={closeModalHandler} />}
      </div>
    </div>
  )
}

export default Todo
