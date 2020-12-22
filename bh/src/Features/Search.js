import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Layout } from 'antd';
import { Typography } from 'antd';
import logo from '../assets/Logo.png';
import bg from '../assets/bg.jpg';
import fb from '../assets/fb.PNG';
import men from '../assets/men.jpg'
import insta from '../assets/insta.PNG';
import { Row, Col } from 'antd';
import { Breadcrumb } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import {Route , Switch, Link} from "react-router-dom";
import './Search.css';
import '../App.css';
import { Input, Form } from 'antd';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios'
import SBTRes from './SBTRes'




const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const onSearch = value => console.log(value);
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

function SearchComponent(){
    const onFinishh = (value) => {
        // localStorage.setItem("searchString", value.searchString);
        console.log(value)
    };
    const [input, setInput] = useState("");

    useEffect(() => {
        if (input !== "")
            console.log(input);
    }, [input]);
    return(
    <>
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
                <Button
                type="primary">
                Home
                </Button>
                <Button
                type="primary">
                Contact
            </Button>
            <Button
            type="primary">
                About Us
                </Button>
            </div> 
            </div>
            
            <div className="vl"></div>

            <div className="container-social-media-btn">
                <img className="fb-btn" alt="facebook" src={fb}/>
                <img className="insta-btn" alt="instagram" src={insta}/>
            </div>

            </Header>
            
            <Layout>
                <Content>
                    <Row>  
                        <Col span={24}>   
                            <div className="container-upper">
                            <div className="overlay">
                                <div className="container-upper-content">
                                    <p className="feature-heading">Search Like a Pro</p>
                                    <Row>
                                        <Col span={10}>
                                            <div className="container-search-for-men">
                                                <p className="card-title">For Men</p>
                                                <p>Search by Text</p>
                                         
                                                    <Input placeholder="Search" />
                                                    
                                                <div className="search">
                                                <Link to="/search/SBTRes">
                                                <Button type="primary" htmlType="submit">Search</Button>
                                                </Link>
                                                </div>
                                                
                                                <div className="horizontal-line">

                                                </div>
                                                <p>Search by Image</p>
                                                
                                                <Upload {...props}>
                                                <div className="upload">
                                                <Button icon={<UploadOutlined />}>Upload Image</Button>
                                                </div>
                                                </Upload>
                                            </div>
                                        </Col>
                                        <Col span={4}>
                                        </Col>
                                        <Col span={10}>
                                            <div className="container-search-for-men">
                                                <p className="card-title">For Women</p>
                                                <p>Search by Text</p>
                                                <Input placeholder="Search" />
                                                <div className="horizontal-line">

                                                </div>
                                                <p>Search by Image</p>
                                                
                                                <Upload {...props}>
                                                <div className="upload">
                                                <Button icon={<UploadOutlined />}>Upload Image</Button>
                                                </div>
                                                </Upload>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            </div>
                        
                        </Col>
                    </Row>
                </Content>
            <Footer>Copyrights © 2020 BrandHub Pakistan Limited. All rights reserved </Footer>
            </Layout>
        </Layout>

    </div>
    </>
    );
}

export default SearchComponent;