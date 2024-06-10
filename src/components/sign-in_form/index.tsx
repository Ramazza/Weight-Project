import { useContext, useState } from 'react';
import { Container, SignInContainer, Title, Input, Button, Button1, ButtonContainer,  ErrorText, ShowPasswordContainer,
            ShowPassword, ShowPasswordButton, SignInFormContainer,
        } from './styles';
import { userContext } from '../../contexts/userContexts';

interface ToggleProps {
    isToggled: Boolean;
    animationState: number;
}

const SignInForm: React.FC<ToggleProps> = ({ isToggled, animationState }) => {

    const { handleLogin, handleToggle, loginError } = useContext(userContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowpassword] = useState('password');
    
    const showHidePassword = () => {
		if(showPassword === 'password'){
			setShowpassword('text');
		} else {
			setShowpassword('password');
		}
	}

    return(
        <Container>
            <SignInContainer isToggled={isToggled} animationState={animationState}>
                <SignInFormContainer>
                    <Title>Acessar Conta</Title>
                        <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                        <Input type={showPassword} placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                        <ErrorText loginError={loginError}>{loginError}</ErrorText>
                        <ShowPasswordContainer onClick={showHidePassword}>
                            <ShowPasswordButton showPassword={showPassword}></ShowPasswordButton>
                            <ShowPassword>Mostrar senha</ShowPassword>
                        </ShowPasswordContainer>
                    <ButtonContainer>
                        <Button onMouseDown={() => handleLogin(email, password)}>Login</Button>
                        <Button1 onClick={() => handleToggle()}>Não possuo uma conta</Button1>
                    </ButtonContainer>
                </SignInFormContainer>
            </SignInContainer>
        </Container>
    );
}

export default SignInForm;