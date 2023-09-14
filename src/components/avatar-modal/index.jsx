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
      console.error('Failed to update avatar', error);
    }
  };

  return (
      <div>
        <CustomButton 
          onClick={handleShow}
          label="Update Avatar"
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
                className="form-input"
                />
            </Modal.Body>
            <Modal.Footer>
            <ConfirmationModal
            buttonTitle="Update avatar"
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