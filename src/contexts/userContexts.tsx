import { createContext, useState } from "react";
import api from "../api";

export const userContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {

    const handleCreateAccount = (name: string, email: string, password: string, password2: string) => {

        api.post('/user/sign-up', {name, email, password}).then(() => {
            console.log('Usuário criado com sucesso!');
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
            isToggled,
            animationState,
        }}>
            {children}
        </userContext.Provider>
    )
}