import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {Routes} from "react-router-dom";
// import {Route} from "react-router-dom";
import Login from "../pages/login/Login";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* http://localhost:3000/   => Login */}
                <Route path="/" element={<Login />} exact/>

            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;