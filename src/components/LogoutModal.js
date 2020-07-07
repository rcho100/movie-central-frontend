import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const LogoutModal = (props) => {

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton/>
            <Modal.Body>
            <p>Are you sure you want to logout?</p>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={() => props.logout()}>Yes</Button>
            <Button onClick={props.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LogoutModal