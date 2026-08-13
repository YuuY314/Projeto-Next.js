import styles from "./pricing.module.css";
import Link from "next/link";

export default function Pricing() {
  return (
    <main className={styles.main}>
      <div className={styles.pricing_title}>
        <h1>Plans and Pricing</h1>
        <p>Receive unlimited credits when you pay yearly, and save on your plan</p>
      </div>
      <div className={styles.pricing_card_container}>
        <div className={styles.pricing_card}>
          <div>
            <h2>Free</h2>
            <h1>$ 0</h1>
            <p>Per user/month, billed monthly</p>
          </div>
          <div>
            <p>For personal projects and experiments</p>
            <ul>
              <li>✓ 1 website</li>
              <li>✓ Basic templates</li>
              <li>✓ Responsive design</li>
              <li>✓ Basic customization</li>
              <li>✓ Free subdomain</li>
              <li>✓ SSL certificate</li>
            </ul>
          </div>
          <Link href="/login" className="btn">Get started for Free</Link>
        </div>

        <div className={styles.pricing_card}>
          <div>
            <h2>Basic</h2>
            <h1>$ 9.99</h1>
            <p>Per user/month, billed monthly</p>
          </div>
          <div>
            <p>Great for small businesses and professionals</p>
            <ul>
              <li>✓ Everything in Free</li>
              <li>✓ Up to 5 websites</li>
              <li>✓ Custom domain</li>
              <li>✓ Advanced templates</li>
              <li>✓ Remove platform branding</li>
              <li>✓ Contact forms</li>
              <li>✓ Basic analytics</li>
              <li>✓ SEO tools</li>
            </ul>
          </div>
          <Link href="/login" className="btn">Get started with Basic</Link>
        </div>

        <div className={styles.pricing_card}>
          <div>
            <h2>Premium</h2>
            <h1>$ 19.99</h1>
            <p>Per user/month, billed monthly</p>
          </div>
          <div>
            <p>For agencies, teams and growing businesses</p>
            <ul>
              <li>✓ Everything in Basic</li>
              <li>✓ Unlimited websites</li>
              <li>✓ Advanced customization</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Custom CSS & JavaScript</li>
              <li>✓ Team collaboration</li>
              <li>✓ Priority support</li>
              <li>✓ Advanced SEO tools</li>
            </ul>
          </div>
          <Link href="/login" className="btn">Get started with Premium</Link>
        </div>
      </div>
    </main>
  );
}
