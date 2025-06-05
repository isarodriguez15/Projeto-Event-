<<<<<<< HEAD
import ImgDeletar from "../../assets/img/Excluir.png"
import { useEffect, useState } from "react";
import "./Modal.css"
import api from "../../Services/services"

const Modal = (props) => {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");
  const [usuarioId, setUsuarioId] = useState("DFF8AF25-A4E7-4CBE-A6A8-AE0A377801E7");
}

  async function listarComentarios () {
        const resposta = await api.get(`ComentariosEcentos/ListarSomenteExibe?id=${props.idEvento}`);
  
    try {

      setComentarios(resposta.data);
      console.log(resposta.data);
    } catch (error) {
         console.log(error);
    }

    useEffect(() => {
        listarComentarios();
    }, [comentarios])

    async function cadastrarComentario(comentario) {
      try {
        await api.post("ComentariosEventos",{idUsuario:usuarioId, idEvento:props.idEvento, descricao:comentario})
      } catch (error) {
        console.error(error);
      }
    }

    async function deletarComentario(idComentario) {
      try {
        await api.delete(`ComentariosEventos/${idComentario}`);
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <>
        <div className="model-overlay" onClick={props.fecharModal}
        ></div>
        <div className="model">
          <h1>{props.titulo}</h1>
          <div className="model_conteudo">
            {props.tipoModel === "descricaoEvento" ? (
              <p>{props.descricao}</p>
            ) : (
              <>
                {comentarios.map((item) => (
                  <div key={item.idComentarioEvento}>
                    <strong>{item.usuario.nomeUsuario}
                    </strong>
                    <img src={ImgDeletar}
                      alt="Deletar" onClick={() => deletarComentario(item.idComentarioEvento)}/>
                    <p>{item.descricao}</p>
                    <hr />
                  </div>
                ))}
                <div>
                  <input type="text"
                    placeholder="Escreva seu comentário..." 
                    onChange={(e) =>setNovoComentario(e.target.value)}/>
                  <button onClick={() => cadastrarComentario()}>
                    Cadastrar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {/* <p>Modal</p> */}
      </>
    )
  }

  export default Modal;
=======
import React from 'react'

const Modal = () => {
  return (
    <div>
      Modal
    </div>
  )
}

export default Modal
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
