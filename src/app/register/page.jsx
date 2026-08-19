import "./register.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  return (
    <main className="main">
        <form className="form" action="" method="POST">
            <h1>Register</h1>
            <div className="input-group">
                <label htmlFor="name">Full name</label>
                <input type="text" name="name" id="name" placeholder="Your name" required></input>
            </div>
            <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="name@email.com" required></input>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="******" required></input>
            </div>
            <div className="input-group">
                <label htmlFor="confirm-password">Confirm password</label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="******" required></input>
            </div>
             <div className="input-group">
                <label htmlFor="profile-picture">Profile picture (Optional)</label>
                <input type="file" name="profile-picture" id="profile-picture"></input>
                <button type="button" id="clear-profile-picture">Remove picture</button>
            </div>
            <Link href="/login" className="btn"><FontAwesomeIcon icon={faPlus}/>Register</Link>
        </form>
    </main>
  );
}
