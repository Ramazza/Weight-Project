import { useContext, useState } from 'react';
import { Container, SignInContainer, Title, Input, Button, Button1, ButtonContainer } from './styles';
import { userContext } from '../../contexts/userContexts';

interface ToggleProps {
    isToggled: Boolean;
    animationState: number;
}

const SignInForm: React.FC<ToggleProps> = ({ isToggled, animationState }) => {

    const { handleLogin, handleToggle } = useContext(userContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <Container>
            <SignInContainer isToggled={isToggled} animationState={animationState}>
                <Title>Acessar Conta</Title>
                <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    <Input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} style={{width: '60%'}}/>
                <ButtonContainer>
                    <Button onMouseDown={() => handleLogin(email, password)}>Login</Button>
                    <Button1 onClick={() => handleToggle()}>Não possuo uma conta</Button1>
                </ButtonContainer>
            </SignInContainer>
        </Container>
    );
}

export default SignInForm;