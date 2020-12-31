import React, { useState} from 'react';
import { Button } from 'antd';
import { Layout } from 'antd';
import { Typography } from 'antd';
import logo from '../assets/Logo.png';
import fb from '../assets/fb.PNG';
import insta from '../assets/insta.PNG';
import { Row, Col } from 'antd';
import { Breadcrumb } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import './Search.css';
import '../App.css';
import { Input } from 'antd';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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
        console.log(info.file.name);
        localStorage.setItem("inputPic", info.file.name);
    } else if (info.file.status === 'error') {
        console.log(info.file.name);
        localStorage.setItem("inputPic", info.file.name);
      }
    },
  };

function SearchComponent(){
    const [inputString, setInputString] = useState(null)
    const [inputPic, setInputPic] = useState(null)

    function getData(val){
        setInputString(val.target.value)
    }
    function getPic(val){
        setInputPic(val.target.value)
    }
    function sendPicDataMale(){
        localStorage.setItem("sbiGender","M")
    }
    function sendPicDataFemale(){
        localStorage.setItem("sbiGender","F")
    }
    function sendDataMale(){
        console.log(inputString);
        localStorage.setItem("inputString", inputString);
        localStorage.setItem("gender", "M");
    }
    function sendDataFemale(){
        console.log(inputString);
        localStorage.setItem("inputString", inputString);
        localStorage.setItem("gender", "F");
    }

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
                                         
                                                    <Input placeholder="Search" onChange={getData}/>
                                                    
                                                <div className="search">
                                                <Link to="/search/SBTRes">
                                                <Button onClick={sendDataMale} type="primary" htmlType="submit">Search</Button>
                                                </Link>
                                                </div>
                                                
                                                <div className="horizontal-line">

                                                </div>
                                                <p style={{marginBottom: "5px"}}>Search by Image</p>
                                                
                                                <Row>
                                                    <Col span={12}>
                                                        <Upload {...props}>  
                                                        <div className="upload">
                                                            <Button icon={<UploadOutlined />}>Upload</Button>
                                                        </div>
                                                        </Upload>
                                                    </Col>
                                                    <Col span={12}>
                                                    <Link to="/search/SBIRes">
                                                        <div className="searchImage">
                                                            <Button onClick={sendPicDataMale} type="primary">Search</Button>
                                                        </div>
                                                        </Link>
                                                    </Col>
                                                </Row>

                                            </div>
                                        </Col>
                                        <Col span={4}>
                                        </Col>
                                        <Col span={10}>
                                            <div className="container-search-for-men">
                                                <p className="card-title">For Women</p>
                                                <p>Search by Text</p>
                                                <Input placeholder="Search" onChange={getData}/>

                                                <div className="search">
                                                <Link to="/search/SBTRes">
                                                <Button onClick={sendDataFemale} type="primary" htmlType="submit">Search</Button>
                                                </Link>
                                                </div>

                                                <div className="horizontal-line">

                                                </div>
                                                <p style={{marginBottom: "5px"}}>Search by Image</p>
                                                
                                                <Row>
                                                    <Col span={12}>
                                                        <Upload {...props}>  
                                                        <div className="upload">
                                                            <Button icon={<UploadOutlined />}>Upload</Button>
                                                        </div>
                                                        </Upload>
                                                    </Col>
                                                    <Col span={12}>
                                                    <Link to="/search/SBIRes">
                                                        <div className="searchImage">
                                                            <Button onClick={sendPicDataFemale} type="primary">Search</Button>
                                                        </div>
                                                        </Link>
                                                    </Col>
                                                </Row>

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