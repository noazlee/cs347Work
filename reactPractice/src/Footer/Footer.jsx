// Import of the file with styles
import s from "./Footer.module.css";

// Component creation
const Footer = () => (
  <div className={s.container}>
    <p className={s.text}> &copy; All rights reserved </p>
    <a href="###" className={s.link}>
      Terms & conditions
    </a>
  </div>
);

// Component export
export default Footer;
