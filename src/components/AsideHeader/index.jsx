import React, { useContext } from "react";
import {} from "@heroicons/react/outline";
import {} from "react-icons/bs";
import { Container, Box } from "./style";
import { StrongText, Text } from "../Text";
import { AppContext } from "../../contexts/AppContext";
import { convertTime } from "../../services";

export default function AsideHeader() {
  const {data} = useContext(AppContext);
  return (
    <Container>
      <Box>
        <StrongText>{data?.city}</StrongText>
        <Text>{data?.displayName}</Text>
      </Box>
      <StrongText>{convertTime(data?.dt, 1)}</StrongText>
    </Container>
  );
}
