import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateAvatar }from '../../hooks/useUpdateAvatar';

export function AvatarModal() {
  const [show, setShow] = useState(false);
  const [avatarURL, setAvatarURL] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdateAvatar = async () => {
    try {
      await updateAvatar(avatarURL); // Replace 'yourUserName' with the actual user name
      handleClose();
      alert('Avatar updated!')
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Failed to update avatar', error);
    }
  };

  return (
      <div>
        <Button variant="secondary" onClick={handleShow}>
            Update Avatar
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Update Avatar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input 
                value={avatarURL} placeholder="Enter Avatar URL"
                onChange={(e) => setAvatarURL(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Close
            </Button>
            <Button variant="secondary" onClick={handleUpdateAvatar}>
                UPDATE
            </Button>
            </Modal.Footer>
        </Modal>
      </div>
  );
}

export default AvatarModal;