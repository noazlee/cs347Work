// Import of the file with styles
import s from "./Bar.module.css";

// Component creation
const Bar = () => (
  <div className={s.container}>
    <a href="###" className={s.logo}>
      Logo
    </a>
    <ul className={s.list}>
      <li className={s.item}>
        <a href="###" className={s.link}>
          Home
        </a>
      </li>
      <li className={s.item}>
        <a href="###" className={s.link}>
          About
        </a>
      </li>
      <li className={s.item}>
        <a href="###" className={s.link}>
          Contact
        </a>
      </li>
    </ul>
  </div>
);

// Component export
export default Bar;
