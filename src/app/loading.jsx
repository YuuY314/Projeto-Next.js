import styles from "./loading.module.css";
import LoadingBuddy from "../components/loading-buddy";

export default function Loading(){
    return (
        <main className={styles.main}>
            <LoadingBuddy/>
            <h2>Carregando...</h2>
        </main>
    )
}