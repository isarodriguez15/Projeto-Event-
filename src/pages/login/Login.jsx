<<<<<<< HEAD
import "./Login.css"
import Logo from "../../assets/img/logo1.svg";
import Logo_banner from "../../assets/img/undraw_login_re_4vu2\ 1.png";
import Botao from "../../components/botao/Botao";
=======
import Logo from "../../assets/img/Logo.svg"
import Botao from "../../components/botao/Botao"
import "./Login.css"
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82

const Login = () => {
    return (
        <main className="main_login">
<<<<<<< HEAD
            <div className="logo_banner">
                <img src={Logo_banner} alt="" />
            </div>
            <section className="section_login">
                <img src={Logo} alt="" />
                <form action="" className="form_login">
                    <div className="campos_login">
                        <div className="campo_input">
                            <input type="text" name="Usuario" placeholder="Username" />
                        </div>
                        <div className="campo_input">
                            <input type="password" name="senha" placeholder="Password" />
                        </div>
                    </div>
                        <a href="">Esqueceu sua senha?</a>
                    <Botao nomeBotao="Login" />
=======
            
            <div className="banner">
                <div id="fundo_login"/>
            </div>

            <section className="section_login">
                <img src={Logo} alt="Logo do Event"/>

                <form action="" className="form_login">

                    <div className="campos_login">
                        <div className="campo_input">
                            <input type="Email" name="email" placeholder="Username"/>
                        </div>

                        <div className="campo_input">
                            <input type="PassWord" name="senha" placeholder="password" />
                        </div>
                        
                        </div>
                    <a href="">Esqueceu Sua Senha?</a>
                    <Botao botao="Login"/>
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
                </form>
            </section>
        </main>
    )
}

export default Login;