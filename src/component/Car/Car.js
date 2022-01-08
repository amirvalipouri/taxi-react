import React , { useState } from 'react';
import "./Car.css";
// import Luxury from '../../assert/Luxury.jpg';
// import Normal from '../../assert/Normal.jpg';
// import Van from '../../assert/Van.jpg';
import {Button , Divider } from 'antd';
import FormCar from './FormCar';



const Car = () =>{
    const [ itemCar , setItemCar ] = useState([]);
    const getData = (fname ,ftitle, fperson) =>{
        setItemCar((prev)=>{return [...prev , {title : ftitle , name : fname , person : fperson}]})
    }


    const handleRemoveItem = (e) => {
        // const name = e.target.getAttribute("name")
        // setItemCar(itemCar.filter(item => item.name !== name));

        const newList = itemCar.filter(i=> i.name !== e);
        setItemCar(newList)
       };


    return(

       <div>
           <FormCar onSave={getData}  />
           <Divider plain>Cars</Divider>
            <div className="carList">
                {itemCar.map((i)=>
                <div className="Card-car">
                        <div>
                            <img src="" alt={i.name} />
                        </div>
                        <div className="detail-car">
                            <h2>{i.name}</h2>
                            <h3>{i.title}</h3>
                            <p>Untill {i.person} Persons</p>
                        </div>
                        <div className="deletebtn-car">
                            {/* <button name={i.name} onClick={handleRemoveItem}>Delete</button> */}
                            <Button name={i.name} onClick={()=>handleRemoveItem(i.name)} htmlType="button" type="primary" danger>Delete</Button>
                        </div>
                    </div> 
                )}
            </div>
       </div>
    );
};

export default Car;