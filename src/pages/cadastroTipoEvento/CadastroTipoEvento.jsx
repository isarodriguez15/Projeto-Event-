<<<<<<< HEAD
import { useEffect, useState } from "react";
import api from "../../Services/services";
import Swal from 'sweetalert2'



import Cadastro from "../../components/cadastro/Cadastro"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Lista from "../../components/lista/Lista"
import Banner from "../../assets/img/banner.png"

const CadastrarTipoEvento = () => {
    const [tipoevento, setTipoEvento] = useState("");
    const [listaTipoEvento, setListaTipoEvento] = useState([])
    // const [deletaTipoEvento, setDeletaTipoEvento] = useState();

=======
import { useState, useEffect } from "react";
import api from "../../services/Services";

//Importar o seu SweetAlert
import Swal from 'sweetalert2';

import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Imagem from "../../assets/img/TipoDeEvento.svg"
import Lista from "../../components/lista/Lista";

const CadastroTipoEvento = () => {
    const [tiposEventos, setTiposEventos] = useState("");
    const [listaTipoEventos, setListaTipoEventos] = useState([]);
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

<<<<<<< HEAD


    async function cadastrarTipoEvento(e) {
        e.preventDefault();
        if (tipoevento.trim() != "") {

            // try => tentar
            // catch => lança a exceção
            try {
                // cadastrar um genero: post
                await api.post("tiposEventos", { tituloTipoEvento: tipoevento });
                alertar("success", "Cadastro realizado com sucesso!")
                setTipoEvento("")
            } catch (error) {
                alertar("error", "Erro! entre em contato com o suporte")
            }
        } else {
            alertar("error", "Preencha o campo vazio")
=======
    async function cadastrarTipoEvento(e) {
        e.preventDefault();

        if (tiposEventos.trim() != "") {
            try {
                await api.post("TiposEventos", { TituloTipoEvento: tiposEventos });
                alertar("success", "Cadastro realizado com sucesso");
                setTiposEventos("");
            } catch (error) {
                console.log(error);
                alertar("error", "Erro! Entre em contato com o suporte!");
            }
        } else {
            alertar("warning", "Preencha o campo!")
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
        }

    }

    async function listarTipoEvento() {
        try {
<<<<<<< HEAD
            //await => Aguarda uma resp da solicitação
            const resposta = await api.get("tiposEventos");

            // console.log(resposta);

            setListaTipoEvento(resposta.data);
            console.log(resposta.data);

=======
            const resposta = await api.get("TiposEventos");

            setListaTipoEventos(resposta.data);
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
        } catch (error) {
            console.log(error);
        }
    }

<<<<<<< HEAD
    async function removerTipoEvento(id) {
        try {
            const excluirTipoEvento = await api.delete(`tiposEventos/${id.idTipoEvento}`)
            setListaTipoEvento(excluirTipoEvento.data)

        }
        catch (error) {
            console.log(error)
        }
    }

    async function editarTipoEvento(tipoevento) {
        const { value: novoTipoEvento } = await Swal.fire({
            title: "Modifique seu Tipo de Evento",
            input: "text",
            inputLabel: "Novo Tipo Evento",
            inputValue: tipoevento.tituloTipoEvento,
=======
    async function editarTipoEvento(tiposEventos) {
        const { value: novoTipoEvento } = await Swal.fire({
            title: "Modifique seu Tipo Evento",
            input: "text",
            confirmButtonColor: '#B51D44',
            cancelButtonColor: '#000000',
            inputLabel: "Novo Tipo Evento",
            inputValue: tiposEventos.tituloTipoEvento,
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo não pode estar vazio!";
                }
            }
        });
<<<<<<< HEAD

        if (novoTipoEvento) {
            try {
                api.put(`tiposEventos/${tipoevento.idTipoEvento}`, { tituloTipoEvento: novoTipoEvento })
                Swal.fire(`O Tipo novo é ${novoTipoEvento}`);
                listaTipoEvento();
            } catch (error) {

            }
        }
    }


    useEffect(() => {
        listarTipoEvento();
    }, [listaTipoEvento])



    return (
        <>
            <Header nomeUsu="Administrador" />
            <Cadastro
                titulo="Cadastrar Tipo de Evento"
                visibilidade="none"
                imagem={Banner}
                place="Titulo"

                funcCadastro={cadastrarTipoEvento}

                valorInput={tipoevento}
                setValorInput={setTipoEvento}

                data= "none"
                desc="none"
                Inst="none"
            />
            <Lista
                titulo="Lista Tipo de evento"
                tdnome="Nome Evento"
                tituloEvento="Titulo"
                tipoLista="tiposEventos"
                lista={listaTipoEvento}
                visible="none"

                deletar={removerTipoEvento}
                funcEditar={editarTipoEvento}
            />
=======
        if (novoTipoEvento) {
            try {
                await api.put(`tiposEventos/${tiposEventos.idTipoEvento}`,
                    { TituloTipoEvento: novoTipoEvento });
                alertar("success", "Tipo Evento Modificado!")
            } catch (error) {

            }
            Swal.fire(`Seu novo Tipo Evento: ${novoTipoEvento}`);
        }
    }

    async function deletarTipoEvento(id) {
        Swal.fire({
            title: 'Tem Certeza?',
            text: "Essa ação não poderá ser desfeita!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#B51D44',
            cancelButtonColor: '#000000',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await api.delete(`tiposEventos/${id.idTipoEvento}`);
                alertar("success", "Tipo Evento Excluido!");
            }
        }).catch(error => {
            console.log(error);
            alertar("error", "Erro ao Excluir!");
        })
    }

    useEffect(() => {
        listarTipoEvento();
    }, [listaTipoEventos]);

    return (
        <>
            <Header
                user="Administrador"
                botao_logar="none"
            />
            <main>
                <Cadastro
                    titulo_cadastro="Cadastro de Tipo Eventos"
                    campo_placeholder="Titulo"

                    visibilidade="none"
                    visibilidade_data="none"
                    visibilidade_tp_evento="none"
                    visibilidade_instituicao="none"
                    visibilidade_descricao="none"

                    botao="Cadastrar"
                    banner_img={Imagem}

                    funcCadastro={cadastrarTipoEvento}
                    valorInput={tiposEventos}
                    setValorInput={setTiposEventos}
                />

                <Lista
                    titulo_lista="Tipo Eventos"
                    titulo="Titulo"
                    visibilidade="none"

                    lista={listaTipoEventos}
                    tipoLista="TiposEventos"

                    funcEditar={editarTipoEvento}
                    funcDeletar={deletarTipoEvento}
                    visibilidade2="none"
                />
            </main>
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
            <Footer />
        </>
    )
}

<<<<<<< HEAD

export default CadastrarTipoEvento;
=======
export default CadastroTipoEvento;
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
