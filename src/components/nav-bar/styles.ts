import styled from "styled-components";

export const Container = styled.div`
    background-color: #001F3F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const Logo = styled.img`
    height: 50px;
    filter: drop-shadow(1px 1px 0 #EFEFEF);

    &:hover{
        transform: scale(1.05);
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

    &:hover{
        transform: scale(1.05);
    }
`;

