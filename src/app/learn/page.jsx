import styles from "./learn.module.css";
import Link from "next/link";

export default function Learn() {
  return (
    <main className={styles.main}>
      <h1>Most popular courses</h1>
      <section className={styles.section}>
        <div>
          <img src="/logo.jpg"/>
          <div>
            <h2>Graphic Design</h2>
            <p>Develop your visual communication skills by learning composition, typography, color theory, branding, and design principles to create impactful visual content.</p>
            <Link href="/login" className="btn">Enroll course</Link>
          </div>
        </div>
        <div>
          <img src="/logo.jpg"/>
          <div>
            <h2>UX/UI Design</h2>
            <p>Learn how to design intuitive, accessible, and engaging digital experiences, from user research and wireframing to interactive prototypes and polished interfaces.</p>
            <Link href="/login" className="btn">Enroll course</Link>
          </div>
        </div>
      </section>

      <h1>Begin here</h1>
      <section className={styles.section}>
        <div>
          <img src="/logo.jpg"/>
          <div>
            <h2>Web Design</h2>
            <p>Learn the fundamentals of designing modern websites, from layout and visual hierarchy to responsive design, typography, and creating engaging user interfaces.</p>
            <Link href="/login" className="btn">Enroll course</Link>
          </div>
        </div>
        <div>
          <img src="/logo.jpg"/>
          <div>
            <h2>Digital Marketing</h2>
            <p>Discover the fundamentals of digital marketing and learn how to build an online presence through content, social media, branding, audience targeting, and effective marketing strategies.</p>
            <Link href="/login" className="btn">Enroll course</Link>
          </div>
        </div>
        <div>
          <img src="/logo.jpg"/>
          <div>
            <h2>Front-End Development</h2>
            <p>Learn the fundamentals of building interactive websites with HTML, CSS, and JavaScript while developing responsive layouts and bringing modern web designs to life.</p>
            <Link href="/login" className="btn">Enroll course</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
