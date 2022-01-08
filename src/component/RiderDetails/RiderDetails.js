import React from 'react'
import { Tag, Breadcrumb , Tabs } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import './RiderDetails.css'
import BankAccount from './BankAccount';
const { TabPane } = Tabs;

const RiderDetails = (props)=>{
    const lis = [{id : 1 , number : 1 , driver : "jack" , payment : 20 , date : "9.28.2021" , trip : "tehran"},
    {id : 2 , number : 2 , driver : "jay" , payment : 20 , date : "9.28.2021" , trip : "tehran"},
    {id : 3 , number : 3 , driver : "joo" , payment : 30 , date : "9.28.2021" , trip : "tehran"},
    {id : 4 , number : 4 , driver : "jaa" , payment : 40 , date : "9.28.2021" , trip : "tehran"},
    {id : 5 , number : 5 , driver : "aaa" , payment : 50 , date : "9.28.2021" , trip : "tehran"}]


    function callback(key) {
        console.log(key);
      }

    return(
        <div className="container-riderDetails">
            <div className="Breadcrumb-driver">
            <Breadcrumb>
                <Breadcrumb.Item href="/home/:section">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <UserOutlined />
                    <span>Riders</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Rider details</Breadcrumb.Item>
            </Breadcrumb>

            </div>
                <BankAccount/>

            <div className="tab-riderDetails">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Trips" key="1">
                        <div className="tablee-div">
                            <table className="table-tag">
                                <thead>
                                    <tr>
                                        <th>Number</th>
                                        <th>Driver</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Trip</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lis.map((i)=>
                                        <tr>
                                            <td>{i.number}</td>
                                            <td><span className="driver-name">{i.driver}</span></td>
                                            <td><Tag color="cyan">{i.payment}$</Tag></td>
                                            <td>{i.date}</td>
                                            <td>{i.trip}</td>
                                        </tr>
                                    )}
                                    
                                </tbody>
                            </table>
                        </div>
                    </TabPane>
                    <TabPane tab="Deposit" key="2">
                             <div className="tablee-div">
                                <table className="table-tag">
                                    <thead>
                                        <tr>
                                            <th>Number</th>
                                            <th>Deposit</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><Tag color="green">150 $</Tag></td>
                                            <td>10.09.2021</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
           
        </div>
    );
}

export default RiderDetails
