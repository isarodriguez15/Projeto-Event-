import { useEffect, useState } from "react";
<<<<<<< HEAD
import api from "../../Services/services";
=======
import api from "../../services/Services";
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
import Swal from 'sweetalert2';

import "./ListagemEventos.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
<<<<<<< HEAD
import Comentario from "../../assets/img/comentario.png"
import Toggle from "../../components/toggle/Toggle";
import Detalhes from "../../assets/img/informacoes1.png"
import Modal from "../../components/modal/Modal";
=======
import Comentario from "../../assets/img/Comentario.svg"
import Toggle from "../../components/toggle/Toggle";
import Detalhes from "../../assets/img/Descricao.svg"
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82

import { format, compareAsc } from "date-fns";


// RAFCE CRIA A ESTRUTURA RAPIDA
const ListagemEventos = () => {

    const [listaEventos, setListarEventos] = useState([])
<<<<<<< HEAD
    const [tipoModal, setTipoModal] = useState('');
    const [dadosModal, setDadosModal] = useState({});
    const [modalAberto, setModalAberto] = useState(false);
    const [usuarioId, setUsuarioId] = useState("")

    const [filtroData, setFiltroData] = useState([]);
=======
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82

    // hooks (ex: listaEventos)
    //    funcao para listar os eventos

    async function listarEventos() {
        try {
            const eventoListado = await api.get("eventos");

            setListarEventos(eventoListado.data);
            console.log(eventoListado.data);

<<<<<<< HEAD

        } catch (error) {
            console.log(error);

        }
    }


    useEffect(() => {
        listarEventos();
    }, [])

    function abrirModal(tipo, dados) {
        //tipo de modal
        //dados
        setModalAberto(true)
        setTipoModal(tipo)
        setDadosModal(dados)
    }

    function fecharModal() {
        setModalAberto(false);
        setDadosModal({});
        setTipoModal("");
    }

    async function manipularPresenca(idEvento, presenca, idPresenca) {
        try {
            if (presenca && idPresenca != "") {
                //atualização da situação para false
                await api.put(`PresencaEventos/${idPresenca}`,
                    { situacao: false });
                Swal.fire(`Removido!`, `Sua presença foi confirmada.`, 'sucess');
            } else if (idPresenca != "") {
                //atualização da situação para true
                await api.put(`PresencaEventos/${idPresenca}`,
                    { situacao: true });
                Swal.fire(`Confirmado!`, `Sua presença foi confirmada.`, 'sucess');
            } else {
                //cadastrar uma nova presenca
                await api.post("PresencaEventos", {
                    situacao: true,
                    idUsuario: usuarioId, idEvento: idEvento
                });
                Swal.fire(`Confirmado!`, `Sua presença foi confirmada.`, 'sucess');
            }
        } catch (error) {
            console.log(error)
        }
    }

    function filtrarEventos(){
        const hoje = new Date();

        if(filtroData.includes("todos")) return true;

        if (filtroData.includes("futuros") && dataEvento > hoje) return true;

        if(filtroData.includes("passados") && dataEvento < hoje) return true;

        return false;
    }
    listarEventos()
=======
            
        } catch (error) {
            console.log(error);
            
        }
    }
    
    
    useEffect(() => {
        listarEventos();
    }, [])
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
    return (
        <>
            <Header nomeUsu="Aluno" />
            <section className="listagem_evento">
                <h1>Eventos</h1>
                <hr />
                <div className="tabela_evento">
<<<<<<< HEAD
                    <select onChange={(e) => setFiltroData([e.target.value])}>
                        <option value="todos" selected>Todos os Eventos</option>
                        <option value="futuros">Somente Futuros</option>
                        <option value="passados">Somente Passados</option>
                        <option value=""></option>
=======
                    <select name="Todos os Eventos" id="" className="select_evento">
                        <option value="" disabled selected>Todos os Eventos</option>
                        <option value="">op 1</option>
                        <option value="">op 2</option>
                        <option value=""> op 3</option>
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
                    </select>
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
<<<<<<< HEAD
                        {filtrarEventos() && filtrarEventos().map((item) => (
                            <tr className="item_evento">
                                <td data-cell="Nome" >{item.nomeEvento}</td>
                                <td data-cell="Data">{format(item.dataEvento, "dd/MM/yy")}</td>
                                <td data-cell="Tipo_Evento">{item.tiposEvento.tituloTipoEvento}</td>
                                <button className="icon" onClick={() => abrirModal("descricaoEvento", { descricao: item.descricao })}>
                                    <td data-cell="Descricao"><img src={Detalhes} alt="Imagem de descricao" /></td>
                                </button>
                                <button className="icon" onClick={() => abrirModal("comentarios", { idEvento: item.idEvento })}>
                                    <td data-cell="Comentar"><img src={Comentario} alt="Imagem de um comentario" /></td>
                                </button>
                                <td data-cell="Botao"><Toggle presenca={item.possuiPresenca} manipular={() => manipularPresenca(item.idEvento, item.possuiPresenca, item.idPresenca)} /></td>
                            </tr>

                        ))}
=======
        {listaEventos.map((item) => (
              <tr className="item_evento">
                            <td data-cell="Nome" >{item.nomeEvento}</td>
                            <td data-cell="Data">{format(item.dataEvento, "dd/MM/yy")}</td>      
                            <td data-cell="Tipo_Evento">{item.tiposEvento.tituloTipoEvento}</td>
                            <td data-cell="Descricao"><img src={Detalhes} alt="Imagem de descricao" /></td>
                            <td data-cell="Comentar"><img src={Comentario} alt="Imagem de um comentario" /></td>
                            <td data-cell="Botao"><Toggle /></td>
                        </tr>

        )  )}
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
                    </tbody>

                </div>
            </section>
            <Footer />
<<<<<<< HEAD

            {/* Renderização condicional do modal */}
            {modalAberto && (
                <Modal titulo={tipoModal === "descricaoEvento" ? "Descricao do evento" : "Comentario"}
                    tipoModel={tipoModal}

                    idEvento={dadosModal.idEvento}

                    descricao={dadosModal.descricao}

                    fecharModal={fecharModal}
                />
            )}
=======
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
        </>
    )
}

<<<<<<< HEAD

=======
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
export default ListagemEventos;