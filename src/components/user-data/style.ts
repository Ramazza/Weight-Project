import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 1rem;
    background-color: #F2F2F2;
    width: 30vw;
    margin: 2rem auto;
    border: 2px solid #001F3F;
    border-radius: 15px;

    @media (max-width: 415px) {
        height: auto;
        width: 80vw;
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
        padding: 1rem 0;
    }
`;

export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0051A3 ;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
    flex: 1;

    @media (max-width: 415px) {
        flex: 0;
        width: 50%;
        margin: 1rem auto;
        border-radius: 13px;
    }
`;

export const ProfileImg = styled.img`
    height: 18vh;
    padding: 1rem;
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 1;    
    width: 70%;

    @media (max-width: 415px) {
        justify-content: center;
        text-align: center;
        width: 100%;
    }
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

    @media (max-width: 415px) {
        text-align: center;
    }
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

    @media (max-width: 415px) {
        text-align: center;
    }
`;

export const DataInfoContainer = styled.div`
    font-size: 1.1em;
    font-weight: 400;

    @media (max-width: 415px) {
        display: flex; 
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

export const DataName = styled.span`

`;