import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';

export const Edit = () => {

    const navigate = useNavigate();

    const handleNextStep = () => { navigate('/'); }

    return(
        <Theme>
            <C.Container>
                Felicidade
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}