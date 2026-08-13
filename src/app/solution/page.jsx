import styles from "./solution.module.css";
import Link from "next/link";

export default function Solution() {
  return (
    <main className={styles.main}>
      <div className={styles.solution_title}>
        <h1>Everything you need to build a website</h1>
        <h2>Create. Customize. Launch.</h2>
        <Link href="/login" className="btn">Start building</Link>
      </div>
      <section>
        <h1>Built for your needs</h1>
        <p>Individuals</p>
        <p>Small businesses</p>
        <p>Creators</p>
        <p>Teams</p>
      </section>
      <section>
        <h1>Solutions for every challenge</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Problem</th>
              <th>Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hard to start</td>
              <td>Templates</td>
            </tr>
            <tr>
              <td>Outdated design</td>
              <td>Modern layouts</td>
            </tr>
            <tr>
              <td>No domain</td>
              <td>Custom domains</td>
            </tr>
            <tr>
              <td>No analytics</td>
              <td>Built-in analytics</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h1>Everything you need</h1>
        <p>Builder</p>
        <p>Templates</p>
        <p>SEO</p>
        <p>Analytics</p>
        <p>Domains</p>
        <p>Teams</p>
      </section>
      <div className={styles.solution_title}>
        <h1>From ideia to website</h1>
        <div>
          <h2>01. Choose</h2>
          <h2>02. Customize</h2>
          <h2>03. Publish</h2>
        </div>
        <h2>Your next website starts here.</h2>
        <Link href="/login" className="btn">Start building</Link>
      </div>
    </main>
  );
}
