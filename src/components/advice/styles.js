import { styled } from "styled-components";

const StyledContainer = styled.div`
    width: 540px;
    background-color: #4F5D74;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
`;

const StyledTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 2px;
    color: #53FFAA;
    padding-top: 20px;
`;

const StyledP = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 500;
    color: white;
    padding: 20px 0;
    margin: 0 20px;
    text-align: center;
`;

const StyledImgCont = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const StyledDivider = styled.div`
    width: 500px;
    height: 1px;
    background-color: #979797;
`;

const StyledImg = styled.img`
    width: 40px;
    height: 16px;
    object-fit: cover;
`;

const StyledDiceCont = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: #53FFAA;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 60px;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover {
        box-shadow: 1px 1px 30px #53FFAA;
    }
`;

const StyledDice = styled.img`

`;

export {StyledContainer, StyledTitle, StyledP, StyledImgCont, StyledDivider, StyledImg, StyledDiceCont, StyledDice}