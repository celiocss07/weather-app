import styled from "styled-components";
import { Box, Container as Card } from '../AsideHeader/style'
import CardOverview from "../CardOverview";

export const Container = styled.aside`
    width: 100%;
    padding: 24px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    background-image: linear-gradient(#1D3453, #18387D);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: contain;
    background-position: center;
    @media(min-width: 640px){
        width: 35%;
    }

`;

export const CardView = styled(Card)`
flex-direction: column;
align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    @media(min-width: 920px){
        flex-direction: row;
    }
`;

export const CardDetails = styled(CardOverview)`
color: #FFF;
background-color: rgba(255,255,255,0.3);
`;