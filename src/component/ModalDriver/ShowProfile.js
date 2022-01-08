import React from 'react'
import './Showprofile.css';
import {Checkbox , Tabs ,Breadcrumb} from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import DriverPayment from "./DriverPayment"


import ModalReject from './Modal';

import DriverCar from './DriverCar';

const { TabPane } = Tabs;

const ShowProfile = (props) =>{
    const Checkbox_Electeric_Code =()=>{};
    const Checkbox_Driving_Licence =() =>{};
    const Checkbox_Driving_Badge =()=>{};
    const Checkbox_BankStatement =() =>{};


    function callback(key) {
        console.log(key);
      }


    return(
        <div className="container-showdriver">
            <div className="Breadcrumb-driver">
                <Breadcrumb>
                    <Breadcrumb.Item href="/home/:section">
                        <HomeOutlined />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <UserOutlined />
                        <span>Drivers</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Driver details</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="tab-driverDetail">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Driver Document" key="1">
                    <div className="Card-showdriver">
                        <div className="card-title-showdriver">
                            <h3>Personal information</h3>
                            <hr/>
                            <div className="driver-photo-showdriver">
                                <img src="" alt="driver photo" />
                                <h2>Amir</h2>
                            </div>
                            <div className="driver-information">
                                    <span> <h3>Email : </h3> amir@yahoo.com </span>
                                    <span> <h3>Join us : </h3> 21.11.2021 </span>
                                    <span> <h3>Phone number : </h3> 21.11.2021 </span>
                            </div>
                        </div>
                        <div className="card-body-showdriver">
                            <div className="divre-doc-showdriver">
                                <p>Driver Docs</p>
                                <hr/>                                         
                                <div className="cardItem-showdriver">
                                    <h3>DVLA Electronic Code   :    </h3>
                                    <div style={{display:"flex" , alignItems : "center" , justifyContent : "space-around"}}>
                                        <Checkbox onChange={Checkbox_Electeric_Code} style={{color:"white"}}>Checked</Checkbox>
                                        <ModalReject/>
                                    </div>
                                </div>

                                <div className="cardItem-showdriver">
                                    <h3>DVLA Driving Licence   :  </h3>
                                    
                                    <div style={{display:"flex" , alignItems : "center" , justifyContent : "space-around"}}>
                                        <Checkbox onChange={Checkbox_Driving_Licence} style={{color:"white"}}>Checked</Checkbox>
                                        <ModalReject/>
                                    </div>
                                </div>

                                <div className="cardItem-showdriver">
                                    <h3>PHC Driving Badge   :   </h3>

                                    <div style={{display:"flex" , alignItems : "center" , justifyContent : "space-around" , marginLeft : "10px"}}>
                                        <Checkbox onChange={Checkbox_Driving_Badge} style={{color:"white"}}>Checked</Checkbox>
                                        <ModalReject/>
                                    </div>
                                </div>

                                <div className="cardItem-showdriver">
                                    <h3>Bank Statement   :   </h3>
                                    <div style={{display:"flex" , alignItems : "center" , justifyContent : "space-around"}}>
                                        <Checkbox onChange={Checkbox_BankStatement} style={{color:"white"}}>Checked</Checkbox>
                                        <ModalReject/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="Payment" key="2">
                    <DriverPayment/>
                </TabPane>
                <TabPane tab="Car" key="3">
                    <DriverCar />
                </TabPane>
            </Tabs>
            </div>
           
        </div>
    );
}

export default ShowProfile
