import React , {useState} from 'react'
import FormComplain from './FormComplain';
import Like from './Like';
import { Layout , Rate , Button , Divider } from 'antd';
import "./Complain.css";

const { Content} = Layout;

const Complain = () =>{
    const [ li2 , setLi2 ] = useState([]);
    const getData = (FormTitle , Idtitle) =>{
        setLi2((prev)=>{return [...prev , {title : FormTitle , id : Idtitle}]})
    }

    const handleRemoveItem = (idd) => {
        // const key = e.target.getAttribute("key")
        // setLi2(li2.filter(x => x.id !== key));
        const newLi2 = li2.filter((i)=>i.id !==idd);
        setLi2(newLi2);
    };
    return(
        <Layout>
            <Content>
                <FormComplain savedata={getData}/>
                <Divider plain>Complains</Divider>
                <div className="container-complain">
                    {li2.map((i)=>
                        <div className="divcomplain">
                            <div className="div-header">
                                <h1>{i.title}</h1>
                                
                                <Rate disabled defaultValue={2} />
                                <div className="divIcon">
                                    <Like/>
                                </div>
                                <div>
                                    <Button htmlType="button" onClick={()=>handleRemoveItem(i.id) } type="primary" danger>Delete</Button>
                                </div>
                            </div>
                            
                        </div>
                    )}
                </div>
            </Content>
        </Layout>
    );
};

export default Complain
