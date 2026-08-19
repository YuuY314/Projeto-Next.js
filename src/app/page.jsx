import BannerCTA from "@/components/bannerCTA";
import Link from "next/link";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  await sleep(3000);

  return (
    <main>
      <div className="hero">
        <div className="hero-content">
          <h1>Convert More Leads</h1>

          <p>
            Create custom landing pages with Unbounce that convert more
            visitors than any website — no coding required.
          </p>

          <Link href="/register" className="user-btn" id="landing-btn">
            Start My Free Trial
          </Link>
        </div>

        <img src="/landing.png" alt="Landing page illustration" />
      </div>

      <BannerCTA />
    </main>
  );
}