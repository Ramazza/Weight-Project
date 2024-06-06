import styled, { keyframes, css } from "styled-components";

const slideOut = keyframes`
    0% { transform: translateX(0%); }
    10% { transform: translateX(-10%); }
    20% { transform: translateX(-20%); }
    30% { transform: translateX(-30%); }
    40% { transform: translateX(-40%); }
    50% { transform: translateX(-50%); }
    60% { transform: translateX(-60%); }
    70% { transform: translateX(-70%); }
    80% { transform: translateX(-80%); }
    90% { transform: translateX(-90%); }
    100% { transform: translateX(-100%); }
`;

const slideIn = keyframes`
    0% { transform: translateX(-100%); }
    10% { transform: translateX(-90%); }
    20% { transform: translateX(-80%); }
    30% { transform: translateX(-70%); }
    40% { transform: translateX(-60%); }
    50% { transform: translateX(-50%); }
    60% { transform: translateX(-40%); }
    70% { transform: translateX(-30%); }
    80% { transform: translateX(-20%); }
    90% { transform: translateX(-10%); }
    100% { transform: translateX(0%); }
`;

export const Container = styled.div`
    z-index: 2;

    @media (max-width: 415px) {
        width: 50vw;
    }
`;

export const SignInContainer = styled.div<{ isToggled: Boolean, animationState: Number}>`
    height: 80vh;
    width: 35vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    background-color: #EFEFEF;
    z-index: 2;

    @media (max-width: 415px) {
        width: 100%;
        height: 100%;
    }

    animation: ${({ animationState }) => {
            switch (animationState) {
            case 1:
                return css`${slideOut} 0.6s forwards`;
            case 2:
                return css`${slideIn} 0.6s forwards`;
            default:
                return 'none';
            }
    }};
`;

export const Title = styled.span`
    font-size: 2em;
    font-weight: 700;
`;

export const Input = styled.input`
    width: 60%;
    border: none;
    border-bottom: 2px solid grey;
    outline: none;
    background-color: transparent;
    padding: 5px 0;
    padding-left: 5px;
    font-size: 1.1em;
    font-weight: 450;

    @media (max-width: 415px) {
        width: 90%;
    }
`;

export const PasswordContainer = styled.div`
    width: 60%;
    display: flex;
    gap: 1rem;

    @media (max-width: 415px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-top: 2rem;

    @media (max-width: 415px) {
        width: 90%;
    }
`;

export const Button = styled.button`
    color: white;
    background-color: #0074D9;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 1.5rem;
    font-size: 1em;
    font-weight: 550;

    &:hover {
        background-color: #90BAAD;
        transform: scale(1.04);
    }
`;

export const Button1 = styled.button`
    border: none;
    font-size: 1em;
    text-decoration: underline;
    font-weight: 500;
    text-underline-offset: 3px;
    color: #A9A9A9;

    &:hover {
        color: black;
        transform: scale(1.06);
    }
`;