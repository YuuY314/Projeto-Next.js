import Link from 'next/link';
import styles from "./not-found.module.css";
import NotFoundBuddy from "../components/not-found-buddy";
 
export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1>Erro 404</h1>
      <p>Conteúdo não encontrado!</p>
      <NotFoundBuddy className="face"/>
      <Link href="/" className={styles.back}>Voltar</Link>
    </main>
  )
}