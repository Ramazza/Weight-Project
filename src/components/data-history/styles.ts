/* import styled from "styled-components";

export const Container = styled.div`
    width: 50vw;
    margin: 0 auto;

    @media (max-width: 415px) {
        width: 80vw;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #f2f2f2;
    text-align: center;
`;

export const TableTitle = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #f2f2f2;
    text-align: center;
    display: flex;
    justify-content: center;
`;

export const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

export const EditInput = styled.input`
    width: 80%;
    text-align: center;
`;  

export const Tr = styled.tr`
    text-align: center;

    &:nth-child(even) {
        background-color: #f9f9f9;
    
    }

    &:hover {
        background-color: #ddd;
    }
`;

export const PaginationButton = styled.button`
    margin: 5px;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
        background-color: #ccc;
        cursor: default;
    }
`;

export const EditButton = styled.button`

`;

export const DeleteButton = styled.button`

`; */

import styled from "styled-components";

export const Container = styled.div`
    width: 50vw;
    margin: 0 auto;

    @media (max-width: 415px) {
        width: 80vw;
        overflow-x: auto;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    @media (max-width: 415px) {
        width: 100%;
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }
`;

export const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #f2f2f2;
    text-align: center;

    @media (max-width: 415px) {
        display: inline-block;
        width: auto;
        text-align: left;
    }
`;

export const TableTitle = styled.th`
    width: 50vw;
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #f2f2f2;
    text-align: center;

    @media (max-width: 415px) {
        display: inline-block;
        width: 80vw;
    }
`;

export const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;

    @media (max-width: 415px) {
        display: inline-block;
        width: auto;
        text-align: left;
    }
`;

export const EditInput = styled.input`
    width: 80%;
    text-align: center;
`;

export const Tr = styled.tr`
    text-align: center;

    &:nth-child(even) {
        background-color: #f9f9f9;
    }

    &:hover {
        background-color: #ddd;
    }

    @media (max-width: 415px) {
        display: block;
        margin-bottom: 10px;
    }
`;

export const PaginationButton = styled.button`
    margin: 5px;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
        background-color: #ccc;
        cursor: default;
    }
`;

export const EditButton = styled.button`
    min-width: 3rem;
    margin: 5px;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const DeleteButton = styled.button`
    min-width: 3rem;
    margin: 5px;
    padding: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
