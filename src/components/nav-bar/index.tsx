import { Container, Logo, ProfileImage, Title } from "./styles";
import LogoImg from '../../assets/logo.png';
import UserImg from '../../assets/user.png';

function NavBar() {

    // Icone na esquerda
    // My Fit Journey no meio
    // Perfil na direita

    return(
        <Container>
            <Logo src={LogoImg} alt="Logo"/>
            <Title>My Fit Journey</Title>
            <ProfileImage src={UserImg} alt="Profile"/>
        </Container>
    );
}

export default NavBar;