import React, {  useEffect,  useState } from "react";
import Payment from './Payment/Payment';
// Checkbox, Descriptions, Row, Col, Typography, Progress, Statistic 
import { Layout, Menu, Card, Table, Tag, Space, Button} from 'antd';
import { SettingOutlined , UserOutlined , CarOutlined, LockOutlined,SmileOutlined, TeamOutlined,DollarCircleOutlined,GlobalOutlined, AppstoreOutlined , SnippetsOutlined , FileOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
// import Highlighter from "react-highlight-words";
import { Drivers } from "./Drivers";
import { Dashboard } from "../component/Dashboard/Dashboard";
import Riders from "./Riders";
import './css/Home.css';
import Admin from "./Admin/Admin";
import Setting from './Settingg/Setting'
import Complain from "./Complain/Complain";
import Car from "./Car/Car";
import Map from "./Map/Map";
import Nav from "./Nav/Nav";
import Document from "./Docs/Document";
// const { SubMenu } = Menu;
const { Content, Footer, Sider , Header } = Layout;



export const Home = () => {

    const { section } = useParams();
    const server = "http://localhost:3001";
    const [key, setKey] = useState(section);
    // const [admins, setAdmins] = useState([]);

    // const [isAddAdminModalVisible, setIsAddAdminModalVisible] = useState(false);
    // const [isChangePasswordModalVisible, setIsChangePasswordModalVisible] = useState(-1);
    // const [isModifyAccessModalVisible, setIsModifyAccessModalVisible] = useState(-1);

    // const arr = ["hey", "do", "had"];

    // const [accesses, setAccesses] = useState([]);


    // const handleCancelAddAdminModal = () => {
    //     setIsAddAdminModalVisible(false);
    // };
    // const handleCancelChangePasswordModal = () => {
    //     setIsChangePasswordModalVisible(-1);
    // };
    // const handleCancelModifyAccessModal = () => {
    //     setIsModifyAccessModalVisible(-1);
    // };

    // function remove(arr) {
    //     var what, a = arguments, L = a.length, ax;
    //     while (L > 1 && arr.length) {
    //         what = a[--L];
    //         while ((ax = arr.indexOf(what)) !== -1) {
    //             arr.splice(ax, 1);
    //         }
    //     }
    //     return arr;
    // }
    // const getAdmins = () => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.withCredentials = true;

    //     xhr.addEventListener("readystatechange", function () {
    //         if (this.readyState === 4) {
    //             try {
    //                 console.log(this.responseText)
    //                 const { status, list } = JSON.parse(this.responseText);
    //                 if (status === "ok") setAdmins(list);
    //                 else alert("get list failed");
    //             } catch (error) {
    //                 console.log(error);
    //                 alert("Error ,refresh this page!");
    //             }
    //         }
    //     });

    //     xhr.open("GET", `${server}/v1/admin/info/admins`);
    //     xhr.setRequestHeader("Content-Type", "application/json");

    //     xhr.send();
    // }
    // const onAddAdminFormFinish = (params) => {
    //     try {
    //         const xhr = new XMLHttpRequest();
    //         xhr.withCredentials = true;

    //         xhr.addEventListener("readystatechange", function () {
    //             if (this.readyState === 4) {

    //                 try {

    //                     const { status, message } = JSON.parse(this.responseText);
    //                     if (status === "ok") {
    //                         handleCancelAddAdminModal();
    //                         getAdmins();
    //                     }
    //                     else {
    //                         alert(message);
    //                         handleCancelAddAdminModal();
    //                     }
    //                 } catch (error) {
    //                     alert("error in create admin request!");
    //                 }
    //             }
    //         });   

    //         xhr.open("POST", `${server}/v1/admin/auth/create`);
    //         xhr.setRequestHeader("Content-Type", "application/json");

    //         xhr.send(JSON.stringify({ ...params, accesses: [] }));
    //     } catch (error) {
    //         alert("create account were faild!");
    //     }
    // }
    // const deleteAdmin = (key) => {
    //     try {


    //         const xhr = new XMLHttpRequest();
    //         xhr.withCredentials = true;

    //         xhr.addEventListener("readystatechange", function () {
    //             if (this.readyState === 4) {
    //                 console.log(this.responseText);
    //                 try {
    //                     const { status, message } = JSON.parse(this.responseText);

    //                     if (status === "ok") getAdmins();
    //                     else alert(message);
    //                 } catch (error) {
    //                     alert("delete admin request failed1");
    //                 }
    //             }
    //         });

    //         xhr.open("POST", `${server}/v1/admin/auth/delete`);
    //         xhr.setRequestHeader("Content-Type", "application/json");

    //         xhr.send(JSON.stringify(admins[key]));
    //     } catch (error) {
    //         alert("delete user failed!!!!!!");
    //     }
    // }
    // const onChangePasswordFinish = ({ newPassword }) => {
    //     try {
    //         const xhr = new XMLHttpRequest();
    //         xhr.withCredentials = true;

    //         xhr.addEventListener("readystatechange", function () {
    //             if (this.readyState === 4) {

    //                 try {

    //                     const { status, message } = JSON.parse(this.responseText);
    //                     if (status === "ok") {
    //                         handleCancelChangePasswordModal();
    //                         getAdmins();
    //                     }
    //                     else {
    //                         alert(message);
    //                         handleCancelChangePasswordModal();
    //                     }
    //                 } catch (error) {
    //                     alert("error in create admin request!");
    //                 }
    //             }
    //         });

    //         xhr.open("POST", `${server}/v1/admin/auth/changePassword`);
    //         xhr.setRequestHeader("Content-Type", "application/json");

    //         xhr.send(JSON.stringify({ newPassword, username: admins[isChangePasswordModalVisible].username }));

    //     } catch (error) {
    //         alert("change password failed !");
    //     }
    // }
    // const columns = [
    //     {
    //         title: 'Username',
    //         dataIndex: 'username',
    //         key: 'username',
    //         render: text => <a>{text}</a>,
    //     },
    //     {
    //         title: "Last login",
    //         dataIndex: 'lastLogin',
    //         key: 'lastLogin',
    //         render: text => <a>{text}</a>,

    //     },
    //     {
    //         title: 'Accesses',
    //         key: 'accesses',
    //         dataIndex: 'accesses',
    //         render: tags => (
    //             <div>
    //                 {tags.map(tag => {
    //                     let color = tag.length > 5 ? 'geekblue' : 'green';
    //                     if (tag === 'loser') {
    //                         color = 'volcano';
    //                     }
    //                     return (
    //                         <Tag color={color} key={tag}>
    //                             {tag.toUpperCase()}
    //                         </Tag>
    //                     );
    //                 })}
    //             </div>
    //         ),
    //     },
    //     {
    //         title: 'Action',
    //         key: 'action',
    //         render: ({ key }, record) => (
    //             <Space size="middle">
    //                 <Button type="primary" onClick={() => { setIsModifyAccessModalVisible(key) }}>
    //                     Modify access
    //                 </Button>

    //                 <Button danger onClick={() => { setIsChangePasswordModalVisible(key) }} >
    //                     Change password
    //                 </Button>
    //                 <Button danger type="dashed" onClick={() => { deleteAdmin(key) }} >
    //                     Delete
    //                 </Button>
    //             </Space>
    //         ),
    //     },
    // ];
    // const data = admins.map((item, index) => {
    //     return {
    //         key: index,
    //         username: item.username,
    //         accesses: item.accesses,
    //         lastLogin: new Date(item.lastLogin || 0).toLocaleString(),
    //     }
    // });

    // const onModifyFinish = () => {
    //     try {

    //         const xhr = new XMLHttpRequest();
    //         xhr.withCredentials = true;

    //         xhr.addEventListener("readystatechange", function () {
    //             if (this.readyState === 4) {

    //                 try {
    //                     const { status, message } = JSON.parse(this.responseText);
    //                     if (status === "ok") {
    //                         getAdmins();
    //                     } else {
    //                         alert(message)
    //                     }
    //                     handleCancelModifyAccessModal()
    //                     setAccesses([]);

    //                 } catch (error) {
    //                     alert("Error in request!");
    //                 }
    //             }
    //         });

    //         xhr.open("POST", `${server}/v1/admin/auth/upgrade`);
    //         xhr.setRequestHeader("Content-Type", "application/json");

    //         xhr.send(JSON.stringify({ username: admins[isModifyAccessModalVisible].username, accesses }));
    //     } catch (error) {
    //         alert("Error in update accesses!")
    //     }
    // }
    // useEffect(getAdmins, []);

    return (
        <Layout>
                <Nav/>
                <Sider
                style={{marginTop : "4rem"  }}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                >
                <Menu
                            defaultSelectedKeys={['dashboard']}
                            onSelect={({ key: itemKey }) => {
                                setKey(itemKey)
                            }}
                            mode="inline"
                            defaultSelectedKeys={[key.toString()]}
                            style={{ height: '150vh' }}
                        >
                           

                            <Menu.Item icon={<AppstoreOutlined />} key="dashboard">Dashboard</Menu.Item>
                            <Menu.Item icon={<UserOutlined />} key="admin">Admins</Menu.Item>
                            <Menu.Item icon={<CarOutlined />} key="drivers">Drivers</Menu.Item>
                            <Menu.Item icon={<SmileOutlined />} key="riders">Riders</Menu.Item>
                            <Menu.Item icon={<CarOutlined />} key="car">Cars</Menu.Item>
                            <Menu.Item icon={<GlobalOutlined />} key="live">Live Location</Menu.Item>                           
                            <Menu.Item icon={<TeamOutlined />} key="trips">Trips</Menu.Item>
                            <Menu.Item icon={<DollarCircleOutlined />} key="payment">Payment</Menu.Item>
                            <Menu.Item icon={<SnippetsOutlined />} key="complain">Complain</Menu.Item>
                            <Menu.Item icon={<SettingOutlined />} key="setting">Setting</Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                
                <Content style={{ margin: '24px 16px 0' , marginTop : "4.8rem" }}>

                {/* {
                            key === 1 &&
                            <Card title="Admins" extra={
                                <Button type="primary" onClick={() => setIsAddAdminModalVisible(!isAddAdminModalVisible)}>
                                    Add admin
                                </Button>
                            } >
                                <Table columns={columns} bordered dataSource={data} />

                            </Card>

                        } */}
                        {
                            key === "dashboard" && <Dashboard/>
                        }
                        {
                            key === "drivers" && <Drivers></Drivers>
                        }
                        {
                            key === "riders" && <Riders></Riders>
                        }
                        {
                            key === "admin" && <Admin></Admin>
                        }
                        
                        {
                            key === "complain" && <Complain></Complain>
                        }{
                            key === "car" && <Car></Car>
                        }
                        {
                            key === "live" && <Map></Map>
                        }
                        {
                            key === "payment" && <Payment></Payment>
                        }
                        {
                            key === "setting" && <Setting></Setting>
                        }
                        {
                            key === "document" && <Document></Document>
                        }





{/* 
                        <Modal title="Add admin" visible={isAddAdminModalVisible} onCancel={handleCancelAddAdminModal} footer={null}>

                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={onAddAdminFormFinish}

                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Create
                                    </Button>
                                </Form.Item>
                            </Form>


                        </Modal>


                        {
                            isChangePasswordModalVisible !== -1 &&
                            <Modal title={`Change ${admins[isChangePasswordModalVisible].username}'s password`} visible={isChangePasswordModalVisible === -1 ? false : true} onCancel={handleCancelChangePasswordModal} footer={null} >

                                <Form
                                    name="normal_login"
                                    className="login-form"
                                    initialValues={{ remember: true }}
                                    onFinish={onChangePasswordFinish}

                                >
                                    <Form.Item
                                        name="newPassword"
                                        rules={[{ required: true, message: 'Please input your Password!' }]}
                                    >
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            type="password"
                                            placeholder="new password"
                                        />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Change
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Modal>
                        }


                        {
                            isModifyAccessModalVisible !== -1 &&
                            <Modal title={`Change ${admins[isModifyAccessModalVisible].username}'s accesses`} visible={isModifyAccessModalVisible === -1 ? false : true} onCancel={handleCancelModifyAccessModal} onOk={onModifyFinish}>

                                {
                                    arr.map((item, index) => (
                                        <CheckableTag
                                            key={index}
                                            checked={accesses.includes(item)}
                                            onChange={(bool) => {
                                                if (!accesses.includes(item)) {
                                                    setAccesses([...accesses, item]);
                                                }
                                                else {
                                                    setAccesses([...remove(accesses, item)]);
                                                }
                                            }}
                                        >
                                            {item}
                                        </CheckableTag>
                                    ))
                                }

                            </Modal>
                        } */}

                </Content>
                <Footer style={{ textAlign: 'center' }}>Taxi ©2021</Footer>
                </Layout>
            </Layout>
    )
}