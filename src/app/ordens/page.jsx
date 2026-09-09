"use client";

import { useState } from "react";
import "./ordens.css";

export default function Ordens(){
    const [ ordens, setOrdens ] = useState([]);

    const [ cliente, setCliente ] = useState("");
    const [ equipamento, setEquipamento ] = useState("");
    const [ descricao, setDescricao ] = useState("");

    const [ erro, setErro ] = useState("");

    function cadastrarOrdem(event){
        event.preventDefault();

        if(cliente.trim() === "" || equipamento.trim() === "" || descricao.trim() === ""){
            setErro("Preencha todos os campos!");
            return;
        }

        const novaOrdem = {
            id: Date.now(),
            cliente: cliente.trim(),
            equipamento: equipamento.trim(),
            descricao: descricao.trim(),
            status: "Aberta"
        };

        setOrdens([...ordens, novaOrdem]);
        console.log(ordens);

        setCliente("");
        setEquipamento("");
        setDescricao("");
        setErro("");
    }

    function fecharOrdem(id){
        setOrdens(
            ordens.map((ordem) => {
                if(ordem.id === id){
                    return {...ordem, status: "Fechado"}
                } else {
                    return ordem
                }
            })
        )
    }

    return (
        <main style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px"}}>
            <h1>Ordens de serviço</h1>
            <form onSubmit={cadastrarOrdem} style={{width: "500px", backgroundColor: "white", padding: "30px", display: "flex", flexDirection: "column", gap: "10px"}}>
                <label htmlFor="cliente">Cliente: </label>
                <input 
                    type="text"
                    name="cliente"
                    id="cliente"
                    placeholder="Nome do cliente"
                    value={cliente}
                    onChange={(event) => setCliente(event.target.value)}
                />
                <label htmlFor="equipamento">Equipamento: </label>
                <input 
                    type="text"
                    name="equipamento"
                    id="equipamento"
                    placeholder="Ex.: Notebook"
                    value={equipamento}
                    onChange={(event) => setEquipamento(event.target.value)}
                />
                <label htmlFor="descricao">Descrição: </label>
                <textarea
                    id="descricao"
                    placeholder="Descreva o problema"
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                    minLength={15}
                    maxLength={100}
                />
                {erro != "" && <p>{erro}</p>}

                <button type="submit" style={{padding: "10px", backgroundColor: "black", color: "white"}}>Cadastrar Ordem</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Equipamento</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordens.map((ordem) => (
                            <tr key={ordem.id}>
                                <td>{ordem.id}</td>
                                <td>{ordem.cliente}</td>
                                <td>{ordem.equipamento}</td>
                                <td>{ordem.descricao}</td>
                                <td>{ordem.status}</td>
                                <td><button onClick={() => fecharOrdem(ordem.id)} style={{width: "100%", height: "50px", backgroundColor: "black", color: "white"}}>Fechar pedido</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    )
}