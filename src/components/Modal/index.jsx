import { XIcon } from "@heroicons/react/outline";
import React from "react";
import Button from "../Button";
import { Body, Container, Row, RowBody } from "./styles";
import ReactLoading from "react-loading";
export default function Modal({}) {
  return (
    <Container>
      <Body>
        <Row >
          <Button Icon={XIcon} style={{ backgroundColor: "#FFF" }} />
        </Row>
        <RowBody style={{ margin: "32px 0px" }}>
          <ReactLoading type={"bubbles"} color={"orange"} />
        </RowBody>
      </Body>
    </Container>
  );
}
