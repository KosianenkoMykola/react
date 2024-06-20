import { useState } from "react";
import logo from "../../../public/vite.svg";
import css from "../Header/Header.module.css";

export default function Header() {
    const [now, setNow] = useState(new Date())
    setInterval(() => setNow (new Date()), 1000)

    return (
        <header className={css.headerContaier}>
            <img src={logo} alt="Logo" />
            <h3>React Project</h3> 
        <span>Time now: {now.toLocaleTimeString()}</span>
      </header>
    );
}