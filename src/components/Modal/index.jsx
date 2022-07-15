import { XIcon } from "@heroicons/react/outline";
import React from "react";
import Button from "../Button";
import { Body, Container, Row, RowBody } from "./styles";
import ReactLoading from "react-loading";
export default function Modal() {
  return (
    <Container>
     
        
        
          <ReactLoading type={"bubbles"} color={"#FFF"} width={80} height={80} />
        
      
    </Container>
  );
}
