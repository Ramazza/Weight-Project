import { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { userContext } from "../../contexts/userContexts";
import { Container, Table, Th, Td, Tr, PaginationButton, TableTitle} from "./styles";

function DataHistory() {

    const [data, setData] = useState<MyData[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 10;

    const { handleGetAllData, reload } = useContext(userContext);

    const token = localStorage.getItem('token');

    interface MyJwtPayload {
        id: string;
        email: string;
    }

    interface MyData {
        weight: number;
        fat: number;
        muscle: number;
        vis_fat: number;
        body_age: number;
        date: string;
    }
    

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode<MyJwtPayload>(token);
            handleGetAllData(decoded.id, token).then((fetchedData: MyData[]) => {
                setData(fetchedData);
            }).catch((error: any) => {
                console.error("Error fetching data:", error);
            })
        }
    }, [token, handleGetAllData, reload]);

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    return(
        <Container>
                <TableTitle>Dados</TableTitle>
            <Table>
                <thead>
                    <Tr>
                        <Th>Data</Th>
                        <Th>Peso (kg)</Th>
                        <Th>Gordura (%)</Th>
                        <Th>Musculo (%)</Th>
                        <Th>Gordura Visceral</Th>
                        <Th>Idade Corporal</Th>
                    </Tr>
                </thead>
                <tbody>
                    {currentEntries.map((entry, index) => (
                        <Tr key={index}>
                            <Td>{new Date(entry.date).toLocaleDateString()}</Td>
                            <Td>{entry.weight}</Td>
                            <Td>{entry.fat}</Td>
                            <Td>{entry.muscle}</Td>
                            <Td>{entry.vis_fat}</Td>
                            <Td>{entry.body_age}</Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
                    Anterior
                </PaginationButton>
                <PaginationButton onClick={nextPage} disabled={indexOfLastEntry >= data.length}>
                    Próximo
                </PaginationButton>
            </div>
        </Container>
    );
}

export default DataHistory; 