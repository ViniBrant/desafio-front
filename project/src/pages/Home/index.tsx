import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import logo from '../../assets/logo.png' 


export const Home = () => {
    const navigate = useNavigate();

    const handleNextStep = () => { navigate('/cadastro1'); }


    return(
        
        <Theme>
            <C.Container>
                <h1>Olá, Bem vindo!</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <C.Button onClick={handleNextStep}>Cadastrar</C.Button>
            </C.Container>
        </Theme>
        
    )
}