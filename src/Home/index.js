import React, { useState, useEffect } from "react";
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
           <img alt="Sample" src={item.image[2]} />
           <CardBody>
             <CardTitle tag="h5">{item.name}</CardTitle>
             <CardText>RS.{item.price}</CardText>
             
             <Button onClick={() => dispatch(addToCart(item))}>
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
            ? renderITems (NewArrivalItems) : renderITems (BestSelling)
              }
        </Row>
      )}
    </Container>
  );
}

export default Home;
