import { useContext, useState } from "react";
import { Container, Title, FormContainer, InputContainer, InputTitle, Input, Button } from "./styles";
import { userContext } from "../../contexts/userContexts";
import { jwtDecode } from "jwt-decode";


function DataForm() {

    const { handleAddData } = useContext(userContext);

    const [weight, setWeight] = useState('');
    const [fat, setFat] = useState('');
    const [muscle, setMuscle] = useState('');
    const [visFat, setVisFat] = useState('');
    const [bodyAge, setBodyAge] = useState('');
    const [date, setDate] = useState('');                           

    const token = localStorage.getItem('token');

    interface MyJwtPayload {
        id: string;
        email: string;
    }

    const invertDate = (date: string) => {
        const [day, month, year] = date.split('/');
        return `${year}/${month}/${day}`;
    }

    const handleDataEntry = () => {
        
        if(weight === '' || date.length < 1) {
            return console.log('Peso ou data vazio.');
        }

        const invertedDate = invertDate(date);

        if(token) {
            const decoded = jwtDecode<MyJwtPayload>(token);
            handleAddData(token, decoded.id, parseFloat(weight), parseFloat(fat), parseFloat(muscle), parseFloat(visFat), parseFloat(bodyAge), invertedDate);
        }

        setWeight('');
        setFat('');
        setMuscle('');
        setVisFat('');
        setBodyAge('');
        setDate('');

    }

    return(
        <Container>
            <FormContainer>
                <Title>Adicionar Dados</Title>
                <InputContainer>
                    <InputTitle>Peso: </InputTitle>
                    <Input placeholder="Kg" value={weight || ''} onChange={(e) => {setWeight(e.target.value)}}/>
                </InputContainer>
                <InputContainer>
                    <InputTitle>Gordura: </InputTitle>
                    <Input placeholder="%" value={fat || ''} onChange={(e) => {setFat(e.target.value)}}/>
                </InputContainer>
                <InputContainer>
                    <InputTitle>Musculo: </InputTitle>
                    <Input placeholder="%" value={muscle || ''} onChange={(e) => {setMuscle(e.target.value)}}/>
                </InputContainer>
                <InputContainer>
                    <InputTitle>Gordura Visceral: </InputTitle>
                    <Input value={visFat || ''} onChange={(e) => {setVisFat(e.target.value)}}/>
                </InputContainer>
                <InputContainer>
                    <InputTitle>Idade Corporal: </InputTitle>
                    <Input placeholder="Anos" value={bodyAge || ''} onChange={(e) => {setBodyAge(e.target.value)}}/>
                </InputContainer>
                <InputContainer>
                    <InputTitle>Data: </InputTitle>
                    <Input placeholder="DD/MM/AAAA" value={date || ''} onChange={(e) => {setDate(e.target.value)}}/>
                </InputContainer>
                <Button onMouseDown={() => {handleDataEntry()}}>Adicionar</Button>
            </FormContainer>
        </Container>
    );
}

export default DataForm; 