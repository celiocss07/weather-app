import React from "react";
import { Container } from "./styles";

export default function Button({ Icon, legend, ...rest }) {
  return (
    <Container {...rest}>
      <abbr title={legend ? legend : 'button'}>
        <Icon width={18} color="#FFF" />
      </abbr>
    </Container>
  );
}
