"use client";

import { useState } from "react";

export default function Contador(){
    const [ contador, setContador ] = useState(0);
    const [ mensagem, setMensagem ] = useState("");

    function addContador(){
        if(contador < 100){
            setContador(contador + 1);
            setMensagem("");
        } else {
            setMensagem("Chegou ao limite");
        }
    }

    function removeContador(){
        if(contador > -5){
            setContador(contador - 1);
            setMensagem("");
        } else {
            setMensagem("Chegou ao limite");
        }
    }

    return (
        <main style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center"}}>
            <h1>Desenvolvendo um contador</h1>
            <p style={{fontSize: "2rem"}}> { contador } </p>
            <div style={{display: "flex", gap: "10px"}}>
                <button type="button" onClick={addContador} style={{padding: "10px"}}> + </button>
                <button type="button" onClick={removeContador} style={{padding: "10px"}}> - </button>
            </div>
            <p> {mensagem} </p>
        </main>
    )
}