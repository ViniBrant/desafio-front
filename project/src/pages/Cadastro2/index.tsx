import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';

export const Cadastro2 = () => {

    const navigate = useNavigate();

    const handleNextStep = () => { navigate('/cadastro3'); }

    return(
        <Theme>
            <C.Container>
                Cadastro 2
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}