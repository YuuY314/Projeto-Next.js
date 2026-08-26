import styles from "./cardProduto.module.css"

export default function CardProduto({titulo, descricao, imagem, preco}){
    return(
        <div className={styles.card_wrap}>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <img src={imagem} alt="" />
            <p>Preço: <strong>{preco}</strong></p>
        </div>
    )
}