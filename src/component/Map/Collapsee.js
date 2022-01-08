import React , { useState , useEffect } from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;



const Collapsee = () =>{
    const [ driver , setDriver ] = useState([]);
    useEffect(()=>{
        fetchDriver();
    },[]);


    const fetchDriver = async ()=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const item = await data.json();
        setDriver(item);
    }
    return(
        <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
        >
            {/* <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
                <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
                <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
                <p>{text}</p>
            </Panel> */}
            {driver.map((i)=>
                <Panel header={i.name} key={i.id} className="site-collapse-custom-panel">
                    <p>{i.username}</p>
                    
                </Panel>
            )}
        </Collapse>
    );
}

export default Collapsee;