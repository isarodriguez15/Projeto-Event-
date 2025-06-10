import { useEffect, useState } from "react";

import api from "../../Services/services";
import Swal from "sweetalert2";

import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

import Banner from "../../assets/img/TipoDeEvento.svg";

const CadastrarTipoEvento = () => {
  const [tipoEvento, setTipoEvento] = useState("");
  const [listaTipoEventos, setListaTipoEventos] = useState([]);

  // Alerta customizado
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
      },
    });

    Toast.fire({
      icon: icone,
      title: mensagem,
    });
  }

  // Cadastrar tipo evento
  async function cadastrarTipoEvento(e) {
    e.preventDefault();
    if (tipoEvento.trim() !== "") {
      try {
        await api.post("TiposEventos", { TituloTipoEvento: tipoEvento });
        alertar("success", "Cadastro realizado com sucesso!");
        setTipoEvento("");
        listarTipoEventos();
      } catch (error) {
        alertar("error", "Erro! Entre em contato com o suporte!");
      }
    } else {
      alertar("warning", "Preencha o campo!");
    }
  }

  // Listar tipos de evento
  async function listarTipoEventos() {
    try {
      const resposta = await api.get("TiposEventos");
      setListaTipoEventos(resposta.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Editar tipo evento
  async function editarTipoEvento(tipo) {
    const { value: novoTipoEvento } = await Swal.fire({
      title: "Modifique seu Tipo de Evento",
      input: "text",
      inputLabel: "Novo Tipo Evento",
      inputValue: tipo.tituloTipoEvento,
      showCancelButton: true,
      confirmButtonColor: "#B51D44",
      cancelButtonColor: "#000000",
      inputValidator: (value) => {
        if (!value) return "O campo não pode estar vazio!";
      },
    });

    if (novoTipoEvento) {
      try {
        await api.put(`TiposEventos/${tipo.idTipoEvento}`, {
          TituloTipoEvento: novoTipoEvento,
        });
        alertar("success", "Tipo Evento Modificado!");
        listarTipoEventos();
      } catch (error) {
        alertar("error", "Erro ao editar o tipo de evento!");
      }
    }
  }

  // Deletar tipo evento
  async function deletarTipoEvento(id) {
    Swal.fire({
      title: "Tem certeza?",
      text: "Essa ação não poderá ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#B51D44",
      cancelButtonColor: "#000000",
      confirmButtonText: "Sim, apagar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await api.delete(`TiposEventos/${id.idTipoEvento}`);
          alertar("success", "Tipo Evento excluído!");
          listarTipoEventos();
        } catch (error) {
          alertar("error", "Erro ao excluir!");
        }
      }
    });
  }

  // Carregar lista na montagem
  useEffect(() => {
    listarTipoEventos();
  }, []);

  return (
    <>
      <Header user="Administrador" botao_logar="none" />
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
          banner_img={Banner}
          funcCadastro={cadastrarTipoEvento}
          valorInput={tipoEvento}
          setValorInput={setTipoEvento}
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
      <Footer />
    </>
  );
};

export default CadastrarTipoEvento;
