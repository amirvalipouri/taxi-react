import React from 'react'

import './DriverCar.css';
import ModalReject2 from './Modal2';
import {Checkbox} from 'antd'


const DriverCar = () => {
    const Checkbox_PHC_Certificate =()=>{};
    const Checkbox_Insurance_Certificate =() =>{};
    const Checkbox_Permission_Letter =()=>{};
    return(
        <div className="container-driverCar">
            <div className="driverCar-left">
                <div  className="driverCar-left-body">
                                <div className="cardItem-car">
                                    <h3>Vehicle Registration Logbook V5C <br/> or New Owner Slip   :  </h3>
                                    <div style={{display:"flex" , alignItems : "center" , justifyContent : "space-around"}}>
                                        <Checkbox>Checked</Checkbox>
                                        <ModalReject2/>
                                    </div>
                                </div>
                                <div className="cardItem-car">
                                    <h3>PHC Certificate of Compliance   :  </h3>
                                    
                                    <div style={{display:"flex" , alignItems : "center" , justifyContent : "space-around"}}>
                                        <Checkbox onChange={Checkbox_PHC_Certificate}>Checked</Checkbox>
                                        <ModalReject2/>
                                    </div>
                                </div>

                                <div className="cardItem-car">
                                    <h3>Insurance Certificate  : </h3>
                                    
                                    <div style={{display:"flex" , alignItems : "center" , justifyContent : "space-around"}}>
                                        <Checkbox onChange={Checkbox_Insurance_Certificate}>Checked</Checkbox>
                                        <ModalReject2/>
                                    </div>
                                </div>

                                <div className="cardItem-car">
                                    <h3>Permission Letter  :   </h3>
                                    
                                    <div style={{display:"flex" , alignItems : "center" , justifyContent : "space-around"}}>
                                        <Checkbox onChange={Checkbox_Permission_Letter}>Checked</Checkbox>
                                        <ModalReject2/>
                                    </div>
                                </div>
                                </div>

            </div>
            <div className="driverCar-right">
                <div>
                    <span> <h3>Name : </h3> Mostang </span>
                    <span> <h3>Production : </h3> 2019 </span>
                    <span> <h3>Body style : </h3> coupe , 2 doors </span>
                    <span> <h3>Length : </h3> 5000 mm </span>
                    <span> <h3>Width : </h3> 1900 mm </span>
                    <span> <h3>Height : </h3> 1500mm </span>
                </div>
            </div>
        </div>
    );
}

export default DriverCar
