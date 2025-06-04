import { useState } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.scss";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  const handlePlaceOrder = () => {
    setShowNotification(true);
    clearCart();
    setIsOpen(false);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className={styles.cartContainer}>
      {showNotification && (
        <div className={styles.notification}>
          Спасибо за заказ! Мы свяжемся с вами в ближайшее время
        </div>
      )}

      <button className={styles.cartButton} onClick={() => setIsOpen(!isOpen)}>
        🛒{" "}
        {items.length > 0 && (
          <span className={styles.badge}>{items.length}</span>
        )}
      </button>

      {isOpen && (
        <div className={styles.cartDropdown}>
          <div className={styles.cartHeader}>
            <h3>Корзина</h3>
            {items.length > 0 && (
              <button className={styles.clearButton} onClick={clearCart}>
                Очистить
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <p className={styles.emptyCart}>Корзина пуста</p>
          ) : (
            <>
              <div className={styles.cartItems}>
                {items.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.itemInfo}>
                      <h4>{item.name}</h4>
                      <p>{item.price} ₽</p>
                    </div>
                    <div className={styles.itemControls}>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className={styles.removeButton}
                        onClick={() => removeItem(item.id)}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.cartFooter}>
                <div className={styles.total}>
                  <span>Итого:</span>
                  <span>{total} ₽</span>
                </div>
                <button
                  className={styles.orderButton}
                  onClick={handlePlaceOrder}
                >
                  Оформить заказ
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
