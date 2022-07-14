import React from "react";
import MainBody from "../MainBody";
import MainHeader from "../MainHeader";
import { Container, Container2 } from "./styles";

export default function Main() {
  return (
    <Container photo="rain">
      <Container2>
        <MainHeader />
        <MainBody />
      </Container2>
    </Container>
  );
}
