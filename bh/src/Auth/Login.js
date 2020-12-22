import { Row, Col } from 'antd';
import { Layout } from 'antd';
import React from 'react';
import {Route , Switch, Link} from "react-router-dom";
import './Login.css'
import { Input } from 'antd';
import { Button } from 'antd';



function Login(){
return (
<>
<div className="Login">
<Layout>
 <Row>
     <Col span={24}>
        <div className="container">
            <Row>
                <Col span={6}></Col>
                <Col span={12}>
                <div className="container-login">
                    <Row>
                    <Col span={11}>
                        <div className="left-login">
                            <p className="heading">Login</p>
                            <div className="login-content">
                                <p style={{marginBottom: "5px"}}>Enter Email</p>
                                <Input placeholder="abc@gmail.com" />
                                <p style={{marginBottom: "5px"}}>Enter Password</p>
                                <Input style={{marginBottom: "2px", marginTop: "0px"}} placeholder="Password" />
                                <p style={{textAlign:"right", marginRight: "30px"}}>Forgot Password?</p>
                                <div className="btn-login">
                                <Button type="primary">Login</Button>
                                </div>
                                <p style={{marginLeft: "32px", marginTop: "25px"}}>New here? Signup Now!</p>
                                
                                
                            </div>
                        </div>
                    </Col>
                    <Col style={{marginTop: "60px"}} span={1}>
                        <div className="mid">         
                        </div>
                        <p style={{marginBottom:"0px"}} className="heading">OR</p>
                        <div className="mid">         
                        </div>
                    </Col>
                    <Col span={11}>
                        <div className="right-guest">
                            <p style={{marginBottom: "10px", marginTop: "150px"}} className="heading">Continue as Guest</p>
                            <div className="btn-guest">
                                <Button type="primary">Continue</Button>
                            </div>
                        </div>
                    </Col>
                    </Row>
                </div>
                </Col>
                <Col span={6}></Col>
            </Row>
        </div>
     </Col>
 </Row>
</Layout>
</div>
</>
);
}

export default Login;