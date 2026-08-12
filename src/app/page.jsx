import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Convert More Leads</h1>
        <p>Create custom landing pages with Unbounce that convert more visitors than any website-no coding required</p>
        <Link href="/register" className="user-btn" id="landing-btn">Start My Free Trial</Link>
      </div>
      <img src="/landing.png"/>
    </main>
  );
}
