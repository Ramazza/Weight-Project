import styled, { keyframes, css } from "styled-components";
import CallToActionImage from '../../assets/teste.png';

const slideIn = keyframes`
    0% { transform: translateX(0%); }
    10% { transform: translateX(10%); }
    20% { transform: translateX(20%); }
    30% { transform: translateX(30%); }
    40% { transform: translateX(40%); }
    50% { transform: translateX(50%); }
    60% { transform: translateX(60%); }
    70% { transform: translateX(70%); }
    80% { transform: translateX(80%); }
    90% { transform: translateX(90%); }
    100% { transform: translateX(100%); }
`;

const slideOut = keyframes`
    0% { transform: translateX(100%); }
    10% { transform: translateX(90%); }
    20% { transform: translateX(80%); }
    30% { transform: translateX(70%); }
    40% { transform: translateX(60%); }
    50% { transform: translateX(50%); }
    60% { transform: translateX(40%); }
    70% { transform: translateX(30%); }
    80% { transform: translateX(20%); }
    90% { transform: translateX(10%); }
    100% { transform: translateX(0%); }
`;


export const Container = styled.div`
    @media (max-width: 415px) {
        width: 50vw;
    }
`;

export const LogoContainer = styled.div<{isToggled: Boolean, animationState: Number}>`
    height: 80vh;
    width: 35vw;
    background-image: url(${CallToActionImage});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;

    @media (max-width: 415px) {
        width: 100%;
        height: 100%;
    }

    animation: ${({ animationState }) => {
        switch (animationState) {
            case 1:
                return css`${slideIn} 0.6s forwards`;
            case 2:
                return css`${slideOut} 0.6s forwards`;
            default:
                return 'none';
        }
    }};

`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

export const Logo = styled.img`
    height: 65px;
    width: 65px;
    z-index: 2;

    &:hover{
        transform: scale(1.10);
    }
`;

export const Text = styled.span`
    color: #EFEFEF;
    padding-top: 2rem;
    text-align: center;
    font-size: 2.5em;
    font-weight: 700;
    z-index: 2;
`;

export const SubText = styled.span`
    color: #EFEFEF;
    text-align: center;
    font-size: 1.5em;
    font-weight: 350;
    padding-top: 2rem;
    z-index: 2;
`;

export const AboutButtonsContainer = styled.div`
    text-align: center;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: auto;
    padding: 1rem;
`;

export const AboutButtons = styled.button`
    border: none;
    background-color: transparent;
    color: #EFEFEF;
    font-size: 1.5em;
    font-weight: 550;

    &:hover{
        text-decoration: underline;
        text-underline-offset: 3px;
        transform: scale(1.10);
    }
`;
