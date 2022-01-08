import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ModalReject2 = (props) =>{
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
            <Button type="primary" onClick={showModal}>
                Reject
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <textarea></textarea>
            </Modal>
        </div>
    );
}

export default ModalReject2;
