// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    currentStep: number;
    nome: string;
    telefone: string;
    email: string;
    nacionalidade: string;
    cep: string;
    estado: string;
    cidade: string;
    rua: string;
    bairro: string;
    numero: string;
    complemento: string;
}
type Action = {
    type: FormActions;
    payload: any;
};
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: ReactNode
};
const initialData: State = {
    currentStep: 0,
    nome: '',
    telefone: '',
    email: '',
    nacionalidade: '',
    cep: '',
    estado: '',
    cidade: '',
    rua: '',
    bairro: '',
    numero: '',
    complemento: ''
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);


// Reducer
export enum FormActions {
    setCurrentStep,
    setNome,
    setTelefone,
    setEmail,
    setNacionalidade,
    setCep,
    setEstado,
    setCidade,
    setRua,
    setBairro,
    setNumero,
    setComplemento
}

const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setNome:
            return {...state, nome: action.payload};
        case FormActions.setTelefone:
            return {...state, telefone: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setNacionalidade:
            return {...state, nacionalidade: action.payload};
        case FormActions.setCep:
            return {...state, cep: action.payload};
        case FormActions.setEstado:
            return {...state, estado: action.payload};
        case FormActions.setCidade:
            return {...state, cidade: action.payload};
        case FormActions.setRua:
            return {...state, rua: action.payload};
        case FormActions.setBairro:
            return {...state, bairro: action.payload};
        case FormActions.setNumero:
            return {...state, numero: action.payload};
        case FormActions.setComplemento:
            return {...state, complemento: action.payload};
        default:
            return state;
    }
}

// Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch};
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const context = useContext (FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
    return context;
}