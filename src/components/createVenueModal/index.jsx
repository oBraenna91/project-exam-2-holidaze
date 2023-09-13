import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import createVenue from '../../hooks/useCreateVenue';
// import { useForm } from 'react-hook-form';
import CreateVenueForm from '../create-venue-form';

export function TestCreateVenueModal() {
  const [show, setShow] = useState(false);
//   const [venueData, setVenueData] = useState({
//     name: '',
//     description: '',
//     media: [],
//     price: 0,
//     maxGuests: 0,
//     rating: 0,
//     meta: {
//       wifi: false,
//       parking: false,
//       breakfast: false,
//       pets: false,
//     },
//     location: {
//       address: '',
//       city: '',
//       zip: '',
//       country: '',
//       continent: '',
//       lat: 0,
//       lng: 0,
//     },
//   });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if(name.startsWith('location')) {
//         const locationField = name.replace('location.', '');
//         setVenueData((prevData) => ({
//             ...prevData,
//             location: {
//                 ...prevData.location,
//                 [locationField]: value,
//             }
//         }))
//     }else if (name === 'media') {
//         // Handle the 'media' field separately to convert the string to an array
//         setVenueData((prevData) => ({
//           ...prevData,
//           media: [value],
//         }));
//     }else{
//         const numericValue = name === 'price' || name === 'maxGuests' ? parseFloat(value) : value;
    
//     setVenueData((prevData) => ({
//       ...prevData,
//       [name]: numericValue,
//     }));
//     }
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setVenueData((prevData) => ({
//       ...prevData,
//       meta: {
//         ...prevData.meta,
//         [name]: checked,
//       },
//     }));
//   };

//   const handleSubmit = () => {
//       console.log(venueData)
//     //createVenue(venueData);
//     handleClose();
//   };

  return (
    <div>
    <Button variant="secondary" onClick={handleShow}>
      Create +
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Venue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <CreateVenueForm />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="secondary" onClick={handleSubmit}>
          CREATE
        </Button>
      </Modal.Footer> */}
    </Modal>
  </div>
  );
}

export default TestCreateVenueModal;
