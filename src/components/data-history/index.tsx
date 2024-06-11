import { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { userContext } from "../../contexts/userContexts";
import { Container, Table, Th, Td, Tr, PaginationButton, TableTitle, EditButton, DeleteButton, EditInput } from "./styles";

function DataHistory() {
    const [data, setData] = useState<MyData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editData, setEditData] = useState<MyData | null>(null);
    const entriesPerPage = 10;
    const { handleGetAllData, handleUpdateData, handleDeleteData, handleDate, reload } = useContext(userContext);
    const token = localStorage.getItem('token');

    interface MyJwtPayload {
        id: string;
        email: string;
    }

    interface MyData {
        id: string;
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
                if (Array.isArray(fetchedData)) {
                    setData(fetchedData);
                  } else {
                    console.error("Fetched data is not an array:", fetchedData);
                  }
            }).catch((error: any) => {
                console.error("Error fetching data:", error);
            });
        }
    }, [token, handleGetAllData, reload]);

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const handleEdit = (index: number) => {
        setEditIndex(index);
        setEditData(data[index]);
    };

    const handleDelete = (index: number) => {
        const entryToDelete = data[index];
        if (token) {
            handleDeleteData(entryToDelete.id, token).then(() => {
                setData(data.filter((_, i) => i !== index));
            }).catch((error: any) => {
                console.error("Error deleting data:", error);
            });
        }
    };

    const handleSave = () => {
        const token = localStorage.getItem('token');
        if (editData && token) {
            handleUpdateData(editData.id, editData.weight, editData.fat, editData.muscle, editData.vis_fat, editData.body_age, editData.date, token).then(() => {
                const updatedData = [...data];
                updatedData[editIndex as number] = editData;
                setData(updatedData);
                setEditIndex(null);
                setEditData(null);
            }).catch((error: any) => {
                console.error("Error updating data:", error);
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({ ...prevData, [name]: value } as MyData));
    };

    return (
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
                        <Th>Ações</Th>
                    </Tr>
                </thead>
                <tbody>
                    {currentEntries.map((entry, index) => (
                        editIndex === index ? (
                            <Tr key={index}>
                                <Td><EditInput type="date" name="date" value={new Date(editData!.date).toISOString().substr(0, 10)} onChange={handleChange} /></Td>
                                <Td><EditInput type="number" name="weight" value={editData!.weight} onChange={handleChange} /></Td>
                                <Td><EditInput type="number" name="fat" value={editData!.fat} onChange={handleChange} /></Td>
                                <Td><EditInput type="number" name="muscle" value={editData!.muscle} onChange={handleChange} /></Td>
                                <Td><EditInput type="number" name="vis_fat" value={editData!.vis_fat} onChange={handleChange} /></Td>
                                <Td><EditInput type="number" name="body_age" value={editData!.body_age} onChange={handleChange} /></Td>
                                <Td>
                                    <EditButton onClick={handleSave}>Salvar</EditButton>
                                    <EditButton onClick={() => setEditIndex(null)}>Cancelar</EditButton>
                                </Td>
                            </Tr>
                        ) : (
                            <Tr key={index}>
                                <Td>{new Date(entry.date).toLocaleDateString()}</Td>
                                <Td>{entry.weight}</Td>
                                <Td>{entry.fat}</Td>
                                <Td>{entry.muscle}</Td>
                                <Td>{entry.vis_fat}</Td>
                                <Td>{entry.body_age}</Td>
                                <Td>
                                    <EditButton onClick={() => handleEdit(index)}>Editar</EditButton>
                                    <DeleteButton onClick={() => handleDelete(index)}>Excluir</DeleteButton>
                                </Td>
                            </Tr>
                        )
                    ))}
                </tbody>
            </Table>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
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
