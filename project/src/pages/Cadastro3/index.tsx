import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';

export const Cadastro3 = () => {

    const navigate = useNavigate();

    const handleNextStep = () => { navigate('/edit'); }

    return(
        <Theme>
            <C.Container>
                Cadastro 3
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}