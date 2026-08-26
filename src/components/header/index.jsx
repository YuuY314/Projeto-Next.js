import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return (
        <header>
          <nav>
            <Link href="/">
              <div className="header-logo">
                <img src="/logo.jpg"/>
                <h1>unbounce</h1>
              </div>
            </Link>
            <div className="link">
              <Link href="/product">Product</Link>
              <FontAwesomeIcon icon={faChevronDown} className="header-icon" />
            </div>
            <div className="link">
              <Link href="/solution">Solution</Link>
              <FontAwesomeIcon icon={faChevronDown} className="header-icon" />
            </div>
            <Link href="/pricing">Pricing</Link>
            <div className="link">
              <Link href="/learn">Learn</Link>
              <FontAwesomeIcon icon={faChevronDown} className="header-icon" />
            </div>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </nav>
          <div className="user">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            <Link href="/login" className="user-btn" id="login">Log in</Link>
            <Link href="/register" className="user-btn" id="start">Start My Free Trial</Link>
          </div>
        </header>
    )
}