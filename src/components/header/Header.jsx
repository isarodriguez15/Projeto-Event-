<<<<<<< HEAD
import "./Header.css"
import Logo from "../../assets/img/logo1.svg"
import Logo_adm from "../../assets/img/Vector.png"

=======
import "./Header.css";
import Logo from "../../assets/img/Logo.svg";
import Icone from "../../assets/img/Administracao.svg";
import { Link } from "react-router-dom";
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82

const Header = (props) => {
    return (
        <header>
            <div className="layout_grid cabecalho">
<<<<<<< HEAD
                <img src={Logo} alt="Logo Evento" />
                <nav className="nav_header">
                    <a href="" className="link_header">Home</a>
                    <a href="" className="link_header">Eventos</a>
                    <a href="" className="link_header">Usuários</a>
                    <a href="" className="link_header">Contatos</a>
                </nav>
                <div className="Adm">
                    <a href="" className="link_header">{props.nomeUsu}</a>
                    <img src={Logo_adm} alt="Vetor" />
                </div>

=======
                <Link to="/" className="logo_header">
                    <img src={Logo} alt="Logo do Events" />
                </Link>

                <nav className="nav_header">
                    <Link href="" className="link_header" to="/Home">Home</Link>
                    <Link href="" className="link_header" to="/Evento">Eventos</Link>
                    <Link href="" className="link_header" to="/TipoEvento">Tipos de Eventos</Link>
                    <Link href="" className="link_header" to="/TipoUsuario">Usuários</Link>
                    <Link href="" className="link_header" to="/Listagem">Listagem</Link>
                </nav>

                <nav className="nav_img" style={{ display: props.visibilidade }}>
                    <Link href="" className="link_header" to="/" >{props.user}</Link>
                    <img src={Icone} alt="Icone" style={{ display: props.visibilidade }} />
                </nav>

                <div className="login" style={{ display: props.botao_logar }}>
                    <Link href="" to="/" className="logar">Logar</Link>
                </div>
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
            </div>
        </header>
    )
}

export default Header;