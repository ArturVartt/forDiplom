import styles from "./Pages.module.scss";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      description: "Интерьер основного зала",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      description: "Наши фирменные блюда",
    },
    {
      src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88",
      description: "Панорамный вид из ресторана",
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
      description: "Вечерняя атмосфера",
    },
    {
      src: "https://images.unsplash.com/photo-1551218372-a8789b81b253",
      description: "Наш шеф-повар за работой",
    },
    {
      src: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6",
      description: "Изысканная подача блюд",
    },
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Галерея</h1>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <img
              src={`${image.src}?auto=format&fit=crop&w=800&q=80`}
              alt={image.description}
              loading="lazy"
            />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
