import styles from "./pricing.module.css";

export default function Pricing() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Plans and Pricing</h1>
        <p>Receive unlimited credits when you pay yearly, and save on your plan</p>
      </div>
      <div className="">
        <div className={styles.pricing_card}>
          <div>
            <h2>Free</h2>
            <h1>$ 0</h1>
            <p>Per user/month, billed monthly</p>
          </div>
          <div>
            <p>For your hobby projects</p>
            <ul>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
