import { Container, Logo, ProfileImage, Title, PorfileOptionsContainer, Logout } from "./styles";
import LogoImg from '../../assets/logo.png';
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContexts";

function NavBar() {

    const [isClicked, setIsClicked] = useState(false);

    const { profileImage, setProfileImage } = useContext(userContext);


    const navigate = useNavigate();

    const logOff = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    useEffect(() => {
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            setProfileImage(storedImage);
        }
    }, []);

    return(
        <>
        <Container>
            <Logo src={LogoImg} alt="Logo"/>
            <Title>My Fit Journey</Title>
            <ProfileImage src={profileImage} alt="Profile" onMouseDown={() => setIsClicked(!isClicked)}/>
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