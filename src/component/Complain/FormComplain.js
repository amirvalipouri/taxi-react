import React , { useState } from 'react'
import { Button } from 'antd';
import useInput from '../../hooks/useInput';
import "./Complain.css";

const FormComplain = (props) =>{
    const [ id , setId ] = useState(1);
    const {
        value : title,
        isValid : titleIsValid,
        hasError : titleError,
        valueChangeHandler : handleTitle,
        inputBlurHandler : handleTitleBlur,
        reset : resetTitle,
    } = useInput(value => value.trim() !== "")

    let fromIsvalid = false;
    if(title){
        fromIsvalid = true ;
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        setId(id+1);
        props.savedata(title , id);
        resetTitle();
    }

    const warning = titleError ? "warningInput" : "" ;
    return(
        <div className="divForm">
            <form onSubmit={handleSubmit}>
                <div className="formcomplain">
                    <h3>Title : </h3>
                    <input className={warning} type="text" value={title} onChange={handleTitle} onBlur={handleTitleBlur} placeholder=" Enter title ..."/>
                    <Button type="primary" htmlType="submit" className="btn" disabled={!fromIsvalid}>Add</Button>
                </div>
                
            </form>
        </div>
    );
};

export default FormComplain
