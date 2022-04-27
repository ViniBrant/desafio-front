import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';

export const Cadastro1 = () => {

    const navigate = useNavigate();

    const handleNextStep = () => { navigate('/cadastro2'); }

    return(
        <Theme>
            <C.Container>
                Cadastro 1
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}