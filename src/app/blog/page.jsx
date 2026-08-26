import CardPostBlog from "@/components/CardPostBlog";
import styles from "./blog.module.css"

export default function Blog(){
    const listaPosts = [
        {
            id: 1,
            imagem: "post1.png",
            titulo: "As novas tendências da tecnologia em 2026",
            descricao: "Descubra as principais tendências tecnológicas que estão transformando a forma como trabalhamos, estudamos e nos comunicamos.",
            data: "26/08/2026"
        },
        {
            id: 2,
            imagem: "post2.png",
            titulo: "Inteligência Artificial no dia a dia",
            descricao: "A inteligência artificial está cada vez mais presente em nossas atividades. Veja como essa tecnologia pode facilitar tarefas cotidianas.",
            data: "24/08/2026"
        },
        {
            id: 3,
            imagem: "post3.png",
            titulo: "5 dicas para melhorar sua produtividade",
            descricao: "Pequenas mudanças na rotina podem fazer uma grande diferença. Confira cinco estratégias para organizar melhor seu tempo.",
            data: "21/08/2026"
        },
        {
            id: 4,
            imagem: "post4.png",
            titulo: "O futuro do desenvolvimento de software",
            descricao: "Novas ferramentas e metodologias estão mudando a maneira como aplicações são desenvolvidas. Conheça algumas das principais novidades.",
            data: "19/08/2026"
        },
        {
            id: 5,
            imagem: "post5.png",
            titulo: "Por que aprender programação?",
            descricao: "Aprender a programar vai muito além de criar aplicativos. Entenda como a programação pode desenvolver o raciocínio lógico e abrir novas oportunidades.",
            data: "16/08/2026"
        },
        {
            id: 6,
            imagem: "post6.png",
            titulo: "Tecnologia e educação: uma nova realidade",
            descricao: "Ferramentas digitais estão transformando as salas de aula e criando novas possibilidades para alunos e professores.",
            data: "13/08/2026"
        },
        {
            id: 7,
            imagem: "post7.png",
            titulo: "Como escolher sua primeira linguagem de programação",
            descricao: "JavaScript, Python, Java ou C#? Conheça as características de algumas das linguagens mais populares para quem está começando.",
            data: "10/08/2026"
        },
        {
            id: 8,
            imagem: "post8.png",
            titulo: "A importância da segurança digital",
            descricao: "Com cada vez mais informações circulando na internet, proteger seus dados se tornou essencial. Veja alguns cuidados importantes.",
            data: "07/08/2026"
        },
        {
            id: 9,
            imagem: "post9.png",
            titulo: "O crescimento das aplicações web",
            descricao: "Aplicações acessadas diretamente pelo navegador continuam ganhando espaço. Entenda por que o desenvolvimento web é tão importante.",
            data: "04/08/2026"
        },
        {
            id: 10,
            imagem: "post10.png",
            titulo: "Projetos pessoais: aprenda colocando em prática",
            descricao: "Criar seus próprios projetos é uma das melhores formas de transformar conhecimento teórico em experiência prática.",
            data: "01/08/2026"
        }
    ];

    return(
        <>
            <div className={styles.main_blog}>
                <h1>Postagens</h1>
                <div className={styles.card_container}>
                    {listaPosts.map(post => {
                        return <CardPostBlog key={post.id} imagem={post.imagem} titulo={post.titulo} descricao={post.descricao} data={post.data}></CardPostBlog>
                    })}
                </div>
            </div>
        </>
    )
}