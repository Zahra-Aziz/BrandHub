import React from 'react';
import { Button } from 'antd';
import './App.css';
import { Layout } from 'antd';
import { Typography } from 'antd';
import logo from './assets/Logo.png';
import F1 from './assets/f1.PNG';
import F2 from './assets/f2.PNG';
import F3 from './assets/f3flip.jpeg';
import fb from './assets/fb.PNG';
import insta from './assets/insta.PNG';
import { Row, Col } from 'antd';
import { Breadcrumb } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import {Route , Switch, Link} from "react-router-dom";
import Search from './Features/Search';
import MAM from './Features/MAM';


const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <>

    <div className="App">
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
          <Row>
            <Col span={24}>

            <Breadcrumb>
            <Breadcrumb.Item>
              <a href="#">Login</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>

            </Col>
          </Row>
          </div>

          <Row>
              <Col span={16}>
                <div className="cont-feature-left">
                <h1 className="title-feature">Search by Image/Text</h1>
                <p className="para-feature-left">Have something in mind? want to explore new options and items? You're at the right place. Search by text\image allows you to search your desired product using simple keywords or any image, taken from the camera or from your gallery. </p>
                
                <div className="btn-shopforme">          
                <Link to="/Search"><Button type="primary">
                      Search
                  </Button></Link>
                </div> 
                </div>

              </Col>
              <Col span={8}>
                <div className="feature-img-right">
                  <img src={F1}/>
                </div>
              </Col>
          </Row>

          {/* <Row>
            <Col span={11}></Col>
            <Col span={2} style={{justifyContent:"center"}}>
              <div className="hl"></div>
            </Col>
            <Col span={11}></Col>
          </Row> */}

          <Row>
          <Col span={8}>
            <div className="feature-img-left">
              <img className="MAM-img" src={F3}/>
            </div>
          </Col>
          <Col span={16}>
            <div className="cont-feature-right">
            <h1 className="title-feature">Make a Match</h1>
            <p className="para-feature-right">Can't figure out what to match with a specific clothing item? We have you covered! Just upload an image of item you want matching with. Specify what you want matched with it and voila! We'll give you the best combinations. </p>
            
            <div className="btn-makeamatch">          
                <Link to="/mam"><Button type="primary">
                      Match
                  </Button></Link>
                </div> 
                </div>

              </Col>
              
          </Row>

          <Row style={{marginTop: "70px"}}>
            <Col span={8}>
              <div className="feature-img-left">
                <img style={{width:"500px"}} src={F2}/>
              </div>
            </Col>
            <Col span={16}>
            <div className="cont-feature-right">
                <h1 className="title-feature">Wishlist</h1>
                <p className="para-feature-right">Have eyes on something? But is it way over your budget? Or is it just not in the stock right now? Don't worry, we got you. Wish List allows you to store such items in it, and whenever that item goes on discount, or the item is re-stocked, we'll let you know, so that you buy what you want!</p>
                <div className="btn-wishlist">
                <Button
                    type="primary">
                    Wishlist
                  </Button>
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

export default App;
