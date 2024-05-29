import { createContext, useEffect, useState } from "react";
import api from "../api";

export const userContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {

    const navigateTo = (path: any) => {
		window.location.href = path;
	};

    const [isToggled, setIsToggled] = useState(false);
    const [animationState, setAnimationState] = useState(0)
    const [token, setToken] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState({});
    const [weight, setWeight] = useState(0);


    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if(savedToken) {
            setToken(savedToken);
        }
    }, []);

  /*   const handleToggle = () => {
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
    } */

    const handleToggle = () => {
        setAnimationState((prev) => (prev + 1) % 3);
        setIsToggled(!isToggled);
    };

    const handleName = (fullName: string) => {
        const nameParts = fullName.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts[nameParts.length - 1];
        const firstAndLastName = `${firstName} ${lastName}`;
        return firstAndLastName;
    }

    const handleBMI = (weight: number, height: string) => {
        if(weight === 0 || height === '0') {
            return 0
        }
        const IMC: string = (weight/(parseFloat(height)*parseFloat(height))).toFixed(1);

        return IMC;
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data}) => {
            console.log('Login feito com sucesso!');
            localStorage.setItem('token', data.token);
            setToken(data.token);
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
    
    const handleAddData = async (token: string, user_id: string, weight: number, fat: number, muscle: number, vis_fat: number, body_age: number, date: string) => {
      /*   api.post('/user/add-data', { headers: { Authorization: `Bearer ${token}` } }).then(({ data }) => {
            console.log('Dados cadastrados com sucesso.');
        }).catch((error) => {
            console.log('Usuário não autenticado', error);
        }) */

        try {
            const response = await api.post(
                '/user/add-data',
                {user_id, weight, fat, muscle, vis_fat, body_age, date},
                {
                    headers: { Authorization: `Bearer ${token}`}
                }
            );
            console.log('Dados adicionados com sucesso!', response.data);
        } catch (error: any) {
            if (error.response) {
                console.error('Erro no servidor:', error.response.data);
                console.error('Status code:', error.response.status);
            } else if (error.request) {
                console.error('Nenhuma resposta recebida do servidor:', error.request);
            } else {
                console.error('Erro ao configurar a solicitação:', error.message);
            }
            console.error('Configuração do erro:', error.config);
        }
    }

    const handleSetHeight = async (height: number, user_id: string, token: string) => {
        try {
            const response = await api.post(
                'user/add-height', 
                { height, user_id },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            console.log('Altura adicionada com sucesso!', response.data);
        } catch (error: any) {
            if (error.response) {
                console.error('Erro no servidor:', error.response.data);
                console.error('Status code:', error.response.status);
            } else if (error.request) {
                console.error('Nenhuma resposta recebida do servidor:', error.request);
            } else {
                console.error('Erro ao configurar a solicitação:', error.message);
            }
            console.error('Configuração do erro:', error.config);
        }
    }

    const handleSetGoal = async (goal: number, user_id: string, token: string) => {
        try {
            const response = await api.post(
                'user/add-goal', 
                { goal, user_id },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            console.log('Altura adicionada com sucesso!', response.data);
        } catch (error: any) {
            if (error.response) {
                console.error('Erro no servidor:', error.response.data);
                console.error('Status code:', error.response.status);
            } else if (error.request) {
                console.error('Nenhuma resposta recebida do servidor:', error.request);
            } else {
                console.error('Erro ao configurar a solicitação:', error.message);
            }
            console.error('Configuração do erro:', error.config);
        }
    }
    
    const handleGetUserInfo = async (user_id: string, token: string) => {
        try {
            const response = await api.get(
                '/user/get-user-data',
                { 
                    params: { user_id },
                    headers: { Authorization: `Bearer ${token}` }
                },
            );
            setUserInfo(response.data);
            console.log('Dados obtidos com sucesso!');
        } catch (error: any) {
            if (error.response) {
                console.error('Erro no servidor:', error.response.data);
                console.error('Status code:', error.response.status);
            } else if (error.request) {
                console.error('Nenhuma resposta recebida do servidor:', error.request);
            } else {
                console.error('Erro ao configurar a solicitação:', error.message);
            }
            console.error('Configuração do erro:', error.config);
        }
    };

    const handleGetLatestWeight = async (user_id: string, token: string) => {
        try{
            const response = await api.get(
                'user/get-latest-weight',
                {
                    params: { user_id },
                    headers: { Authorization: `Bearer ${token}`}
                },
            );
            console.log('Dados obtidos com sucesso!');
            setWeight(response.data.user.weight);
        } catch (error: any) {
            if (error.response) {
                console.error('Erro no servidor:', error.response.data);
                console.error('Status code:', error.response.status);
            } else if (error.request) {
                console.error('Nenhuma resposta recebida do servidor:', error.request);
            } else {
                console.error('Erro ao configurar a solicitação:', error.message);
            }
            console.error('Configuração do erro:', error.config);
        }
    }

    return(
        <userContext.Provider value={{
            handleCreateAccount,
            handleToggle,
            handleLogin,
            handleAddData,
            handleSetHeight,
            handleSetGoal,
            handleGetUserInfo,
            handleGetLatestWeight,
            handleName,
            handleBMI,
            isToggled,
            animationState,
            userInfo,
            weight,
        }}>
            {children}
        </userContext.Provider>
    )
}