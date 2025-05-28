import { useNavigate } from "react-router";
import style from "./header.module.scss";
import logo from "../../public/assets/logo360.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img className={style.logo} src={logo} alt="Ресторан 360" />
        </div>

        <nav className={style.navigate}>
          <ul className={style.ul}>
            <li className={style.li}>
              <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                Главная
              </span>
            </li>
            <li className={style.li}>
              <span
                onClick={() => navigate("/about")}
                style={{ cursor: "pointer" }}
              >
                О ресторане
              </span>
            </li>
            <li className={style.li}>
              <span
                onClick={() => navigate("/menu")}
                style={{ cursor: "pointer" }}
              >
                Меню
              </span>
            </li>
            <li className={style.li}>
              <span
                onClick={() => navigate("/gallery")}
                style={{ cursor: "pointer" }}
              >
                Галерея
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
