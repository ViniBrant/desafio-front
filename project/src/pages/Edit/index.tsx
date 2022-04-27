import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent } from 'react';


export const Edit = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();


    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNome,
            payload: e.target.value
        });
    }

    const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setTelefone,
            payload: e.target.value
        });
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleNacionalidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNacionalidade,
            payload: e.target.value
        });
    }

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

    const handleNextStep = () => {
        if(state.nome !== '' && state.telefone !== '' && state.email !== '' && state.nacionalidade !== '' && 
        state.cep !== '' && state.estado !== '' && state.cidade !== '' && state.rua !== '' && state.bairro !== '') {
            navigate('/');
        } else {
            alert("Preencha todos os dados.");
        }
    }

    return(
        <Theme>
            <C.Container>
            <h3>Editar cadastro</h3>

                    <C.Label>
                        Nome 
                        <input
                            type="text"
                            autoFocus
                            value={state.nome}
                            onChange={handleNameChange}
                        />
                    </C.Label>

                <C.Area1>
                    
                    <C.Label>
                        Telefone 
                        <input
                            type="text"
                            value={state.telefone}
                            onChange={handleTelefoneChange}
                        />
                    </C.Label>

                    <C.Label>
                        Email 
                        <input
                            type="email"
                            value={state.email}
                            onChange={handleEmailChange}
                        />
                    </C.Label>
                </C.Area1>

                <C.Area2>
                    
                    <C.Label>
                        Nacionalidade 
                        <input
                            type="text"
                            value={state.nacionalidade}
                            onChange={handleNacionalidadeChange}
                        />
                    </C.Label>

                    <C.Label>
                        CEP 
                        <input
                            type="text"
                            value={state.cep}
                            onChange={handleCEPChange}
                        />
                    </C.Label>
                </C.Area2>    

                <C.Area3>
                    <div>
                        <C.Label>
                            Estado 
                            <input
                                type="text"
                                value={state.estado}
                                onChange={handleEstadoChange}
                            />
                        </C.Label>
                    </div>
                
                    <div>
                        <C.Label>
                            Cidade 
                            <input
                                type="text"
                                value={state.cidade}
                                onChange={handleCidadeChange}
                            />
                        </C.Label>
                    </div>
                </C.Area3>

                <C.Area4>
                    <div>
                        <C.Label>
                            Rua 
                            <input
                                type="text"
                                value={state.rua}
                                onChange={handleRuaChange}
                            />
                        </C.Label> 
                    </div>

                    <div>
                        <C.Label>
                            Bairro 
                            <input
                                type="text"
                                value={state.bairro}
                                onChange={handleBairroChange}
                            />
                        </C.Label>
                    </div>

                </C.Area4>

                <C.Area5>
                    <div>
                        <C.Label>
                            Numero 
                            <input
                                type="text"
                                value={state.numero}
                                onChange={handleNumeroChange}
                            />
                        </C.Label> 
                    </div>

                    <div>
                        <C.Label>
                            Complemento 
                            <input
                                type="text"
                                value={state.complemento}
                                onChange={handleComplementoChange}
                            />
                        </C.Label>
                    </div>
                </C.Area5>

                <C.Area6><C.Button onClick={handleNextStep}>Concluir</C.Button></C.Area6>
                
                
            </C.Container>
        </Theme>
    )
}