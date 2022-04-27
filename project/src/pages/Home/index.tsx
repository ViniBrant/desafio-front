import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';


export const Home = () => {
    const navigate = useNavigate();

    const handleNextStep = () => { navigate('/cadastro1'); }


    return(
        
        <Theme>
            <C.Container>
                Olá, Bem vindo!
                <C.Button onClick={handleNextStep}>Cadastrar</C.Button>
            </C.Container>
        </Theme>
        
    )
}