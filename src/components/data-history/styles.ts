import styled from "styled-components";

export const Container = styled.div`
    width: 50vw;
    margin: 0 auto;
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

`;