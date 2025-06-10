import { useEffect, useState } from "react";
import api from "../../Services/services";

import Swal from 'sweetalert2';

import "./ListagemEventos.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import Comentario from "../../assets/img/Comentario.svg";
import Detalhes from "../../assets/img/Descricao.svg";
import Toggle from "../../components/toggle/Toggle";
import Modal from "../../components/modal/Modal";

import { format } from "date-fns";

const ListagemEventos = () => {
    const [listaEventos, setListarEventos] = useState([]);
    const [tipoModal, setTipoModal] = useState('');
    const [dadosModal, setDadosModal] = useState({});
    const [modalAberto, setModalAberto] = useState(false);
    const [usuarioId, setUsuarioId] = useState("");
    const [filtroData, setFiltroData] = useState([]);

    async function listarEventos() {
        try {
            const eventoListado = await api.get("eventos");
            setListarEventos(eventoListado.data);
            console.log(eventoListado.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarEventos();
    }, []);

    function abrirModal(tipo, dados) {
        setModalAberto(true);
        setTipoModal(tipo);
        setDadosModal(dados);
    }

    function fecharModal() {
        setModalAberto(false);
        setDadosModal({});
        setTipoModal("");
    }

    async function manipularPresenca(idEvento, presenca, idPresenca) {
        try {
            if (presenca && idPresenca !== "") {
                await api.put(`PresencaEventos/${idPresenca}`, { situacao: false });
                Swal.fire("Removido!", "Sua presença foi removida.", "success");
            } else if (idPresenca !== "") {
                await api.put(`PresencaEventos/${idPresenca}`, { situacao: true });
                Swal.fire("Confirmado!", "Sua presença foi confirmada.", "success");
            } else {
                await api.post("PresencaEventos", {
                    situacao: true,
                    idUsuario: usuarioId,
                    idEvento: idEvento
                });
                Swal.fire("Confirmado!", "Sua presença foi confirmada.", "success");
            }
        } catch (error) {
            console.log(error);
        }
    }

    function filtrarEventos() {
        const hoje = new Date();

        return listaEventos.filter((evento) => {
            const dataEvento = new Date(evento.dataEvento);

            if (filtroData.includes("todos")) return true;
            if (filtroData.includes("futuros") && dataEvento > hoje) return true;
            if (filtroData.includes("passados") && dataEvento < hoje) return true;

            return false;
        });
    }

    return (
        <>
            <Header nomeUsu="Aluno" />
            <section className="listagem_evento">
                <h1>Eventos</h1>
                <hr />
                <div className="tabela_evento">
                    <select onChange={(e) => setFiltroData([e.target.value])} defaultValue="todos">
                        <option value="todos">Todos os Eventos</option>
                        <option value="futuros">Somente Futuros</option>
                        <option value="passados">Somente Passados</option>
                        <option value=""></option>
                    </select>

                    <table>
                        <thead>
                            <tr className="table_evento">
                                <th>Titulo</th>
                                <th>Data do Evento</th>
                                <th>Tipo Evento</th>
                                <th>Descricao</th>
                                <th>Comentários</th>
                                <th>Participar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtrarEventos().map((item) => (
                                <tr className="item_evento" key={item.idEvento}>
                                    <td data-cell="Nome">{item.nomeEvento}</td>
                                    <td data-cell="Data">{format(new Date(item.dataEvento), "dd/MM/yy")}</td>
                                    <td data-cell="Tipo_Evento">{item.tiposEvento.tituloTipoEvento}</td>
                                    <td data-cell="Descricao">
                                        <button className="icon" onClick={() => abrirModal("descricaoEvento", { descricao: item.descricao })}>
                                            <img src={Detalhes} alt="Imagem de descricao" />
                                        </button>
                                    </td>
                                    <td data-cell="Comentar">
                                        <button className="icon" onClick={() => abrirModal("comentarios", { idEvento: item.idEvento })}>
                                            <img src={Comentario} alt="Imagem de um comentario" />
                                        </button>
                                    </td>
                                    <td data-cell="Botao">
                                        <Toggle
                                            presenca={item.possuiPresenca}
                                            manipular={() =>
                                                manipularPresenca(item.idEvento, item.possuiPresenca, item.idPresenca)
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />

            {modalAberto && (
                <Modal
                    titulo={tipoModal === "descricaoEvento" ? "Descricao do evento" : "Comentario"}
                    tipoModel={tipoModal}
                    idEvento={dadosModal.idEvento}
                    descricao={dadosModal.descricao}
                    fecharModal={fecharModal}
                />
            )}
        </>
    );
};

export default ListagemEventos;
