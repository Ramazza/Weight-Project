import { Container, Logo, ProfileImage, Title, PorfileOptionsContainer, Logout } from "./styles";
import LogoImg from '../../assets/logo.png';
import UserImg from '../../assets/user.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {

    const [isClicked, setIsClicked] = useState(false);

    const navigate = useNavigate();

    const logOff = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return(
        <>
        <Container>
            <Logo src={LogoImg} alt="Logo"/>
            <Title>My Fit Journey</Title>
            <ProfileImage src={UserImg} alt="Profile" onMouseDown={() => setIsClicked(!isClicked)}/>
        </Container>
        { isClicked ? 
            <PorfileOptionsContainer>
                <Logout onMouseDown={() => logOff()}>Sair</Logout>
            </PorfileOptionsContainer>   
            :
            '' 
        }
        </>
    );
}

export default NavBar;