import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Form from './Form';

function FormModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Set the app element for accessibility when the component mounts
    Modal.setAppElement('#root'); // Set the ID of your root element here
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="open-modal-container">
      <button onClick={openModal} className="open-modal-button">
        Request a Quote
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Form Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <Form closeModal={closeModal} />
        <button onClick={closeModal} className="close-modal-button">
          Close
        </button>
      </Modal>
    </div>
  );
}

export default FormModal;
