import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const Cadastro2 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.nome === '' || state.telefone === '' || state.email === '' || state.nacionalidade === ''){navigate('/cadastro1');} });

    const handleCEPChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCep,
            payload: e.target.value
        });
    }

    const handlePreviousStep = () => { navigate('/cadastro1'); }

    const handleNextStep = () => {
        if(state.cep !== '') {
            navigate('/cadastro3');
        } else {
            alert("Preencha todos os dados.");
        }
    }

    return(
        <Theme>
            
            <C.Container>
                <h4> Qual o seu CEP ? </h4>
                <p> Agora precisamos que você nos passe suas informações residenciais </p>

                <C.Label>
                    CEP
                    <input
                        type="text"
                        autoFocus
                        value={state.cep}
                        onChange={handleCEPChange}
                    />

                <C.BackButton onClick={handlePreviousStep}>Voltar</C.BackButton>
                <C.Button onClick={handleNextStep}>Próximo</C.Button>
                </C.Label>

            </C.Container>
        </Theme>
    )
}