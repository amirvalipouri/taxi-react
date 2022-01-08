import React, { useState, Fragment } from "react";
// import { nanoid } from "nanoid";

import { UserAddOutlined } from '@ant-design/icons'
import { Divider } from 'antd';
import data from '../admins.json';
import ReadOnlyRow from "./ReadonlyRow";
import EditableRow from "./EditableRow";
import AddAdmin from '../../assert/addAdmin.png'

import './Admin.css';

const Admin = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    password: "",
    id: "",
    accesses: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    password: "",
    id: "",
    accesses: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };


  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: 5,
      name: addFormData.name,
      password: addFormData.password,
      accesses: addFormData.accesses,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      password: editFormData.password,
      accesses: editFormData.accesses,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      password: contact.password,
      accesses: contact.accesses,
      id: contact.id,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };


  return (
    <div className="container-ADMIN">  
    <div className="divform">
            <form className="add-admin-form-tag" onSubmit={handleAddFormSubmit}>
            <div className="admin-img">
                <img src={AddAdmin} alt="add Admin" />
            </div>
                <div className="add-admin-form">
                    <div className="add-admin-input">
                        <input
                        className="input-admin"
                        type="text"
                        name="name"
                        required="required"
                        placeholder="Name"
                        onChange={handleAddFormChange}
                        />
                    </div>
                    
                    <div className="add-admin-input">
                        <input
                        className="input-admin"
                        type="password"
                        name="password"
                        required="required"
                        placeholder="Password"
                        onChange={handleAddFormChange}
                        />
                    </div>
                    <div className="add-admin-input">
                        <input
                        className="input-admin"
                        type="text"
                        name="accesses"
                        required="required"
                        placeholder="Accesses"
                        onChange={handleAddFormChange}
                        />
                    </div>
                <button className="btn-add" type="submit"><UserAddOutlined /> Add</button>
                
                </div>
            </form>
            
        </div>
    <div className="app-container-admin">
    <Divider orientation="left">ADMINS</Divider>
      <div className="first-form">
        <form className="admin-form" onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Password</th>
                <th>Id</th>
                <th>Accesses</th>
                <th>Actions</th>
                <th>Permision</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
      
      </div>
      </div>
      

  );
};

export default Admin;