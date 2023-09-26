import React from 'react';

import './Modal.css'

const Modal = ({content, displayModal, setDisplayModal}) => {

    const closeModal = () => {
        setDisplayModal(false);
    }

    return (
        <>
            {
                displayModal && 
                <section className='overlay'>
                    <div className='modal'>
                        <div className="modal-wrapper">
                            <span className="modal-close-button" onClick={(e) => closeModal(e)}>X</span>
                            <span className="modal-message">{content}</span>
                        </div>
                    </div>
                </section>
                
            }
        </>
    );
};

export default Modal;