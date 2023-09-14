import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomButton from '../button';

export function ConfirmationModal({ buttonTitle, title, body, onClick, confirmation }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="m-auto mt-4">
    <Button variant="secondary" onClick={handleShow}>
      {buttonTitle}
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
          {body}
          <CustomButton 
          className="mt-4 custom-modal-confirmation-button"
          onClick={onClick}
          label={confirmation}
          />
      </Modal.Body>
    </Modal>
  </div>
  );
}

export default ConfirmationModal;