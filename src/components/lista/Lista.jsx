import "./Lista.css";
import Editar from "../../assets/img/Editar.svg"
import Excluir from "../../assets/img/Excluir.svg"
import Descricao from "../../assets/img/Descricao.svg"

const Lista = (props) => {
    return (
        <>
            <section className="listagem">
                <h1>{`Lista de ${props.titulo_lista}`}</h1>
                <hr className="linha_titulo" />

                <div className="tabela layout_grid">
                    <table>
                        <thead>
                            <tr className="tabela_cabecalho">
                                <th>{props.titulo}</th>
                                <th style={{ display: props.visibilidade }}>Data Evento</th>
                                <th style={{ display: props.visibilidade }}>Tipo Evento</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                                <th style={{ display: props.visibilidade }}>Descrição</th>
                            </tr>
                        </thead>

                        <tbody>
                            {props.lista && props.lista.length > 0 ? (
                                props.lista.map((item) => (
                                    <tr className="item_lista"
                                        key={props.tipoLista == "TiposEventos" ? item.idTipoEvento : item.IdTipoUsuario ? item.idEvento : item.idEvento}
                                    >
                                        <td data-cell="Nome" style={{display: props.tipoEvento}}>{props.tipoLista == "TiposEventos" ? item.tituloTipoEvento : item.tituloTipoUsuario ? item.nomeEvento : item.nomeEvento}</td>

                                        <td data-cell="Tipo Evento" style={{ display: props.visibilidade }}>{ new Date(item.dataEvento).toLocaleDateString('pt-BR')}</td>

                                        <td data-cell="Data Evento" style={{ display: props.visibilidade }}>{item.tiposEvento?.tituloTipoEvento}</td>

                                        <td data-cell="Editar" className="botao_edicao">
                                            <img src={Editar}
                                                alt="Caneta"
                                                onClick={() => props.funcEditar(item)} />
                                        </td>

                                        <td data-cell="Excluir" className="botao_edicao">
                                            <img src={Excluir}
                                                alt="Lixeira"
                                                onClick={() => props.funcDeletar(item)} />
                                        </td>

                                        <td data-cell="Descrição" className="botao_edicao" style={{display: props.visibilidade2}}>
                                            <img src={Descricao}
                                                alt="Exclamação"
                                                onClick={() => props.funcDescricao(item)}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) :
                                (
                                    <p>Tipo Úsuario</p>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Lista;