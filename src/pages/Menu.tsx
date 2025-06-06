import React from "react";
import styles from "./Pages.module.scss";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const menuImages = {
  "Тартар из тунца":
    "https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=500",
  "Карпаччо из говядины":
    "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500",
  "Устрицы Фин де Клер":
    "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500",
  "Филе миньон":
    "https://images.unsplash.com/photo-1558030006-450675393462?w=500",
  "Лосось на гриле":
    "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=500",
  "Ризотто с белыми грибами":
    "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500",
  "Утиная грудка":
    "https://images.unsplash.com/photo-1619894991209-9f9694be045a?w=500",
  "Шоколадный фондан":
    "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500",
  "Крем-брюле":
    "https://images.unsplash.com/photo-1586040140378-b5634cb4c8fc?w=500",
  Тирамису:
    "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500",
};

interface MenuItemChild {
  type?: string;
  props?: {
    className?: string;
    children?: React.ReactNode;
  };
}

interface MenuItemProps {
  children: MenuItemChild[];
}

const Menu = () => {
  const { addItem } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddToCart = (name: string, price: number) => {
    addItem({
      id: `${name}-${Date.now()}`,
      name,
      price,
    });
  };

  const filterMenuItems = (
    items: React.ReactElement<MenuItemProps>[],
    query: string
  ) => {
    if (!query) return items;
    const lowerQuery = query.toLowerCase();

    return items.filter((item) => {
      try {
        const children = item.props.children;

        const menuItemContent = children.find(
          (child) => child?.props?.className === styles.menuItemContent
        );

        if (!menuItemContent?.props?.children) return false;

        const contentChildren = menuItemContent.props
          .children as MenuItemChild[];

        const title =
          (contentChildren.find((child) => child?.type === "h3")?.props
            ?.children as string) || "";

        const description =
          (contentChildren.find((child) => child?.type === "p")?.props
            ?.children as string) || "";

        return (
          title.toLowerCase().includes(lowerQuery) ||
          description.toLowerCase().includes(lowerQuery)
        );
      } catch (error) {
        console.error("Error while filtering item:", error);
        return false;
      }
    });
  };

  const createMenuSection = (
    title: string,
    items: React.ReactElement<MenuItemProps>[]
  ) => {
    const filteredItems = filterMenuItems(items, searchQuery);
    if (filteredItems.length === 0) return null;

    return (
      <div className={styles.menuSection}>
        <h2>{title}</h2>
        <div className={styles.menuItems}>{filteredItems}</div>
      </div>
    );
  };

  const coldAppetizers = [
    <div key="tartar" className={styles.menuItem}>
      <div className={styles.menuItemImage}>
        <img src={menuImages["Тартар из тунца"]} alt="Тартар из тунца" />
      </div>
      <div className={styles.menuItemContent}>
        <h3>Тартар из тунца</h3>
        <p>Свежий тунец с авокадо, каперсами и цитрусовой заправкой</p>
        <div className={styles.menuItemFooter}>
          <span>1800 ₽</span>
          <button onClick={() => handleAddToCart("Тартар из тунца", 1800)}>
            В корзину
          </button>
        </div>
      </div>
    </div>,
    <div className={styles.menuItem}>
      <div className={styles.menuItemImage}>
        <img
          src={menuImages["Карпаччо из говядины"]}
          alt="Карпаччо из говядины"
        />
      </div>
      <div className={styles.menuItemContent}>
        <h3>Карпаччо из говядины</h3>
        <p>Тонко нарезанная мраморная говядина с рукколой и пармезаном</p>
        <div className={styles.menuItemFooter}>
          <span>1600 ₽</span>
          <button onClick={() => handleAddToCart("Карпаччо из говядины", 1600)}>
            В корзину
          </button>
        </div>
      </div>
    </div>,
    <div className={styles.menuItem}>
      <div className={styles.menuItemImage}>
        <img
          src={menuImages["Устрицы Фин де Клер"]}
          alt="Устрицы Фин де Клер"
        />
      </div>
      <div className={styles.menuItemContent}>
        <h3>Устрицы Фин де Клер</h3>
        <p>Свежие французские устрицы с лимоном и соусом мигронет</p>
        <div className={styles.menuItemFooter}>
          <span>450 ₽/шт</span>
          <button onClick={() => handleAddToCart("Устрицы Фин де Клер", 450)}>
            В корзину
          </button>
        </div>
      </div>
    </div>,
  ];

  const mainCourses = [
    <div key="filet-mignon" className={styles.menuItem}>
      <div className={styles.menuItemImage}>
        <img src={menuImages["Филе миньон"]} alt="Филе миньон" />
      </div>
      <div className={styles.menuItemContent}>
        <h3>Филе миньон</h3>
        <p>Нежное филе говядины с соусом из черного перца и трюфелей</p>
        <div className={styles.menuItemFooter}>
          <span>2900 ₽</span>
          <button onClick={() => handleAddToCart("Филе миньон", 2900)}>
            В корзину
          </button>
        </div>
      </div>
    </div>,
    <div className={styles.menuItem}>
      <div className={styles.menuItemImage}>
        <img src={menuImages["Лосось на гриле"]} alt="Лосось на гриле" />
      </div>
      <div className={styles.menuItemContent}>
        <h3>Лосось на гриле</h3>
        <p>С соусом из белого вина и свежими травами</p>
        <div className={styles.menuItemFooter}>
          <span>2400 ₽</span>
          <button onClick={() => handleAddToCart("Лосось на гриле", 2400)}>
            В корзину
          </button>
        </div>
      </div>
    </div>,
    <div className={styles.menuItem}>
      <div className={styles.menuItemImage}>
        <img
          src={menuImages["Ризотто с белыми грибами"]}
          alt="Ризотто с белыми грибами"
        />
      </div>
      <div className={styles.menuItemContent}>
        <h3>Ризотто с белыми грибами</h3>
        <p>Кремовое ризотто с белыми грибами и пармезаном</p>
        <div className={styles.menuItemFooter}>
          <span>1800 ₽</span>
          <button
            onClick={() => handleAddToCart("Ризотто с белыми грибами", 1800)}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>,
    <div className={styles.menuItem}>
      <div className={styles.menuItemImage}>
        <img src={menuImages["Утиная грудка"]} alt="Утиная грудка" />
      </div>
      <div className={styles.menuItemContent}>
        <h3>Утиная грудка</h3>
        <p>С карамелизированной грушей и соусом из красного вина</p>
        <div className={styles.menuItemFooter}>
          <span>2200 ₽</span>
          <button onClick={() => handleAddToCart("Утиная грудка", 2200)}>
            В корзину
          </button>
        </div>
      </div>
    </div>,
  ];

  const desserts = [
    <div key="fondan" className={styles.menuItem}>
      <div className={styles.menuItemImage}>
        <img src={menuImages["Шоколадный фондан"]} alt="Шоколадный фондан" />
      </div>
      <div className={styles.menuItemContent}>
        <h3>Шоколадный фондан</h3>
        <p>С ванильным мороженым и малиновым соусом</p>
        <div className={styles.menuItemFooter}>
          <span>950 ₽</span>
          <button onClick={() => handleAddToCart("Шоколадный фондан", 950)}>
            В корзину
          </button>
        </div>
      </div>
    </div>,
    <div className={styles.menuItem}>
      <div className={styles.menuItemImage}>
        <img src={menuImages["Крем-брюле"]} alt="Крем-брюле" />
      </div>
      <div className={styles.menuItemContent}>
        <h3>Крем-брюле</h3>
        <p>Классический французский десерт с карамельной корочкой</p>
        <div className={styles.menuItemFooter}>
          <span>850 ₽</span>
          <button onClick={() => handleAddToCart("Крем-брюле", 850)}>
            В корзину
          </button>
        </div>
      </div>
    </div>,
    <div className={styles.menuItem}>
      <div className={styles.menuItemImage}>
        <img src={menuImages["Тирамису"]} alt="Тирамису" />
      </div>
      <div className={styles.menuItemContent}>
        <h3>Тирамису</h3>
        <p>Классический итальянский десерт с кофейным ароматом</p>
        <div className={styles.menuItemFooter}>
          <span>850 ₽</span>
          <button onClick={() => handleAddToCart("Тирамису", 850)}>
            В корзину
          </button>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Меню</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Поиск блюд..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.content}>
        {createMenuSection("Холодные закуски", coldAppetizers)}
        {createMenuSection("Основные блюда", mainCourses)}
        {createMenuSection("Десерты", desserts)}
      </div>
    </div>
  );
};

export default Menu;
