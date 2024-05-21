import { useContext, useState } from 'react';
import { Container, SignInContainer, Title, Input, PasswordContainer, Button, Button1, LogoContainer, Logo, Text, SubText, 
        AboutButtonsContainer, ButtonContainer, AboutButtons, Overlay } from './styles';
import { userContext } from '../../contexts/userContexts';
import LogoImg from '../../assets/logo.png';


function SignUp() {

    const { handleCreateAccount } = useContext(userContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    
    return(
        <Container>
            <LogoContainer>
                <Overlay/>
                <Logo alt='Logo Image' src={LogoImg}/>
                <Text>Start Your Fitness <br/>Adventure Now!</Text>
                <SubText>Sign up to track your progress <br/>and reach new heights.</SubText>
                <AboutButtonsContainer>
                    <AboutButtons>Sobre</AboutButtons>
                    <AboutButtons>Contato</AboutButtons>
                </AboutButtonsContainer>
            </LogoContainer>
            <SignInContainer>
                <Title>Criar Conta</Title>
                <Input type="text" placeholder='Nome e Sobrenome' onChange={(e) => setName(e.target.value)}/>
                <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <PasswordContainer>
                    <Input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} style={{width: '60%'}}/>
                    <Input type='password' placeholder='Confirmar Senha' onChange={(e) => setPassword2(e.target.value)}/>
                </PasswordContainer>
                <ButtonContainer>
                    <Button onClick={() => handleCreateAccount(name, email, password)}>Crie sua conta</Button>
                    <Button1>Já possuo uma conta</Button1>
                </ButtonContainer>
            </SignInContainer>
        </Container>
    );
}

export default SignUp;