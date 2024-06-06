import styled from "styled-components";

export const Container = styled.div`
    width: 45vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;

    @media (max-width: 415px) {
        width: 95vw;
        grid-template-columns: 1fr;
        padding: 1rem 0;
        gap: 1rem;
    }
`;