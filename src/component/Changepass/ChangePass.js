import React , {useState , useContext} from 'react'
import useInput from '../../hooks/useInput';
import './Changepass.css'
import AuthContext from '../../store/auth-context';
import { Breadcrumb , Button } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import Changepassword from '../../assert/changepass.png';
import Nav from '../Nav/Nav';

const ChangePass = () =>{
    const authCtx = useContext(AuthContext)
    const [ same , setSame ] = useState(true)
    
    const {
        value : RepPass,
        isValid : RepPassIsValid,
        hasError : RepPasshasError,
        valueChangeHandler :handleRepPass,
        inputBlurHandler : handleRepPassBlur,
        reset : resetRepPass
    } = useInput(value => value.trim() !== "");

    const {
        value : username,
        isValid : usernameIsValid,
        hasError : usernamehasError,
        valueChangeHandler :handleusername,
        inputBlurHandler : handleusernameBlur,
        reset : resetusername
    } = useInput(value => value.trim() !== "");


    const {
        value : NewPass,
        isValid : NewPassIsValid,
        hasError : NewPasshasError,
        valueChangeHandler :handleNewPass,
        inputBlurHandler : handleNewPassBlur,
        reset : resetNewPass
    } = useInput(value => value.trim() !== "");

    const handleSubmit = async (event)=>{
        event.preventDefault();

        if(NewPass===RepPass && NewPass && RepPass && username){
            setSame(true)
            resetNewPass();
            resetRepPass();
            resetusername();
        }else{
            setSame(false)
        }

        try{
            const resChangepass = await fetch("https://api.ftft.uk/dev/admins/auth/changePassword/",{
                method : "POST",
                headers : {"Content-Type": "application/json",
                "Authorization" : authCtx.token
            },
                
                body: JSON.stringify({
                    username : username ,
                    newPassword  : NewPass
                })
    
            })
            const resChangepassParsed = await resChangepass.json();
            console.log(resChangepassParsed)
            if(resChangepassParsed.success){
                console.log("trueee")
            }else{
                console.log("falseeee")
            }
    
    
        }catch(error){
            
        }
        
    }

        let formIsvalid = false;

        if(username && NewPass && RepPass){
            formIsvalid = true;
        }
    

    const warningNew = NewPasshasError ? "warning-changepass" : "changepass-input";
    const warningRep = RepPasshasError ? "warning-changepass" : "changepass-input"; 
    const warningUser = usernamehasError ? "warning-changepass" :"changepass-input"; 
    return(
        <div className="Change-pass">
            <Nav/>
            <div className="changepassword-breadcrumb">
            <Breadcrumb>
                        <Breadcrumb.Item href="/home/:section">
                            <HomeOutlined />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                        <span>Change Password</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
            </div>
            <div className="Divchangepassword-admin">
                    <div className="changepass-svg">
                        <img src={Changepassword} alt="change password" />
                    </div>
                    <form onSubmit={handleSubmit} className="form-admin-changepass">
                        <div className="changepassword-admin">
                            <input className={warningUser} value={username} onChange={handleusername} onBlur={handleusernameBlur}  type="text" placeholder="Username" />
                        </div>
                        <div className="changepassword-admin">
                            <input className={warningNew} value={NewPass} onChange={handleNewPass} onBlur={handleNewPassBlur}  type="password" placeholder="New password" />
                        </div>
                        <div className="changepassword-admin">
                            <input className={warningRep} value={RepPass} onChange={handleRepPass} onBlur={handleRepPassBlur} type="password" placeholder="Repeat password" />
                        </div>
                        <div className="changepass-btn">
                            <Button type="primary" htmlType="submit" disabled={!formIsvalid}>Change password</Button>
                        </div>

                        {!same && <p>password </p>}
                    </form>
            </div>
        </div>
    );
}

export default ChangePass
