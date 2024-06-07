import { useContext, useState } from 'react';
import { Container, SignInContainer, Title, NameInput, EmailInput, PasswordInput, PasswordContainer, Button, Button1, 
        ButtonContainer, ErrorText, ShowPasswordContainer, ShowPasswordButton, ShowPassword, FormContainer  } 
    from './styles';
import { userContext } from '../../contexts/userContexts';

interface ToggleProps {
    isToggled: Boolean;
    animationState: number;
}

const SignUpForm: React.FC<ToggleProps> = ({ isToggled, animationState }) => {

    const { handleCreateAccount, handleToggle, nameError, emailError, passwordError } = useContext(userContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
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
                    <FormContainer>
                        <Title>Criar Conta</Title>
                        <NameInput type="text" placeholder='Nome e Sobrenome' onChange={(e) => setName(e.target.value)} nameError={nameError}/>
                        <ErrorText passwordError={passwordError}>{nameError}</ErrorText>
                        <EmailInput type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} emailError={emailError}/>
                        <ErrorText passwordError={passwordError}>{emailError}</ErrorText>
                        <PasswordContainer>
                            <PasswordInput type={showPassword} placeholder='Senha' onChange={(e) => setPassword(e.target.value)} passwordError={passwordError}/>
                            <PasswordInput type={showPassword} placeholder='Confirmar Senha' onChange={(e) => setPassword2(e.target.value)}passwordError={passwordError}/>
                        </PasswordContainer>
                        <ErrorText passwordError={passwordError}>{passwordError}</ErrorText>
                        <ShowPasswordContainer onClick={showHidePassword}>
                            <ShowPasswordButton showPassword={showPassword}></ShowPasswordButton>
                            <ShowPassword>Mostrar senha</ShowPassword>
                        </ShowPasswordContainer>
                        <ButtonContainer>
                            <Button onClick={() => handleCreateAccount(name, email, password, password2)}>Crie sua conta</Button>
                            <Button1 onClick={() => handleToggle()}>Já possuo uma conta</Button1>
                        </ButtonContainer>
                    </FormContainer>
                </SignInContainer>
        </Container>
    );
}

export default SignUpForm;