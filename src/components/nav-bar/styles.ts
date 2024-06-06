import styled from "styled-components";

export const Container = styled.div`
    background-color: #001F3F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    overflow-x: hidden;
    overflow-y: hidden;

    @media (max-width: 415px) {
        justify-content: center;
    }
`;

export const Logo = styled.img`
    height: 50px;
    filter: drop-shadow(1px 1px 0 #EFEFEF);

    &:hover{
        transform: scale(1.05);
    }

    @media (max-width: 415px) {
        display: none;
    }
`;

export const Title = styled.span`
    font-size: 2em;
    font-weight: 700;
    color: #EFEFEF;
`;

export const ProfileImage = styled.img`
    height: 40px;
    padding-right: 1rem;
    filter: drop-shadow(1px 1px 0 black);
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
    }

    @media (max-width: 415px) {
        display: none;
    }
`;

export const PorfileOptionsContainer = styled.div`
    position: absolute;
    width: 4.5rem;
    height: 3rem;
    right: 0rem;
    top: 3.15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
    border-bottom: 2px solid #0051A3;
    border-left: 2px solid #0051A3;
`;

export const Logout = styled.button`
    width: 70%;
    height: 50%;
    background-color: #0051A3;
    color: white;
    border: none;
    outline: none;
    font-size: 1.1em;
    font-weight: 600;

    &:hover {
        transform: scale(1.05);
    }
`;