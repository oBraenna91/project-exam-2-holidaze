import React, { useState } from 'react';
import CustomButton from '../button';
import Modal from 'react-bootstrap/Modal';

export function CustomModal({ buttonTitle, title, body }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
    <CustomButton 
    onClick={handleShow}
      label={buttonTitle}
    />

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {body}
      </Modal.Body>
    </Modal>
  </div>
  );
}

export default CustomModal;