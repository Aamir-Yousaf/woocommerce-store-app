import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table } from "reactstrap"; // Button import removed as it's not used
import { BestSelling, NewArrivalItems } from "../Data";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function Index() {
  const { ProductId, TabIndex } = useParams();
  const [selectedproducts,setSelectedproducts] = useState({});
  console.log(ProductId, "productsid");
  useEffect(()=>{
    
  const product = [...BestSelling , ...NewArrivalItems].find((item)=> item.id === ProductId);
  console.log("products===", product);
  setSelectedproducts(product);
  },[ProductId, TabIndex]);
  return (
    <Container fluid className="mt-5">
      <p>{selectedproducts.name}</p>
    </Container>
  );
}
