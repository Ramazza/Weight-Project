import { useContext } from 'react';
import { userContext } from '../../contexts/userContexts';
import { Container } from './styles';
import SignUpForm from '../../components/sign-up_form';
import CallToAction from '../../components/call_to_action';
import SignInForm from '../../components/sign-in_form';

function SignUp() {

    const { isToggled, animationState } = useContext(userContext);

    return(
        <Container>
            <CallToAction isToggled={isToggled} animationState={animationState}/>
            {!isToggled ? 
                <SignUpForm  isToggled={isToggled} animationState={animationState}/>
                :
                <SignInForm isToggled={isToggled} animationState={animationState}/>
        }
        </Container>
    );
}

export default SignUp;