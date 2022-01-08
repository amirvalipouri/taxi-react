import React , { useState } from 'react';
import { Card, Col, Row, Statistic ,Layout} from "antd";
import Document from '../Docs/Document';
const { Content } = Layout;

const Setting = () =>{
    const [ driverRestTime , setDriverRestTime ] = useState("");
    const [ riderDelayTime , setRiderDelayTime ] = useState("");
    const [ costPerMin , setCostPerMin ] = useState("");
    return(
        <Layout>
            <Content>
            <Card bordered title="Setting" style={{marginBottom : "2rem"}}>
                
                <Row gutter={16}>
                    <Col  style={{ marginTop : 5 , marginBottom :5}}  span={8} lg={8} md={12} sm={24} xs={24}>
                        <Card bordered>
                            <Statistic title="Driver Rest Time" value={driverRestTime} valueStyle={{ color: "#36486b" }} />
                        </Card>
                    </Col>
                    <Col style={{ marginTop : 5 , marginBottom :5}} span={8} lg={8} md={12} sm={24} xs={24}>
                        <Card bordered>
                            <Statistic title="Rider Delay Time" value={riderDelayTime} precision={0} valueStyle={{ color: "#36486b" }} />

                        </Card>
                    </Col>
                    <Col  style={{ marginTop : 5 , marginBottom :5}}  span={8} lg={8} md={12} sm={24} xs={24}>
                        <Card bordered>
                            <Statistic title="Cost per minute" value={costPerMin} valueStyle={{ color: "#36486b" }} />
                        </Card>
                    </Col>

                </Row>
                
            </Card>

                <div>
                    <Document/>
                </div>
            
            </Content>
            </Layout>
    );
};

export default Setting
