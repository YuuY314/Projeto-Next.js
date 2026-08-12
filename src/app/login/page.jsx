import "./login.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <main>
        <form className="form" action="" method="POST">
            <h1>Login</h1>
            <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="name@email.com"></input>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="******"></input>
            </div>
            <Link href="/" className="btn"><FontAwesomeIcon icon={faRightToBracket}/>Enter</Link>
        </form>
    </main>
  );
}
