import style from "./header.module.scss";
import logo from "../../public/assets/logo360.svg";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <a href="#">
          <img className={style.logo} src={logo} alt="" />
        </a>

        <nav className={style.navigate}>
          <ul className={style.ul}>
            <li className={style.li}>
              {" "}
              <a href="#">О ресторане</a>
            </li>
            <li className={style.li}>
              {" "}
              <a href="#">Меню</a>{" "}
            </li>
            <li className={style.li}>
              {" "}
              <a href="#">Галерея</a>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
