import style from "./main-content.module.scss";
import restaurant from "../../public/assets/restaurant360.jpg";

const MainContent = () => {
  return (
    <main className={style.main}>
      <div className={style.wrapperContent}>
        <div className={style.cardInfo}>
          <div className={style.mainCard}>
            <h1 className={style.title}>Ресторан 360</h1>
            <p>
              Ресторан «360» — это уникальное гастрономическое пространство,
              расположенное на вершине небоскрёба с панорамным видом на город.
              Заведение получило своё название благодаря вращающемуся залу,
              который позволяет за один вечер насладиться всеми 360 градусами
              городского пейзажа.
            </p>
            <p>
              Главная особенность ресторана — сочетание высокой кухни и
              захватывающих видов. Это идеальное место для романтического ужина,
              деловой встречи или празднования особого события. В меню
              представлены блюда европейской и авторской кухни, созданные из
              свежих локальных ингредиентов.
            </p>

            <h3 className={style.subTitle}>
              Когда стоит посетить ресторан «360»
            </h3>
            <p>Это место подходит для множества ситуаций:</p>
            <ul className={style.ul}>
              <li className={style.li}>
                Когда хочешь впечатлить партнёра на первом свидании и сделать
                вечер незабываемым. 360.
              </li>
              <li className={style.li}>
                Когда празднуешь день рождения и ищешь место, где всё будет на
                высоте — и сервис, и атмосфера, и буквально уровень. 360.
              </li>
              <li className={style.li}>
                Когда хочется поужинать под облаками, не выезжая за пределы
                города. 360.
              </li>
            </ul>
            <p className={style.pFirstPhoto}>
              У нас нужно делать снимки, Первый снимок — закат через панорамные
              окна ресторана, второй — подача фирменного блюда от шеф-повара.
              Интерьер оформлен в минималистичном стиле с акцентами на
              натуральные материалы и мягкое освещение. Ресторан «360» — это не
              просто еда, это целый опыт.
            </p>
          </div>
          <div className={style.footerCard}>
            <span className={style.publishSpan}>публикация 360:</span>
            <span>18/05/2025</span>
          </div>
        </div>

        <section className={style.wrapperRunner}>
          <div className={style.marquee}>
            {Array.from({ length: 14 }).map((_, j) => (
              <span key={j} className={style.runnerVertical}>
                360
              </span>
            ))}
          </div>
        </section>

        <div className={style.wrapperImg}>
          <img className={style.photoRestaurant} src={restaurant} alt="cat" />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
