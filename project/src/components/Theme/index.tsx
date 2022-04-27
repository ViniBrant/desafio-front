import { ReactNode } from 'react';
import * as C from './styles';

type Props = {
    children: ReactNode;
}

export const Theme = ({children} :Props) => {
    return (
        <C.Background>
            <C.Card>
                <C.Top>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Top>
            </C.Card>
        </C.Background>
    );
}