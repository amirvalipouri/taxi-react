import React, { useState } from "react";
import { Card, Tag,Layout , Divider} from "antd";
import {CalendarOutlined} from '@ant-design/icons'
import { Chart } from "react-google-charts";
// import Offline from '../../assert/offline.png'
// import Online from '../../assert/online.png'
// import TaxiDriver from '../../assert/taxiDriver.png'
// import TaxiRider from '../../assert/riderr.png'
import './Dashboard.css';

const {  Content} = Layout;


export const Dashboard = () => {

    // const [ date , setDate ] = useState("");

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.toLocaleString('default', { month: 'long' });;
    let year = newDate.getFullYear();



    const dataa = {driverOnline : 100 , driverOffline : 50 , redflag : 2 }

    // driversOnline,
    // useEffect(() => {

    //     try {
    //         const xhr = new XMLHttpRequest();
    //         xhr.withCredentials = true;

    //         xhr.addEventListener("readystatechange", function () {
    //             if (this.readyState === 4) {
    //                 try {
    //                     const { status, message, ...rest } = JSON.parse(this.responseText);
    //                     if (status === "ok") {
    //                         setStatistics(rest);
    //                     } else {
    //                         alert(message);
    //                     }
    //                 } catch (error) {
    //                     alert("Error in fetch statistics")
    //                 }
    //             }
    //         });

    //         xhr.open("GET", `${server}/v1/admin/info/statistics`);
    //         xhr.send();
    //     } catch (error) {
    //         alert("Error in fetch statistics");
    //     }

    // }, []);
    return (
        <div>
            <Layout>
                <Content>
                    <Card bordered title="Dashboard">
                        <div className="dashboard-header">
                            <div className="dashboard-header-left">
                                <p className="dashboardP">Dashboard</p>
                                <div className="dashboard-date">
                                    <span><CalendarOutlined style={{marginLeft : "3px"}} /></span>
                                    <p> {date} {month} {year} </p>
                                </div>
                            </div>
                            <div className="status">
                                <div className="driver-status">
                                    <p className="driver-status-numbers">256</p>
                                    {/* <img src={Online} alt="offline" /> */}
                                    <p  className="driver-status-title">Online drivers</p>
                                </div>
                                <span></span>
                                <div className="driver-status">
                                    <p className="driver-status-numbers">123</p>
                                    {/* <img src={Offline} alt="offline" /> */}
                                    <p  className="driver-status-title">Offline drivers</p>
                                </div>
                                <span></span>
                                <div className="driver-status">
                                    <p className="driver-status-numbers">600</p>
                                    {/* <img src={TaxiDriver} alt="offline" /> */}
                                    <p  className="driver-status-title">Number of drivers</p>
                                </div>
                                <span></span>
                                <div className="driver-status">
                                    <p className="driver-status-numbers">8000</p>
                                    {/* <img src={TaxiRider} alt="offline" /> */}
                                    <p  className="driver-status-title">Number of riders</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <div className="Linechart">
                        <div>
                            <Chart
                                width={'500px'}
                                height={'450px'}
                                chartType="Bar"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Month', 'Sales'],
                                    
                                    ["Jan", 0],
                                    ['Feb' , 10],
                                    ["Mar" , 23],
                                    ["Apr" , 17],
                                    ["May" , 18],
                                    ["June" , 9],
                                    ["July" , 11],
                                    ["Aug" , 27],
                                    ["Sep" , 33],
                                    ["Oct" , 40],
                                    ["Nov" , 32],
                                    ["Dec" , 35],
                                ]}
                                options={{
                                    // Material design options
                                    chart: {
                                    title: 'Company Performance',
                                    },
                                }}
                                // For tests
                                rootProps={{ 'data-testid': '2' }}
                            />
                        </div>
                        <div>
                        <Chart
                            width={'500px'}
                            height={'500px'}
                            chartType="LineChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['day', 'Trip per day'],
                                ["Sun", 0],
                                ["Mon", 10],
                                ["Tue", 23],
                                ["Wed", 17],
                                ["Thu", 18],
                                ["Fri", 9],
                                ["Sat", 11]
                            ]}
                            options={{
                                hAxis: {
                                title: 'Time',
                                },
                                vAxis: {
                                title: 'Popularity',
                                },
                            }}
                            rootProps={{ 'data-testid': '1' }}
                            />
                        </div>
                    </div>
                    <div className="dashboard-chart">
                            <div>
                                {/* driver analytics */}
                                <Chart
                                    
                                    width={'350px'}
                                    height={'300px'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Driver', 'Hours per Day'],
                                        ['Driver approve', 15],
                                        ['Driver unapprove',  13],
                                        ['Red flag', 9],
                                    ]}
                                    options={{
                                        title: 'Driver analytics',
                                        // Just add this option
                                        is3D: true,
                                    
                                    }}
                                    rootProps={{ 'data-testid': '2' }}
                                    />
                            </div>
                            <div>
                                {/* driver analyticss */}
                                <Chart
                                    width={'350px'}
                                    height={'300px'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Rider', 'Hours per Day'],
                                        ['Number of users', 11],
                                        ['Online users', 2],
                                        ['Offline users', 2],
                                        ['At trip', 11]
                                    ]}
                                    options={{
                                        title: 'Rider analytics',
                                        // Just add this option
                                        is3D: true,
                                    }}
                                    rootProps={{ 'data-testid': '2' }}
                                    />
                            </div>
                        </div>
                        <div className="Dashboard-table-div">
                            {/* last trip */}
                            <Divider orientation="left" plain>Last Trip</Divider>
                            <table className="table-Dashboard">
                                <thead>
                                    <tr>
                                        <th>Rider</th>
                                        <th>Driver</th>
                                        <th>Price</th>
                                        <th>Origin</th>
                                        <th>Destination</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        <tr className="mytr">
                                            <td><span className="rider-name">Amir</span></td>
                                            <td><span className="driver-name">Ali</span></td>
                                            <td><Tag color="cyan">20$</Tag></td>
                                            <td>Tehran</td>
                                            <td>karaj</td>
                                        </tr>
                                        
                                    
                                </tbody>
                            </table>
                        </div>
                </Content>
            </Layout>

        </div>
    )
}