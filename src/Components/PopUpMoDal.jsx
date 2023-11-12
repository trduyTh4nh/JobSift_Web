// Popup.js
import React from 'react';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 16
    },
};

Modal.setAppElement('#root');

const Popup = ({ isOpen, onClose, message }) => {

    const fadeIn = useSpring({
        opacity: isOpen ? 1 : 0,
        from: { opacity: 0 },
    });

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Popup Modal"
        >
            <animated.div style={fadeIn}>
                <h2>{message}</h2>
                <button style={{
                    backgroundColor: "#FA7070",
                    marginTop: 20,
                    padding: 10,
                    fontSize: 14,
                    fontWeight: "600",
                    borderRadius: 8
                }} onClick={onClose}>Close</button>
            </animated.div>

        </Modal>
    );
};

export default Popup;
