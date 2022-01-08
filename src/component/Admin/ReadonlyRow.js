import React , {useState} from "react";
import { Modal, Button , Checkbox, Divider  } from 'antd';
import './Admin.css';



const plainOptions = ['C', 'B', 'A'];
const defaultCheckedList = [];



const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {

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

  const CheckboxGroup = Checkbox.Group;

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  

  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.password}</td>
      <td>{contact.id}</td>
      <td>{contact.accesses}</td>
      <td>
        <div className="td-btn">
            
            <Button type="primary" onClick={(event) => handleEditClick(event, contact)}>
            Edit
          </Button>

          <Button  onClick={() => handleDeleteClick(contact.id)}>Delete</Button>
        </div>
      </td>
      <td>
          <Button type="primary" onClick={showModal}>
            Show
          </Button>
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Check all
              </Checkbox>
              <Divider />
              <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
          </Modal>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
