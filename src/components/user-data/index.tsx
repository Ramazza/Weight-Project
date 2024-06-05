import { BMI, Container, DataContainer, DataInfoContainer, DataName, Height, ImgContainer, LatestWeight, Name, ProfileImg, UserGoal } from "./style";
import { useContext, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';
import { userContext } from "../../contexts/userContexts";
import User from '../../assets/user.png';

function UserData() {

    const { handleSetHeight, handleSetGoal, handleGetUserInfo, userInfo, weight, handleGetLatestWeight, handleName, handleBMI, reload } = useContext(userContext);

    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [goal, setGoal] = useState('');
    const [id, setId] = useState('');
    const [IMC, setIMC] = useState(0);

    interface MyJwtPayload {
        id: string;
        email: string;
    }
    
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode<MyJwtPayload>(token);
            setId(decoded.id);
            handleGetUserInfo(decoded.id, token);
            handleGetLatestWeight(decoded.id, token);
        }
    }, [token, reload]);

    useEffect(() => {
        if (userInfo && userInfo.user) {
            setHeight(userInfo.user.height);
            setGoal(userInfo.user.goal);
            setName(handleName(userInfo.user.name));
            setIMC(handleBMI(weight, userInfo.user.height));
        }
    }, [userInfo, reload]);

    return(
        <Container>
            <ImgContainer>
                <ProfileImg src={User} alt='User Image'/>
            </ImgContainer>
            <DataContainer>
                <Name>{name}</Name>
                <DataInfoContainer>
                    <DataName>Altura (m): </DataName>
                    <Height 
                        placeholder="Digite sua altura." 
                        value={height} onChange={(e) => setHeight(e.target.value)}
                        onBlur={(e) => handleSetHeight(parseFloat(e.target.value), id, token)} />
                </DataInfoContainer>
                <DataInfoContainer>
                    <DataName>Peso (Kg): </DataName>
                    <LatestWeight>{weight}</LatestWeight>
                </DataInfoContainer>
                <DataInfoContainer>
                    <DataName>Objetivo (Kg): </DataName>
                    <UserGoal 
                        placeholder="Digite o seu objetivo" 
                        value={goal} onChange={(e) => setGoal(e.target.value)}
                        onBlur={(e) => handleSetGoal(parseFloat(e.target.value), id, token)} />
                </DataInfoContainer>
                <DataInfoContainer>
                    <DataName>IMC: </DataName>
                    <BMI>{IMC}</BMI>
                </DataInfoContainer>
            </DataContainer>
        </Container>
    );
}

export default UserData; 