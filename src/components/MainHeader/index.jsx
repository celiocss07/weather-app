import React from "react";
import { Container, DateBox, LongDateText, ShortDateText } from "./style";

export default function MainHeader() {
  return (
    <Container>
      <DateBox>
        <ShortDateText>January 2020</ShortDateText>
        <LongDateText>Thursday, jan 4, 2022</LongDateText>
      </DateBox>
    </Container>
  );
}
