import { useContext, useState } from 'react';
import { Container, SignInContainer, Title, Input, PasswordContainer, Button, Button1, ButtonContainer } from './styles';
import { userContext } from '../../contexts/userContexts';

interface ToggleProps {
    isToggled: Boolean;
    animationState: number;
}

const SignUpForm: React.FC<ToggleProps> = ({ isToggled, animationState }) => {

    const { handleCreateAccount, handleToggle } = useContext(userContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    
    return(
        <Container>
            <SignInContainer isToggled={isToggled} animationState={animationState}>
                <Title>Criar Conta</Title>
                <Input type="text" placeholder='Nome e Sobrenome' onChange={(e) => setName(e.target.value)}/>
                <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <PasswordContainer>
                    <Input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} style={{width: '60%'}}/>
                    <Input type='password' placeholder='Confirmar Senha' onChange={(e) => setPassword2(e.target.value)}/>
                </PasswordContainer>
                <ButtonContainer>
                    <Button onClick={() => handleCreateAccount(name, email, password, password2)}>Crie sua conta</Button>
                    <Button1 onClick={() => handleToggle()}>Já possuo uma conta</Button1>
                </ButtonContainer>
            </SignInContainer>
        </Container>
    );
}

export default SignUpForm;