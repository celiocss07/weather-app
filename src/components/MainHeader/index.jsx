import React from "react";
import Button from "../Button";
import SearchInput from "../SearchInput";
import { LocationMarkerIcon } from '@heroicons/react/outline'
import { Container, DateBox, LongDateText, SearchBox, ShortDateText } from "./style";

export default function MainHeader() {
  return (
    <Container>
      <DateBox>
        <ShortDateText>January 2020</ShortDateText>
        <LongDateText>Thursday, jan 4, 2022</LongDateText>
      </DateBox>
      <SearchBox>
        <SearchInput placeholder='Search location here' />
        <Button Icon={LocationMarkerIcon} />
      </SearchBox>
    </Container>
  );
}
