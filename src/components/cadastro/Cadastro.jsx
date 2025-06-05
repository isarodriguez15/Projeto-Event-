import "./Cadastro.css"
<<<<<<< HEAD
import Botao from "../botao/Botao"

const Cadastro = (props) => {
    return (
        <main className="main_cadastro">
            <div className="titulo">
                <h1>{props.titulo}</h1>
                <hr />
            </div>

            <section className="section_cadastro">
                <div className="banner_cadastro">
                    <img src={props.imagem} alt="Fundo banner do cadastro eventos" />
                </div>

                <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">

                    <div className="campos_cadastro">
                        <div className="campo_cad_titulo">
                            <label htmlFor="Nome"></label>
                            <input type="text"
                                name="nome"
                                placeholder={props.place}
                                value={props.valorInput}
                                onChange={(e) => props.setValorInput(e.target.value)}
                            />

                        </div>
                        <div className="campo_cad_titulo">
                            <input type="date"
                                style={{ display: props.data }}
                                value={props.valorDate}
                                onChange={(e) => props.setValorDate(e.target.value)}
                            />
                        </div>
                        <div className="campo_cad_titulo opcao" style={{ display: props.visibilidade }}>
                            <label htmlFor="Nome"></label>
                            <select name="Tipo De Evento" id="" className="select_cad"
                                value={props.valorSelect}
                                onChange={(e) => props.setValorSelect(e.target.value)}
                            >

                                <option value="" disabled selected>Tipo de Evento</option>
                                {props.lista && props.lista.length > 0 && props.lista.map((itemTipoEvento) => (
                                    (
                                        <option value={itemTipoEvento.idTipoEvento}>{itemTipoEvento.tituloTipoEvento}</option>
                                    ))
                                )}
                            </select>

                        </div>
                        <div className="campo_cad_titulo">
                            <select name="" id=""
                                style={{ display: props.Inst }}
                                value={props.valorSelect2}
                                onChange={(e) => props.setValorSelect2(e.target.value)}
                            >
                                <option selected value="">Senai</option>
                            </select>
                            <textarea name="" id="" placeholder="Descrição" className="descricao"
                                style={{ display: props.desc }}
                                value={props.valorText}
                                onChange={(e) => props.setValorText(e.target.value)}
                            ></textarea>
                        </div>

                        <Botao nomeBotao="Cadastrar" />
                    </div>
                </form>
            </section>
        </main>
=======
import Botao from "../botao/Botao";

const Cadastro = (props) => {
    return (
        <section className="layout_grid section_cadastro">
            <div className="cadastro_titulo">
                <h1>{props.titulo_cadastro}</h1>
                <hr />
            </div>

            <form onSubmit={props.funcCadastro} className="form_cadastro">
                <div className="img_cadastro">
                    <img src={props.banner_img} alt="Imagem do Cadastro" />
                </div>

                <div className="campos_cadastro">

                    {/* nome evento */}
                    <div className="campo_cad_nome">
                        <input
                            type="text"
                            placeholder={props.campo_placeholder}
                            value={props.valorInput}

                            onChange={(e) => props.setValorInput(e.target.value)}
                        />
                    </div>

                    {/* data evento */}
                    <div className="campo_cad_nome">
                        <input
                            style={{ display: props.visibilidade_data }}
                            type="date"
                            value={props.valorData}
                            onChange={(e) => props.setValorData(e.target.value)}
                        />
                    </div>

                    {/* tipo evento */}
                    <div className="campo_cad_eventos" style={{ display: props.visibilidade_tp_evento }}>
                        <select name="Tipo Evento"
                            value={props.valorTpEvento}
                            onChange={(e) => props.setValorTpEvento(e.target.value)}
                        >
                            <option disabled value="">Tipo Evento</option>
                            {props.lista &&
                                props.lista.length > 0 &&
                                props.lista.map((itemTpEvento) =>
                                    <option value={itemTpEvento.idTipoEvento}>{itemTpEvento.tituloTipoEvento}</option>
                                )}
                        </select>
                    </div>

                    {/* Instituição */}
                    <div className="campo_cad_eventos" style={{ display: props.visibilidade_instituicao }}>
                        <select name="Instituicao"
                            value={props.valorInstituicao}
                            onChange={(e) => props.setValorInstituicao(e.target.value)}
                        >
                            <option selected>Senai</option>
                        </select>
                    </div>

                    {/* Descrição evento */}
                    <div className="campo_cad_nome">
                        <input
                            type="text"
                            placeholder={props.campo_descricao}
                            value={props.valorInputDescricao}
                            style={{ display: props.visibilidade_descricao }}

                            onChange={(e) => props.setValorInputDescricao(e.target.value)}
                        />
                    </div>
                    <Botao botao={props.botao} />
                </div>
            </form>
        </section>
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
    )
}

export default Cadastro;