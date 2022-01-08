import React , {useState} from 'react'

const useInput = (validateValue) =>{
    const [ enterValue , setEnterValue ] = useState("");
    const [ isTouched , setIsTouched ] = useState(false);

    const valueIsValid = validateValue(enterValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) =>{
        setEnterValue(event.target.value);
    }

    const inputBlurHandler = () =>{
        setIsTouched(true);
    }

    const resetHandler = () =>{
        setIsTouched(false);
        setEnterValue("");
    }

    return{
        value : enterValue,
        isValid : valueIsValid,
        hasError : hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset : resetHandler
    }
}

export default useInput
