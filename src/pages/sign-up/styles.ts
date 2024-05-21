import styled from "styled-components";
import CallToActionImage from '../../assets/teste.png';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(53,56,57);
    background: radial-gradient(circle, rgba(53,56,57,1) 0%, rgba(0,0,0,1) 100%);
`;

export const LogoContainer = styled.div`
    height: 80vh;
    width: 35vw;
    background-image: url(${CallToActionImage});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
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

export const SignInContainer = styled.div`
    height: 80vh;
    width: 35vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    background-color: #EFEFEF;
    z-index: 2;
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
`;

export const PasswordContainer = styled.div`
    width: 60%;
    display: flex;
    gap: 1rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-top: 2rem;
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