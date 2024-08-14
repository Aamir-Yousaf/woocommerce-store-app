import React, { useState, useEffect } from "react";

import "./Home.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
  Container,
  Spinner,
  ButtonGroup,
} from "reactstrap";
import { BestSelling, NewArrivalItems, SliderItems } from "../Data"; // Assuming this imports an array of items
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/Cart";

{
  
}
function Home() {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [SelectedTab, setSelectedTab] = useState(1);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === SliderItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? SliderItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const renderITems = (Data)=>{
     return Data.map((item, index) => (
       <Col xs={12} sm={3} key={index}>
         <Card
           className="main-product-card"
           style={{
             width: "19rem",
           }}
         >
           <img alt="Sample" src={item.image[0]} />
           <CardBody>
             <CardTitle tag="h5">{item.name}</CardTitle>
             <CardText>RS.{item.price}</CardText>
             
             <Button color="primary" onClick={() => dispatch(addToCart(item))}>
               Add to Cart
             </Button>
           </CardBody>
         </Card>
       </Col>
     ));
  }
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Container fluid>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={SliderItems}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {SliderItems.map((item) => (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption
              captionText={item.caption}
              captionHeader={item.caption}
            />
          </CarouselItem>
        ))}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <div className="d-flex justify-content-center m-3">
        <ButtonGroup className="col-4">
          <Button
            color="primary"
            outline
            onClick={() => setSelectedTab(1)}
            active={SelectedTab === 1}
          >
            New Arrival
          </Button>
          <Button
            color="primary"
            outline
            onClick={() => setSelectedTab(2)}
            active={SelectedTab === 2}
          >
            Best Selling
          </Button>
        </ButtonGroup>
      </div>

      {Loading ? (
        <div className="d-flex justify-content-center m-3">
          <Spinner color="success" type="grow"></Spinner>
          <Spinner color="danger" type="grow"></Spinner>
          <Spinner color="secondary" type="grow"></Spinner>
          <Spinner color="primary" type="grow"></Spinner>
        </div>
      ) : (
        <Row>
          {SelectedTab === 1
            ? renderITems(NewArrivalItems)
            : renderITems(BestSelling)}
        </Row>
      )}
      {/* New Container with Three Columns */}
      <Container fluid className="main-product-box mt-5">
        <Row className="box-flex gx-2 ">
          <Col className="products-left  " sm={6}>
            <div className="product-main">
              <h5 className="sub-heading">Best</h5>
              <h3 className="heading">Gaming</h3>
              <h2 className="main-heading ">CONSOLE</h2>
              <Button
                color="primary"
                className="game-btn text-white mt-3 py-2 px-5 rounded-pill"
              >
                Browse
              </Button>
              <img className="gaming-img" src="/Imgs/gaming.png"></img>
            </div>
          </Col>
          <Col sm={6} className="product-glass">
            <div className="product-main-glass">
              <h5 className="sub-heading-glass">Play</h5>
              <h3 className="heading-glass">Game</h3>
              <h2 className="main-heading-glass ">oculus</h2>
              <Button
                color="danger"
                outline
                className="game-btn  mt-3 py-2 px-5 rounded-pill bg-white text-black"
              >
                Browse
              </Button>
              <img className="glasses-img" src="/Imgs/glasses.png"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
