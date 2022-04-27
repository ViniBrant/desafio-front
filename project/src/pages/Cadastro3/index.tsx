import * as C from './styles';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const Cadastro3 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.nome === '' || state.telefone === '' || state.email === '' || state.nacionalidade === '' || state.cep === ''){
            navigate('/cadastro1');} });

    const handleCEPChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCep,
            payload: e.target.value
        });
    }

    const handleEstadoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEstado,
            payload: e.target.value
        });
    }

    const handleCidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCidade,
            payload: e.target.value
        });
    }

    const handleRuaChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setRua,
            payload: e.target.value
        });
    }

    const handleBairroChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setBairro,
            payload: e.target.value
        });
    }

    const handleNumeroChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNumero,
            payload: e.target.value
        });
    }

    const handleComplementoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setComplemento,
            payload: e.target.value
        });
    }

    

    const handlePreviousStep = () => { navigate('/cadastro2'); }
    const handleNextStep = () => {
        if(state.cep !== '' && state.estado !== '' && state.cidade !== '' && state.rua !== '' && state.bairro !== '') {
            navigate('/FimCad');
        } else {
            alert("Preencha todos os dados.");
        }
    }
    

    return(
        <Theme>
           <C.Container>
                <h4> Nos informe seu endereço </h4>
                <p> Agora precisamos que você nos passe suas informações residenciais </p>

                <C.Label>
                    CEP = {state.cep}
                    <input
                        type="text"
                        autoFocus
                        value={state.cep}
                        onChange={handleCEPChange}
                    />
                </C.Label>

                <C.Area1>
                    <div>
                        <C.Label>
                            Estado = {state.estado}
                            <input
                                type="text"
                                value={state.estado}
                                onChange={handleEstadoChange}
                            />
                        </C.Label>
                    </div>
                
                    <div>
                        <C.Label>
                            Cidade = {state.cidade}
                            <input
                                type="text"
                                value={state.cidade}
                                onChange={handleCidadeChange}
                            />
                        </C.Label>
                    </div>
                </C.Area1>

                <C.Area2>
                    <div>
                        <C.Label>
                            Rua = {state.rua}
                            <input
                                type="text"
                                value={state.rua}
                                onChange={handleRuaChange}
                            />
                        </C.Label> 
                    </div>

                    <div>
                        <C.Label>
                            Bairro = {state.bairro}
                            <input
                                type="text"
                                value={state.bairro}
                                onChange={handleBairroChange}
                            />
                        </C.Label>
                    </div>

                </C.Area2>

                <C.Area3>
                    <div>
                        <C.Label>
                            Numero = {state.numero}
                            <input
                                type="text"
                                value={state.numero}
                                onChange={handleNumeroChange}
                            />
                        </C.Label> 
                    </div>

                    <div>
                        <C.Label>
                            Complemento = {state.complemento}
                            <input
                                type="text"
                                value={state.complemento}
                                onChange={handleComplementoChange}
                            />
                        </C.Label>
                    </div>
                </C.Area3>

                <C.BackButton onClick={handlePreviousStep}>Voltar</C.BackButton>
                <C.Button onClick={handleNextStep}>Concluir</C.Button>
            </C.Container>
        </Theme>
    )
}