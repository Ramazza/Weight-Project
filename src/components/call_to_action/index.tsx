import { Container, LogoContainer, Logo, Text, SubText, 
        AboutButtonsContainer, AboutButtons, Overlay } from './styles';
import LogoImg from '../../assets/logo.png';

interface ToggleProps {
    isToggled: Boolean;
    animationState: number;
}

const CallToAction: React.FC<ToggleProps> = ({ isToggled, animationState }) => {

    return(
        <Container>
            <LogoContainer isToggled={isToggled} animationState={animationState}>
                <Overlay/>
                <Logo alt='Logo Image' src={LogoImg}/>
                <Text>Comece sua aventura <br/>fitness agora!</Text>
                <SubText>Inscreva-se para acompanhar seu progresso e alcançar novos marcos.</SubText>
                <AboutButtonsContainer>
                    <AboutButtons>Sobre</AboutButtons>
                    <AboutButtons>Contato</AboutButtons>
                </AboutButtonsContainer>
            </LogoContainer>
        </Container>
    );
}

export default CallToAction;