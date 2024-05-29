import { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { userContext } from "../../contexts/userContexts";
import { Container, Table, Th, Td, Tr, PaginationButton, TableTitle} from "./styles";

function DataHistory() {

    // Mostrar os pesos e tals
    // Mostrar do mais novo para o mais velho
    // Mostrar 10 por página
    // Ter botão ou sei la para ir para a próxima página
    // Ter filtro para uma melhor busca

    const [data, setData] = useState<MyData[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 10;

    const { handleGetAllData } = useContext(userContext);

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
    }, [token, handleGetAllData]);

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    console.log(data)
    const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    // Container de fora
    // Titulo do container
    // Linha para Filtragem
    // Titulo para as colunas
    // Linhas com os conteudos

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
                        <Th>Idade Corporal</Th>
                        <Th>Gordura Visceral</Th>
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