import React from 'react';
//import {Jumbotron, Button} from 'react-bootstrap';
//import {Jumbotron} from 'react-bootstrap/Jumbotron';
//import { Jumbotron, Button } from 'reactstrap';
import {Carousel} from 'react-bootstrap';
const Header = () => {
  const sliderStyle =  {height:'600px',width:'1600px',border:'1px solid green', margin: '10px', padding: '10px'};
    return (
<Carousel>
  <Carousel.Item>
    <img
    style ={sliderStyle}
      
      src="https://i.pinimg.com/564x/0a/ec/1f/0aec1fbab7907e5aa880c3c7eddb7c20.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Abir Hasan</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style ={sliderStyle}
      src="https://i.pinimg.com/564x/af/22/29/af2229918374b39c18f1e90dcd552702.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Sabbir Hasan</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style ={sliderStyle}
      src="https://i.pinimg.com/564x/bf/81/4c/bf814c3f25490857f48f4026e8cd94cb.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Limu Hasan</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Header;


