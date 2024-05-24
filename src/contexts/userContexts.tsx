import { createContext, useState } from "react";
import api from "../api";

export const userContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {

    const navigateTo = (path: any) => {
		window.location.href = path;
	};

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data}) => {
            console.log('Login feito com sucesso!');
            navigateTo('/home');
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error);
        })
    }

    const handleCreateAccount = (name: string, email: string, password: string, password2: string) => {

        api.post('/user/sign-up', {name, email, password}).then(() => {
            console.log('Usuário criado com sucesso!');
            handleLogin(email, password);
        }).catch((error) => {
            console.log('Não foi possível criar o usuário', error)
        })

    }

    const [isToggled, setIsToggled] = useState(false);
    const [animationState, setAnimationState] = useState(0)

    const handleToggle = () => {
        if(animationState === 0) {
            setAnimationState(1);
            setIsToggled(!isToggled);
        }
        if(animationState === 1) {
            setAnimationState(2);
            setIsToggled(!isToggled);
        }
        if(animationState === 2) {
            setAnimationState(1);
            setIsToggled(!isToggled);
        }
    }

    return(
        <userContext.Provider value={{
            handleCreateAccount,
            handleToggle,
            handleLogin,
            isToggled,
            animationState,
        }}>
            {children}
        </userContext.Provider>
    )
}