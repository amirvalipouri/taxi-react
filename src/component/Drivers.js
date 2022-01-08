import React, { useState, useEffect} from "react";
import {Link
  } from "react-router-dom";
import {Button} from "antd";

import './css/Driver.css'

export const Drivers = () => {


    // const [isChangeDriverStatusModalVisible, setIsChangeDriverStatusModalVisible] = useState(-1);
    // const searchInput = useRef(null);
    // const [searchText, setSearchText] = useState('');
    // const [searchedColumn, setSearchedColumn] = useState('')


    // const changeDriverStatusModalOnCancel = () => {
    //     setIsChangeDriverStatusModalVisible(-1);
    // }
    // useEffect(() => {
    //     try {

    //         var xhr = new XMLHttpRequest();
    //         xhr.withCredentials = true;

    //         xhr.addEventListener("readystatechange", function () {
    //             if (this.readyState === 4) {

    //                 try {
    //                     const { status, message, list } = JSON.parse(this.responseText);
    //                     if (status === "ok") {
    //                         setDrivers(list);
    //                     } else {
    //                         alert(message);
    //                     }
    //                 } catch (error) {
    //                     Alert("Error in fetch drivers!");
    //                 }

    //             }
    //         });

    //         xhr.open("GET", `${server}/v1/admin/info/drivers`);
    //         xhr.send();
    //     } catch (error) {
    //         Alert("Error in fetch drivers!");
    //     }
    // }, []);



    const [ driver , setDriver ] = useState([]);

    const fetchDriver = async ()=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const item = await data.json();
        setDriver(item);

    }
    
    useEffect(()=>{
        fetchDriver();
    },[fetchDriver]);
    
    return (
        <div>
            <div className="title-driver">
                <p>Drivers</p>
            </div>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Show Details</th>
                    </tr>
                </thead>
                <tbody>
                    {driver.map((i)=><tr>
                        <td>{i.name}</td>
                        <td>{i.id}</td>
                        <td> <Button ><Link to={`/driver/${i.id}`}>Show</Link></Button> </td>
                    </tr>)}
                </tbody>
            </table> 
        </div>
        </div>
    )
}

export default Drivers;
