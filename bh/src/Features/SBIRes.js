import React, {Component} from 'react';
import './SBIRes.css'
import { Button } from 'antd';
import { Layout } from 'antd';
import { Typography } from 'antd';
import logo from '../assets/Logo.png';
import fb from '../assets/fb.PNG';
import insta from '../assets/insta.PNG';
import { Row, Col } from 'antd';
import { Breadcrumb } from 'antd';
import { PoweroffOutlined, UserOutlined, HomeOutlined, SearchOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import '../App.css';
import { Input } from 'antd';
import axios from 'axios'
import { Image } from 'antd';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000'
})

const urlConvert = function (url){
  var URLArray;
  var id;
  var newURL;
  URLArray=url.split('/');
  //console.log(URLArray[5]);
  id = URLArray[5];
  // console.log(id);
  newURL="https://drive.google.com/thumbnail?id="+id;
  console.log(newURL);
  return newURL;
}

class SBIRes extends Component {

  state = {
    products: []
  }  

  constructor(){
    super();

    console.log(localStorage.getItem("sbiGender"));
    var inputGender = localStorage.getItem("sbiGender");

    if (inputGender=="M"){
      var apiURL = '/sbi/'+localStorage.getItem("inputPic")+'/M';
      console.log(apiURL)
    }
    if (inputGender=="F"){
      var apiURL = '/sbi/'+localStorage.getItem("inputPic")+'/F';
      console.log(apiURL)
    }

    api.get(apiURL).then(res =>{
      console.log(res.data)

      for (let prod of Object.keys(res.data)){
        var prods = res.data[prod];
        prods.ImageName[0] = urlConvert(prods.ImageName[0])
        this.setState({products:[...this.state.products, prods]})
      }
      
      
    })
  }

  render() {
    return (
        <div className="SBTRes">
        <Layout>
        <Header id="mainHeader">
   
         <div className="logo">
           <a href="#"><img src={logo} alt="logo"/></a>
         </div>
         
         <div className="logout">
         <Link to='/login'>
         <Button
             type="primary"
             icon={<PoweroffOutlined />}>
             Logout
           </Button>
           </Link>
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
          <div className="container-breadcrumbs">   
           <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <UserOutlined />
              <span><a>Login</a></span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <HomeOutlined/>
              <span><Link to="/"><a>Dashboard</a></Link></span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <SearchOutlined />
              <span><Link to="/search"><a>Search Results</a></Link></span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Search Results</Breadcrumb.Item>
          </Breadcrumb>
          </div>
             <Row>
               <Col span={24}>
                 <p className="pageHeading">Search Results for "{localStorage.getItem("inputPic")}"</p>
               </Col>
             </Row>

             {this.state.products.map(products => 
             <div className="itemContainer" key={products.PId}>
              
              <Row>
                <Col span={3}>
                  <Image 
                  width={120}
                  src={products.ImageName[0]}/>
                  
                </Col>
                <Col span={18}>
                
                <p className="productTitle">Name: {products.PName} </p>
                <p className="productDetail">Price: {products.PPrice} </p>
                <p className="productDetail">Fabric: {products.Fabric} </p>
                <p className="productDetail">Color: {products.Color} </p>
                
                </Col>
                <Col span={2}>
                
                <div className="openProductbtn">
                <Button><a href={products.Link} target="blank">Open Product!</a></Button>
                </div>
                                
                </Col>
                <Col span={1}>
                                
                </Col>
              </Row>
               

             </div>
             
             
             )}

           </Content>
           <Footer>Copyrights © 2020 BrandHub Pakistan Limited. All rights reserved </Footer>
         </Layout>
         
       </Layout>
       </div>  
    ); 
  }
}

export default SBIRes;