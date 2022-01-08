import React , {useState} from 'react'
import FormDocs from './FormDocs'
import { Card,Layout,Divider} from "antd";
import {CloseOutlined} from '@ant-design/icons'


const {  Content} = Layout;

function Document() {
    const [ list , setList ] = useState([]);
    const getData = (Ftitle,Fdesc,Furl , Fid)=>{
        setList((prev)=>{return [...prev,{title : Ftitle , description : Fdesc , url : Furl , id : Fid}]})
    }
    const deleteCard = (idd) =>{
        const newList = list.filter(i => i.id !== idd);
        setList(newList);
    }
    return (
        <Layout>
            <Content>
                <Card bordered title="Document">
                    <FormDocs onSavedata={getData} />
                    <Divider plain>Text</Divider>
                    <div className="showlist-doc">
                        {list.map((i)=>
                           <div className="card-Docs"  >
                               <div className="card-title-Docs">
                                   <h3>{i.title}</h3>
                                   <span className="cross-icon" onClick={()=>{deleteCard(i.id)}}><CloseOutlined /></span>
                               </div>
                               <div className="card-body-Docs">
                                   <p>{i.description}</p>
                                   <p>{i.url}</p>
                               </div>
                           </div>
                        )}
                    </div>
                </Card>
            </Content>
        </Layout>
    )
}

export default Document
