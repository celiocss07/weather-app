import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-image: url(https://source.unsplash.com/1500x1000/?${(props) =>
    props.photo});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 640px) {
    width: 65%;
  }
`;
export const Container2 = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0,0,0,0.4);

  display: flex;
  flex-direction: column;
  align-items: center;

  
`;
