import Link from "next/link";
import "./footer.css"

export default function Header(){
    return (
        <footer>
          <div>
            <Link href="/"><h1>unbounce</h1></Link>
          </div>
          <p>unbounce © 2026</p>
          <div>
            <Link href="https://github.com/YuuY314" target="_blank"><h3>Github</h3></Link>
          </div>
        </footer>
    )
}