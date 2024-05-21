import { createContext } from "react";
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

    return(
        <userContext.Provider value={{
            handleCreateAccount,
        }}>
            {children}
        </userContext.Provider>
    )
}