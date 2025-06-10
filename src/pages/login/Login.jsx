import React from 'react';
import Logo from '../../assets/img/logo.svg'; // ajuste conforme seu caminho
import Logo_banner from '../../assets/img/logo_banner.svg'; // ajuste conforme seu caminho
import Botao from '../../components/botao/Botao'; // ajuste conforme sua estrutura

import api from "../../Services/services";
import Swal from "sweetalert2";


import './Login.css'; // arquivo de estilos
import { userDecodeToken } from '../../auth/Auth';
import secureLocalStorage from 'react-secure-storage';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    async function realizarAutenticacao() {

        e.preventDefault();
        // console.log(email,senha)

        const usuario = {
            email: email,
            senha: senha
        }
        if (senha.trim() != "" || email.trim() != "") {

            try {
              const resposta =  await api.post("Login", usuario);
              const token = resposta.data.token;

              if(token){
                   //token sera decodificado:
                  const tokenDecodificado = userDecodeToken(token);

                  secureLocalStorage.setItem("tokenLogin", JSON.stringify(tokenDecodificado));

                  if(tokenDecodificado.tipoUsuario === "aluno"){
                    //redirecionar a tela de lista de eventos(branco)
                    navigate("/Evento")
                  }else{
                    //ele vai encaminhar pra tela cadastro de eventos(vermelha)
                    navigate("/CadastroEvento")
                  }

                 // console.log("Token decodificado:");
                 // console.log("tokenDecodificado.tipoUsuario");
              }

              console.log(resposta.data.token);

            } catch (error) {
                console.log(error);
                alert("Email e senha inválidos! Para dúvidas entre em contato com o suporte.");
            }

        } else {
            alert("Preencha os campos vazios para realizar o login!")
        }
    }

    return (
        <main className="main_login">
            {/* Banner lateral com logo */}
            <div className="logo_banner">
                <img src={Logo_banner} alt="Banner do sistema" />
            </div>

            {/* Área de login */}
            <section className="section_login">
                <img src={Logo} alt="Logo do sistema" />

                <form className="form_login" onSubmit={realizarAutenticacao}>
                    <div className="campos_login">
                        <div className="campo_input">
                            <input type="text" name="usuario" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="campo_input">
                            <input type="password" name="senha" placeholder="Password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                    </div>

                    <a href="#">Esqueceu sua senha?</a>

                    <Botao nomeBotao="Login" />
                </form>
            </section>
        </main>
    );
};

export default Login;
