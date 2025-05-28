import styles from "./Pages.module.scss";
import { useCart } from "../context/CartContext";

const Menu = () => {
  const { addItem } = useCart();

  const handleAddToCart = (name: string, price: number) => {
    addItem({
      id: `${name}-${Date.now()}`,
      name,
      price,
    });
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Меню</h1>
      <div className={styles.content}>
        <div className={styles.menuSection}>
          <h2>Холодные закуски</h2>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <h3>Тартар из тунца</h3>
              <p>Свежий тунец с авокадо, каперсами и цитрусовой заправкой</p>
              <div className={styles.menuItemFooter}>
                <span>1800 ₽</span>
                <button
                  onClick={() => handleAddToCart("Тартар из тунца", 1800)}
                >
                  В корзину
                </button>
              </div>
            </div>
            <div className={styles.menuItem}>
              <h3>Карпаччо из говядины</h3>
              <p>Тонко нарезанная мраморная говядина с рукколой и пармезаном</p>
              <div className={styles.menuItemFooter}>
                <span>1600 ₽</span>
                <button
                  onClick={() => handleAddToCart("Карпаччо из говядины", 1600)}
                >
                  В корзину
                </button>
              </div>
            </div>
            <div className={styles.menuItem}>
              <h3>Устрицы Фин де Клер</h3>
              <p>Свежие французские устрицы с лимоном и соусом мигронет</p>
              <div className={styles.menuItemFooter}>
                <span>450 ₽/шт</span>
                <button
                  onClick={() => handleAddToCart("Устрицы Фин де Клер", 450)}
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.menuSection}>
          <h2>Основные блюда</h2>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <h3>Филе миньон</h3>
              <p>Нежное филе говядины с соусом из черного перца и трюфелей</p>
              <div className={styles.menuItemFooter}>
                <span>2900 ₽</span>
                <button onClick={() => handleAddToCart("Филе миньон", 2900)}>
                  В корзину
                </button>
              </div>
            </div>
            <div className={styles.menuItem}>
              <h3>Лосось на гриле</h3>
              <p>С соусом из белого вина и свежими травами</p>
              <div className={styles.menuItemFooter}>
                <span>2400 ₽</span>
                <button
                  onClick={() => handleAddToCart("Лосось на гриле", 2400)}
                >
                  В корзину
                </button>
              </div>
            </div>
            <div className={styles.menuItem}>
              <h3>Ризотто с белыми грибами</h3>
              <p>Кремовое ризотто с белыми грибами и пармезаном</p>
              <div className={styles.menuItemFooter}>
                <span>1800 ₽</span>
                <button
                  onClick={() =>
                    handleAddToCart("Ризотто с белыми грибами", 1800)
                  }
                >
                  В корзину
                </button>
              </div>
            </div>
            <div className={styles.menuItem}>
              <h3>Утиная грудка</h3>
              <p>С карамелизированной грушей и соусом из красного вина</p>
              <div className={styles.menuItemFooter}>
                <span>2200 ₽</span>
                <button onClick={() => handleAddToCart("Утиная грудка", 2200)}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.menuSection}>
          <h2>Десерты</h2>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <h3>Шоколадный фондан</h3>
              <p>С ванильным мороженым и малиновым соусом</p>
              <div className={styles.menuItemFooter}>
                <span>950 ₽</span>
                <button
                  onClick={() => handleAddToCart("Шоколадный фондан", 950)}
                >
                  В корзину
                </button>
              </div>
            </div>
            <div className={styles.menuItem}>
              <h3>Крем-брюле</h3>
              <p>Классический французский десерт с карамельной корочкой</p>
              <div className={styles.menuItemFooter}>
                <span>850 ₽</span>
                <button onClick={() => handleAddToCart("Крем-брюле", 850)}>
                  В корзину
                </button>
              </div>
            </div>
            <div className={styles.menuItem}>
              <h3>Тирамису</h3>
              <p>Классический итальянский десерт с кофейным ароматом</p>
              <div className={styles.menuItemFooter}>
                <span>850 ₽</span>
                <button onClick={() => handleAddToCart("Тирамису", 850)}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
