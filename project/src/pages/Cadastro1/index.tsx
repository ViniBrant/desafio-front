import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent } from 'react';

export const Cadastro1 = () => {

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

    const handleNextStep = () => {
        if(state.nome !== '' && state.telefone !== '' && state.email !== '' && state.nacionalidade !== '') {
            navigate('/cadastro2');
        } else {
            alert("Preencha todos os dados.");
        }
    }

    return(
        <Theme>
            <C.Container>
                <p>Cadastro 1</p>

                <C.FormArea>
                    <C.Label>
                        Nome = {state.nome}
                        <input
                            type="text"
                            autoFocus
                            value={state.nome}
                            onChange={handleNameChange}
                        />
                    </C.Label>

                    <C.Label>
                        Telefone = {state.telefone}
                        <input
                            type="text"
                            value={state.telefone}
                            onChange={handleTelefoneChange}
                        />
                    </C.Label>

                    <C.Label>
                        Email = {state.email}
                        <input
                            type="email"
                            value={state.email}
                            onChange={handleEmailChange}
                        />
                    </C.Label>

                    <C.Label>
                        Nacionalidade = {state.nacionalidade}
                        <input
                            type="text"
                            value={state.nacionalidade}
                            onChange={handleNacionalidadeChange}
                        />
                    </C.Label>
                </C.FormArea>

                <C.Button onClick={handleNextStep}>Próximo</C.Button>
            </C.Container>
        </Theme>
    )
}