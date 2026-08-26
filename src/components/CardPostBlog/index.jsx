import styles from "./cardPostBlog.module.css"

export default function CardProduto({imagem, titulo, descricao, data}){
    return(
        <div className={styles.card_wrap}>
            <img src={imagem} alt="" />
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <p>{data}</p>
        </div>
    )
}