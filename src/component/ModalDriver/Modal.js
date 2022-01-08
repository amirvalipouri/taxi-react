import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ModalReject = (props) =>{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return(
        <div>
            <Button onClick={showModal}>
                Reject
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <textarea></textarea>
            </Modal>
        </div>
    );
}

export default ModalReject
