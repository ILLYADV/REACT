import React from 'react';
import {Modal} from "react-bootstrap";

const Thumbnail = ({setOpen, open, image}) => {
    const handleClose = () => setOpen(false);
    return (
        <Modal
            show={open}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <img
                style={{maxWidth: "100%", maxHeight: "calc(100vh - 64px)"}} src={image} alt=''
            />
        </Modal>
    );
};

export default Thumbnail;