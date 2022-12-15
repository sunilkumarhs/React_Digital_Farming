import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import styles from '../css/NavBar.module.css';
import NavBar from './NavBar';
import FirstImage from '../Images/image1.jpg';
import SecondImage from '../Images/image2.png';
import ThirdImage from '../Images/image3.jpg';
import FourthImage from '../Images/image4.png';
import FifthImage from '../Images/image5.png';

const MainPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
        <NavBar />
    {/* <div className='container'> */}
    <h1>Digital Farming</h1>
    <h5>A app for modern way of agriculture</h5>    
    <div className='section'>    
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstImage}
            alt="First slide"
            style={{height:'25rem'}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SecondImage}
            alt="Second slide"
            style={{height:'25rem'}}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ThirdImage}
            alt="Third slide"
            style={{height:'25rem'}}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FourthImage}
            alt="Fourth slide"
            style={{height:'25rem'}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FifthImage}
            alt="Fifth slide"
            style={{height:'25rem'}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    {/* </div> */}
    </div>
  )
}

export default MainPage
