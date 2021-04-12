import React, { useState} from 'react';
import { Button } from 'antd';
import { Layout } from 'antd';
import { Typography } from 'antd';
import logo from '../assets/Logo.png';
import fb from '../assets/fb.PNG';
import insta from '../assets/insta.PNG';
import upload from '../assets/upload.png';
import bg from '../assets/halfbg.PNG';
import { Row, Col } from 'antd';
import { Breadcrumb } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import './MAM.css';
import '../App.css';
import { Input } from 'antd';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import SBTRes from './SBTRes'

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

function MAM(){
    console.log("opening");
    return (
        
        <div className="Search">

        <Layout>
            <Header id="mainHeader">
                <div className="logo">
                    <Link to="/">
                        <a><img src={logo} alt="logo"/></a>
                    </Link>
                </div>
                <div className="logout">
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}>
                        Logout
                    </Button>
                </div> 

                <div className="container-header-btn">
                    <div className="header-btn">
                        <Button type="primary"> Home </Button>
                        <Button type="primary"> Contact </Button>
                        <Button type="primary"> About Us </Button>
                    </div> 
                </div>
            <div className="vl"></div>

                <div className="container-social-media-btn">
                    <img className="fb-btn" alt="facebook" src={fb}/>
                    <img className="insta-btn" alt="instagram" src={insta}/>
                </div>

            </Header>
            
            <Row>
                <Col span={24}>
                     <div className="container-upper">
                        <div className="overlay">
                            <p className="heading-upper">Make a Match</p>
                            
                            <Row>
                               
                            <Col span={5}></Col>
                                <Col span={4} >
                                    <div className="container-upload">
                                    <p className="normal-text">Upload the item whose match you want</p>
                                    <img className="upload-img"  src={upload}/>
                                    <div className="uploadmam">
                                        <Button icon={<UploadOutlined />}>Upload</Button>
                                    </div>
                                    </div>
                                      
                                </Col>
                               

                                <Col span={6}>
                                    <div className="hl"></div>
                                </Col>
                                    <Col span={4} >
                                    <div className="container-itemtype">
                                        <p className="normal-text">Choose the item you want to make a match with</p>
                                        <img className="upload-img"  src={upload}/>
                                        <div>
                                        <Input  className="input-field" placeholder="Enter item type: Top/Bottom" />
                                        </div>
                                       
                                        
                                    </div>
                                </Col>
                                <Col span={5}></Col>

                            </Row>

                            <Row>
                                <div className="btn-makeamatchmam" style={{marginLeft:'45.5%'}}>          
                                    <Link to="/mam">
                                        <Button type="primary">Give me a Match!</Button>
                                    </Link>
                                </div>
                            </Row>

                        </div>
                        </div>
                    </Col>
            </Row>
        </Layout>
            <Footer>Copyrights © 2020 BrandHub Pakistan Limited. All rights reserved </Footer>
            
       

    </div>
    );
}

export default MAM;