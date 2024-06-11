import { createContext, useEffect, useState } from "react";
import api from "../api";
import User from '../assets/user.png';


interface MyData {
    id: string;
    user_id: string;
    weight: number;
    fat: number;
    muscle: number;
    vis_fat: number;
    body_age: number;
    date: string;
}

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
    const [reload, setReload] = useState(false);
    const [data, setData] = useState<MyData[]>([]);
    const [profileImage, setProfileImage] = useState(User);

    const [loginError, setLoginError] = useState('')
	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('Use 9 caracteres com uma combinação de letras, números e símbolos.');

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if(savedToken) {
            setToken(savedToken);
        }
    }, []);

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

    const handleDate = (date: string): string => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = (`0${d.getMonth() + 1}`).slice(-2);
        const day = (`0${d.getDate()}`).slice(-2);
        return `${year}-${month}-${day}`;
    }

    const handleBMI = (weight: number, height: string) => {
        if(weight === 0 || height === '0') {
            return 0
        }
        const IMC: string = (weight/(parseFloat(height)*parseFloat(height))).toFixed(1);

        return IMC;
    }

    interface FormFields {
		name: string;
		email: string;
		password: string;
		password2: string;
	}

    const checkLogin = (formData: FormFields) => {
		const { name, email, password, password2 } = formData;
		const errors: { [key: string]: string } = {};
		const containsNumber = /\d/.test(password); 
		const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

		if (name.trim() === '') {
			errors.name = 'Digite o seu nome';
		}

		if (email.trim() === '' || !email.includes('@')) {
			errors.email = 'E-mail inválido';
		}

		if (password.trim() === '' || password.length < 8 || !containsNumber || !containsSpecialChar) {
			errors.password = 'Digite uma senha válida';
		}

		if (password !== password2) {
			errors.password = 'As senhas não coincidem';
		}

		if (Object.keys(errors).length > 0) {
			return errors;
		}

		setPasswordError('Use 9 caracteres com uma combinação de letras, números e símbolos.');
		return 'ok';
	};

    const handleLogin = (email: string, password: string) => {

        if (!email || !password) {
            setLoginError("E-mail e senha não podem ser vazios.");
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setLoginError("Formato de e-mail inválido.");
            return;
        }
    
        api.post('/user/sign-in', { email, password }).then(({ data }) => {
            localStorage.setItem('token', data.token);
            setToken(data.token);
            setLoginError('');
            navigateTo('/');
        }).catch((error) => {
            if (error.response) {
                if (error.response.status === 401) {
                    setLoginError("E-mail ou senha inválidos.");
                } else {
                    setLoginError("Ocorreu um erro. Tente novamente.");
                }
            } else if (error.request) {
                setLoginError("Ocorreu um erro. Tente novamente.");
            } else {
                setLoginError("Ocorreu um erro. Tente novamente.");
            }
            console.log('Login error', error);
        })
    };

    const handleCreateAccount = (name: string, email: string, password: string, password2: string) => {

        const loginCheckResult = checkLogin({ name, email, password, password2 });

        if (typeof loginCheckResult === 'object') {
            setNameError(loginCheckResult.name || '');
			setEmailError(loginCheckResult.email || '');
			setPasswordError(loginCheckResult.password || '');
			return;
        }

        api.post('/user/sign-up', {name, email, password}).then(() => {
            setNameError('');
			setEmailError('');
			setPasswordError('');
            handleLogin(email, password);
        }).catch((error) => {
            console.log('Não foi possível criar o usuário', error)
        })
    };
    
    const handleAddData = async (token: string, user_id: string, weight: number, fat: number, muscle: number, vis_fat: number, body_age: number, date: string) => {
        try {
            const response = await api.post(
                '/user/add-data',
                {user_id, weight, fat, muscle, vis_fat, body_age, date},
                {
                    headers: { Authorization: `Bearer ${token}`}
                }
            );
            // console.log('Dados adicionados com sucesso!', response.data);
            setReload((prev) => !prev);
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

    const handleSetHeight = async (height: number, user_id: string, token: string) => {
        try {
            const response = await api.post(
                'user/add-height', 
                { height, user_id },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            // console.log('Altura adicionada com sucesso!', response.data);
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

    const handleSetGoal = async (goal: number, user_id: string, token: string) => {
        try {
            const response = await api.post(
                'user/add-goal', 
                { goal, user_id },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            // console.log('Altura adicionada com sucesso!', response.data);
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
            // console.log('Dados obtidos com sucesso!');
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

    /* const handleGetLatestWeight = async (user_id: string, token: string) => {
        try{
            const response = await api.get(
                'user/get-latest-weight',
                {
                    params: { user_id },
                    headers: { Authorization: `Bearer ${token}`}
                },
            );
            console.log('Dados obtidos com sucesso!', response.data.user.weight);
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
    }; */

    const handleGetLatestWeight = async (user_id: string, token: string) => {
        try {
            const response = await api.get(
                'user/get-latest-weight',
                {
                    params: { user_id },
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            // Ensure response.data and response.data.user are defined
            if (response.data && response.data.user && response.data.user.weight !== undefined) {
                setWeight(response.data.user.weight);
            } else {
                console.error('Unexpected response structure:', response.data);
            }
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
    

    const handleGetAllData = async (user_id: string, token: string) => {
        try{
            const response = await api.get(
                'user/get-all-data',
                {
                    params: { user_id },
                    headers: { Authorization: `Bearer ${token}`}
                },
            );
            // console.log('Dados obtidos com sucesso!', response.data);
            // setUserData(response.data);
            return response.data;
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

    const handleDeleteData = async (id: string, token: string) => {
        try {
            const response = await api.delete(
                '/user/delete-weight',
                {
                    params: { id },
                    headers: { Authorization: `Bearer ${token}` }
                },
            );
            // console.log('Dados excluídos com sucesso!', response.data);
            setReload((prev) => !prev); 
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

    const handleUpdateData = async (id: string, weight: number, fat: number, muscle: number, vis_fat: number, body_age: number, date: string, token: string) => {
        try {
            const formatedDate = handleDate(date);
            const response = await api.put(
                '/user/update-weight',
                {id, weight, fat, muscle, vis_fat, body_age, date: formatedDate},
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            // console.log('Dados alterados com sucesso!', response.data);
            setReload((prev) => !prev);
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
            handleGetAllData,
            handleDeleteData,
            handleUpdateData,
            setReload,
            handleDate,
            setProfileImage,
            isToggled,
            animationState,
            userInfo,
            weight,
            reload,
            data,
            profileImage,
            loginError,
            nameError,
            emailError,
            passwordError,
        }}>
            {children}
        </userContext.Provider>
    )
}