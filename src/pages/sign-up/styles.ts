import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(53,56,57);
    background: radial-gradient(circle, rgba(53,56,57,1) 0%, rgba(0,0,0,1) 100%);

    @media (max-width: 415px) {
        justify-content: flex-start;
        align-items: stretch;
    }
`;