import React from "react";

import {} from "@heroicons/react/outline";
import {} from "react-icons/bs";
import { Container, Box } from "./style";
import { StrongText, Text } from "../Text";

export default function AsideHeader() {
  return (
    <Container>
      <Box>
        <StrongText>Sequele</StrongText>
        <Text>Luanda, Angola</Text>
      </Box>

      <StrongText>8:00 AM</StrongText>
    </Container>
  );
}
