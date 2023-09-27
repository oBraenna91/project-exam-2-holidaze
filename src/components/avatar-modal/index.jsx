import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { updateAvatar }from '../../hooks/useUpdateAvatar';
import ConfirmationModal from '../confirmation-modal';
import CustomButton from '../button';

export function AvatarModal() {
  const [show, setShow] = useState(false);
  const [avatarURL, setAvatarURL] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdateAvatar = async () => {
    try {
      await updateAvatar(avatarURL); 
      handleClose();
      alert('Avatar updated!')
      window.location.reload();
    } catch (error) {
      alert('Failed to update avatar - please make sure the URL is full and publicy accessible',);
      window.location.reload();
    }
  };

  return (
      <div>
        <CustomButton 
          onClick={handleShow}
          label="Update Avatar"
          className="text-primary"
        />

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Update Avatar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input 
                value={avatarURL} 
                placeholder="Enter Avatar URL"
                onChange={(e) => setAvatarURL(e.target.value)}
                className="form-input d-flex m-auto"
                />
            </Modal.Body>
            <Modal.Footer>
            <ConfirmationModal
            buttonTitle="Update avatar"
            buttonClass="text-primary"
            title="Are you sure?"
            body="Are you sure you want to update your avatar?"
            onClick={handleUpdateAvatar}
            confirmation="Update"
            />
            </Modal.Footer>
        </Modal>
      </div>
  );
}

export default AvatarModal;