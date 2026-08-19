'use client'
 
import styles from "./error.module.css" // vi esse .module por fora e prefiro usar por ter mais controle do css individual de cada arquivo
import ErrorBuddy from "../components/error-buddy"
 
export default function Error({ retry }) {
  return (
    <main className={styles.main}>
      <ErrorBuddy/>
      <h2>Algo errado aconteceu!</h2>
      <button onClick={() => retry()} className={styles.btn}>
        Tentar novamente
      </button>
    </main>
  )
}