import React , { useState } from 'react'
import { Rate ,Button , Modal} from 'antd';
import { Link } from 'react-router-dom';
// import { StarOutlined } from "@ant-design/icons";
// import { Content } from 'antd/lib/layout/layout';
import './css/Riders.css'




function Riders() {

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


    const items =[{riderId : 5 ,name:"amir valipouri" , email : "amir@yahoo.com" , trips : ["tehran, gheytariyeh" , "karaj , alborz"] },
    {riderId : 4 ,name:"Hamid khosroabadi" , email : "hamid@yahoo.com" , trips : ["asd, 5" , "karaj , alborz"]},
    {riderId : 3 ,name:"Mohammad izadi" , email : "Mohammad@yahoo.com" , trips : ["dfh, hio." , "karaj , alborz"]},
    {riderId : 2 ,name:"meysam babayi" , email : "meysam@yahoo.com" ,trips : ["fxgj, 553" , "karaj , alborz"]}]
    return (
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Driver Score</th>
                        <th>Email</th>
                        <th>More</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item =>{
                        return(
                        <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                <Rate disabled defaultValue={item.id} />
                            </td>
                            <td>
                                {item.email}
                            </td>
                            <td>
                            <Button className="Details-btn"><Link to={`/rider/${item.riderId}`}>Details</Link></Button>
                                <Button type="primary" onClick={showModal}>
                                    Show Trips
                                </Button>
                                <Modal title="Trips" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    {item.trips.map(i=>{
                                        return(
                                            <div>
                                                <p>{i}</p>
                                            </div>
                                        )
                                    })}
                                    
                                </Modal>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Riders


