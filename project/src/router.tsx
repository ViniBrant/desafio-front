import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastro1 } from './pages/Cadastro1';
import { Cadastro2 } from './pages/Cadastro2';
import { Cadastro3 } from './pages/Cadastro3';
import { Edit } from './pages/Edit';
import { FimCad } from './pages/FimCad';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cadastro1" element={<Cadastro1/>} />
                <Route path="/cadastro2" element={<Cadastro2/>} />
                <Route path="/cadastro3" element={<Cadastro3/>} />
                <Route path="/edit" element={<Edit/>} />
                <Route path="/FimCad" element={<FimCad/>}/>
            </Routes>
        </BrowserRouter>
    );
}