import React , { useState } from 'react'
import useInput from '../../hooks/useInput';
import { Button , Upload, message} from "antd"
import { UploadOutlined } from '@ant-design/icons';
import Car from "../../assert/car.png"

import "./Car.css";

const FormCar = (props) =>{


    const {
        value : carName,
        isValid : carNameIsValid,
        hasError : carNameError,
        valueChangeHandler : handleCarname ,
        inputBlurHandler : handleCarnameBlur,
        reset : resetCarname
        } = useInput(value => value.trim() !=="");

        const {
            value : title,
            isValid : titleIsValid,
            hasError : titleError,
            valueChangeHandler : handleTitle ,
            inputBlurHandler : handleTitleBlur,
            reset : resetTitle
            } = useInput(value => value.trim() !=="");

            const {
                value : person,
                isValid : personIsValid,
                hasError : personError,
                valueChangeHandler : handlePerson ,
                inputBlurHandler : handlePersonBlur,
                reset : resetPerson
            } = useInput(value => value.trim() !=="");

    
    const handleSubmit=(event)=>{
        event.preventDefault();
        const namee = carName;
        const titlee = title;
        const personn = person;
        props.onSave(namee , titlee , personn);
        resetCarname();
        resetPerson();
        resetTitle();

    };

    let formIsvalid = false;

        if(carName && title && person){
            formIsvalid = true;
        }


    const img = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      const warningName = carNameError ? "warningInput" : "";
      const warningTitle = titleError ? "warningInput" : "";
      const warningPerson = personError ? "warningInput" : "";


    return(

        <div className="divForm-Car" >
            <form onSubmit={handleSubmit}>
                <div className="Car-img">
                    <img src={Car} alt="car" />
                </div>
                <div className="CarForm">
                    <input className={warningName}  type="text" value={carName} onChange={handleCarname} onBlur={handleCarnameBlur} placeholder="Enter Car type ..." />
                </div>
                <div className="CarForm">

                    <input className={warningTitle} type="text" value={title} onChange={handleTitle} onBlur={handleTitleBlur} placeholder="Enter Title ..." />
                </div>
                <div className="CarForm">

                    <input className={warningPerson} type="number" value={person} onChange={handlePerson} onBlur={handlePersonBlur} placeholder="How many person?" />
                </div>
                <div className="CarForm-image">
                    <Upload {...img}>
                        <Button icon={<UploadOutlined />}>Upload Image</Button>
                    </Upload>
                </div>
                <div className="formButton">
                    <Button type="primary" htmlType="submit" className="btn" disabled={!formIsvalid}>Add</Button>
                </div>
            </form>
        </div>





    );
};

export default FormCar
