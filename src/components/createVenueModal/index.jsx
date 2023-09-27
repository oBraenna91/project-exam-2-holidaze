import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CustomButton from '../button';
import CreateVenueForm from '../create-venue-form';

export function CreateVenueModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <CustomButton 
        onClick={handleShow}
        label="Create new venue"
      />

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Venue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <CreateVenueForm />
      </Modal.Body>
    </Modal>
  </div>
  );
}

export default CreateVenueModal;
