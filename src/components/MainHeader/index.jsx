import React, { useContext } from "react";
import Button from "../Button";
import SearchInput from "../SearchInput";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { BsBookmarkStar } from "react-icons/bs";
import { Container, DateBox, SearchBox } from "./style";
import { StrongText, Text } from "../Text";
import { AppContext } from "../../contexts/AppContext";
import { convertTime} from "../../services";

export default function MainHeader() {
  const { data, handleSearchMyLocation, saveLocation } =
    useContext(AppContext);
  return (
    <Container>
      <DateBox>
        <StrongText>{convertTime(data?.dt, 2)}</StrongText>
        <Text>{convertTime(data?.dt, 3)}</Text>
      </DateBox>
      <SearchBox>
        <SearchInput placeholder="Search location here" />
        <div style={{display: 'flex', gap: '8px'}}>
          <Button
            Icon={LocationMarkerIcon}
            legend="Current location"
            onClick={handleSearchMyLocation}
          />
          <Button
            Icon={BsBookmarkStar}
            legend="Save as favorite"
            onClick={saveLocation}
          />
        </div>
      </SearchBox>
    </Container>
  );
}
