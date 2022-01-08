import React from 'react'
import { Tag} from 'antd';
import { Chart } from "react-google-charts";
import BankAccount from "../RiderDetails/BankAccount"
import './DriverPayment.css'

const DriverPayment = () => {
    const data = [{ref : 202 , price : 20 , data : "11.10.2021" , reqq : "Deposit" , situation : "Paid"},
    {ref : 203 , price : 30 , data : "11.10.2021" , reqq : "Deposit" , situation : "Paid"},
    {ref : 204 , price : 40 , data : "11.10.2021" , reqq : "withdraw" , situation : "Not Paid"},
    {ref : 205 , price : 50 , data : "11.10.2021" , reqq : "Deposit" , situation : "Paid"},
    {ref : 206 , price : 60 , data : "11.10.2021" , reqq : "withdraw" , situation : "Not Paid"},]
    return(
        <div className="container-driverPayment">
                <div className="chart-driver">
                        <BankAccount />
                        <div style={{overflowX : "auto"}}>
                            <Chart
                                width={'600px'}
                                height={'350px'}
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
                                    title: 'Driver earning',
                                    },
                                }}
                                // For tests
                                rootProps={{ 'data-testid': '2' }}
                            />
                        </div>
                </div>
            <div className="driver-table-div">
                <table className="table-tag-driver">
                    <thead>
                        <tr>
                            <th>Reference code</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Request</th>
                            <th>situation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((i)=> 
                            <tr>
                                <td>{i.ref}</td>
                                <td><Tag color="cyan">{i.price}$</Tag></td>
                                <td>{i.data}</td>
                                {i.reqq=="withdraw" && <td><Tag  color="red">{i.reqq}</Tag></td>}
                                {i.reqq=="Deposit" && <td><Tag  color="green">{i.reqq}</Tag></td>}
                                <td>{i.situation}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DriverPayment
