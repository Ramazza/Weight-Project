import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 1rem;
    background-color: #F2F2F2;
    width: 30vw;
    height: 20vh;
    margin: 2rem auto;
    border: 2px solid #001F3F;
    border-radius: 15px;
`;

export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0051A3 ;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
    flex: 1;
`;

export const ProfileImg = styled.img`
    height: 18vh;
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 1;    
    width: 70%;
`;

export const Name = styled.span`
    font-size: 1.3em;
    font-weight: 700;
    padding-bottom: 0.5rem;
`;

export const Height = styled.input`
    background-color: transparent;
    border: none;
    font-size: 1.1em;
    font-weight: 400;
    width: 60%;
`;

export const LatestWeight = styled.span`
    font-size: 1.1em;
    font-weight: 400;
`;

export const BMI = styled.span`
    font-size: 1.1em;
    font-weight: 400;
`;

export const UserGoal = styled.input`
    background-color: transparent;
    border: none;
    font-size: 1.1em;
    font-weight: 400;
    width: 60%;
`;

export const DataInfoContainer = styled.div`
    font-size: 1.1em;
    font-weight: 400;
`;

export const DataName = styled.span`

`;