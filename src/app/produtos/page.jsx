import CardProduto from "@/components/CardProduto";
import styles from "./produtos.module.css"

export default function Produtos(){
    const listaProdutos = [
        {
            id: 1,
            titulo: "Notebook IdeaPad Gaming",
            descricao: "Um notebook gamer para seus melhores jogos",
            imagem: "ideapad.png",
            preco: 3999.00
        },
        {
            id: 2,
            titulo: "Monitor",
            descricao: "Acompanha HDR e IPS",
            imagem: "monitor.png",
            preco: 987.20
        },
        {
            id: 3,
            titulo: "Mouse MX LogiTech",
            descricao: "O melhor que a tecnologia tem a oferecer",
            imagem: "mouse.png",
            preco: 678.83
        }
    ];

    return(
        <>
            <h1>Listagem de produtos</h1>
            <div className={styles.card_container}>
                {listaProdutos.map(produto => {
                    return <CardProduto key={produto.id} titulo={produto.titulo} descricao={produto.descricao} imagem={produto.imagem} preco={produto.preco}></CardProduto>
                })}
            </div>
            
        </>
    )
}