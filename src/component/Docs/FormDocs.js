import { Button ,Divider } from 'antd';
import React , {useState } from 'react'
import useInput from '../../hooks/useInput';
import DocImage from '../../assert/document.png'
import style from './Docs.css';

const FormDocs = (props) =>{
    const [ id , setId ] = useState(0);
    const {
        value : title,
        isValid : TitleIsValid,
        hasError : TitleError,
        valueChangeHandler: handleTitle,
        inputBlurHandler : handleTitleBlur ,
        reset : resetTitle
    } = useInput(value => value.trim() !=="")





    const {
        value : description,
        isValid : DesIsValid,
        hasError : DesError,
        valueChangeHandler: handleDescription,
        inputBlurHandler : handleDescriptionBlur ,
        reset : resetDes
    } = useInput(value => value.trim() !=="")

    const {
        value : url,
        isValid :UrlIsValid,
        hasError : UrlError,
        valueChangeHandler: handleURL,
        inputBlurHandler : handleURLBlur ,
        reset : resetUrl
    } = useInput(value => value.trim() !=="")

    const handleSubmit =(event)=>{
        event.preventDefault();
        setId(prev=>prev+1);
        const TitleDoc = title;
        const DescriptionDoc = description;
        const urlDoc = url;
        const idDoc = id;
        props.onSavedata(TitleDoc,DescriptionDoc , urlDoc , idDoc)

        resetDes();
        resetTitle();
        resetUrl();
    }
    let formisValid = false;

    if(description && title && url){
        formisValid = true;
    }

    const warningTitle = TitleError ? "warning-des" : "";
    const warningUrl = UrlError ? "warning-des" : "";
    const warningDes = DesError ? "warning-des" : ""; 
    return(
        <div className="div-Form-Description">
            <form onSubmit={handleSubmit}>
                <div className="DocImg">
                    <img src={DocImage} alt="Document Image" />
                </div>
                <div className="formInput-Document">
                    <input className={warningTitle} type="text" value={title} onChange={handleTitle} onBlur={handleTitleBlur} placeholder="Title" />
                </div>

                <div className="formInput-Document">
                    <input className={warningDes} type="text" value={description}  onChange={handleDescription} onBlur={handleDescriptionBlur} placeholder="Description" />
                </div>

                <div className="formInput-Document">
                    <input className={warningUrl} type="text" value={url} onChange={handleURL} onBlur={handleURLBlur} placeholder="URL" />
                </div>

                <div className="btn-docs">
                    <Button type="primary" htmlType="submit" disabled={!formisValid}>Add</Button>
                </div>
            </form>
        </div>
    )
}

export default FormDocs
