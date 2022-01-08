import React from "react";
import { Button } from "antd";


const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an password..."
          name="password"
          value={editFormData.password}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter a phone id..."
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter accesses..."
          name="status"
          value={editFormData.accesses}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <div className="td-btn">
            {/* <button className="btn-white" type="submit">Save</button> */}
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            
            <Button onClick={handleCancelClick}>
              Cancel
            </Button>
       </div>
      </td>
    </tr>
  );
};

export default EditableRow;