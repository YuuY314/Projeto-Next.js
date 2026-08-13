import styles from "./product.module.css";

export default function Product() {
  return (
    <main className={styles.main}>
      <div className={styles.product_title}>
        <h1>Our portfolio</h1>
      </div>
      <section className={styles.product_card}>
        <img src="/logo.jpg"/>
        <div>
          <h1>Sample Title</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nesciunt aperiam nostrum maxime ipsa cum, vero, veniam, beatae fugiat culpa accusamus soluta aut est et. Blanditiis incidunt aliquid enim quaerat.</p>
        </div>
      </section>
      <section className={styles.product_card}>
        <div>
          <h1>Sample Title</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nesciunt aperiam nostrum maxime ipsa cum, vero, veniam, beatae fugiat culpa accusamus soluta aut est et. Blanditiis incidunt aliquid enim quaerat.</p>
        </div>
        <img src="/logo.jpg"/>
      </section>
    </main>
  );
}
