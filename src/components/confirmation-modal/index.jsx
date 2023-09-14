import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CustomButton from '../button';

export function ConfirmationModal({ buttonTitle, buttonClass, title, body, onClick, confirmation }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="m-auto mt-4">
    <CustomButton
        className={buttonClass}
        onClick={handleShow}
        label={buttonTitle}
    />

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
          {body}
          <CustomButton 
          className={`mt-4 custom-modal-confirmation-button ${buttonClass}`}
          onClick={onClick}
          label={confirmation}
          />
      </Modal.Body>
    </Modal>
  </div>
  );
}

export default ConfirmationModal;