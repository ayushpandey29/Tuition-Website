import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function NewBlogCards(props) {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  // For Custmizing Dots Of Carousel
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    //const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      >
        {/* {React.Children.toArray(carouselItems)[index]} */}
      </button>
    );
  };

  // const arrowStyle = {
  //   background: "transparent",
  //   border: 0,
  //   color: "#fff",
  //   fontSize: "80px"
  // };
  // const CustomRight = ({ onClick }) => (
  //   <button className="arrow right" onClick={onClick} style={arrowStyle}>
  //     <ArrowForwardIcon style={{ fontSize: "50px" }} />
  //   </button>
  // );
  // const CustomLeft = ({ onClick }) => (
  //   <button className="arrow left" onClick={onClick} style={arrowStyle}>
  //     <ArrowBackIcon style={{ fontSize: "50px" }} />
  //   </button>
  // );


  return (
    <div className="cards">
      <h1>Latest Blog Posts</h1>
      <br></br>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={100000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"

      // showDots customDot={<CustomDot />}
      >

<div><CardItem
          src='images/1.png'
          text='10 Essential Programming Tips for Beginners'
          label='Programming Tips'
          path='/blog/programming-tips-beginners'
        /></div>
        <div><CardItem
          src='images/2.png'
          text='The Future of Web Development in 2025'
          label='Web Development'
          path='/blog/future-web-development-2025'
        /></div>
        <div><CardItem
          src='images/3.png'
          text='React vs Vue: Which Framework to Choose?'
          label='Frontend'
          path='/blog/react-vs-vue-comparison'
        /></div>
        <div><CardItem
          src='images/4.png'
          text='Building Scalable Node.js Applications'
          label='Backend'
          path='/blog/scalable-nodejs-apps'
        /></div>
        <div>
          <CardItem
            src='images/5.png'
            text='Machine Learning for Developers: Getting Started'
            label='AI/ML'
            path='/blog/ml-for-developers'
          />
        </div>

        <div>
          <CardItem
            src='images/6.png'
            text='Cloud Computing Best Practices for 2025'
            label='Cloud Computing'
            path='/blog/cloud-computing-best-practices'
          />
        </div>

      </Carousel>
    </div>
  );
}

export default NewBlogCards;