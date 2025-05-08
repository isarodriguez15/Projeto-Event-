import Botao from "../../components/botao/Botao";
import Logo from "../../assents/img/logo1.svg";
import Banner from "../../assents/img/fundo_login.png"
import "./Login.css";

const Login = () => {
    return (
        <main className="mae_de_todas">
            <div className="banner">
                <img src={Banner} alt ="banner do fundo do Login"/>
            </div>

            <section className="section_login">
                <img src={Logo} alt="Logo do Event+" />
                <form action="" className="form_login">

                    <div className="campos_login">
                        <div className="campo_imput">
                            <label htmlFor="email"></label>
                            <input className="email"type="email" name="username" placeholder="usename"/>

                        </div>
                        <div className="campo_imput">
                            <label htmlFor="senha"></label>
                            <input type="password" name="password" placeholder="password" />

                        </div>
                    </div>
                        <h3 className="esqueceu_a_senha">Esqueceu a senha?</h3>
                    <Botao nomeBotao ="Logar"/>
                </form>
            </section>
        </main>
    )
}
export default Login;