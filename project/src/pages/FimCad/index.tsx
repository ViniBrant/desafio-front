import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import logo from '../../assets/logo.png' 


export const FimCad = () => {
    const navigate = useNavigate();

    const handlePreviousStep = () => { navigate('/edit'); }
    const handleNextStep = () => { navigate('/'); }


    return(
        
        <Theme>
            <C.Container>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Cadastro realizado com sucesso</h2>

                <C.BackButton onClick={handlePreviousStep}>Editar cadastro</C.BackButton>
                <C.Button onClick={handleNextStep}>Início</C.Button>
            </C.Container>
        </Theme>
        
    )
}