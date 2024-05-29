import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 2rem;
`;

export const FormContainer = styled.div`
    width: 28vw;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #F2F2F2;
    border: 2px solid black;
    border-radius: 15px;
`;

export const Title = styled.span`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
`;

export const InputTitle = styled.span`
    width: 100px; 
    text-align: left;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Button = styled.button`
    width: 70%;
    padding: 0.5rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #0051A3;
    color: white;
    font-size: 1.5rem;

    &:hover {
        transform: scale(1.02);
        background-color: #0074D9;
    }
`;