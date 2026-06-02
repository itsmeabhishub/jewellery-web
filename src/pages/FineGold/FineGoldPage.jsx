import React from 'react';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../../components/product/ProductCard/ProductCard';
import styles from './FineGoldPage.module.css';

const FineGoldPage = () => {
  // Filter products with "Premium" tag (representing fine gold collection)
  const fineGoldProducts = PRODUCTS.filter((p) => p.tag === 'Premium');

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Fine Gold Collection</h1>
          <p className={styles.subtitle}>
            Experience the elegance of solid 9KT and 18KT gold. Timeless pieces crafted
            with precision for those who appreciate true luxury.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>9KT Fine Gold</h3>
            <p className={styles.infoDesc}>
              Perfect balance of luxury and affordability. Durable, waterproof, and ideal
              for everyday wear. Made with 37.5% pure gold.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>18KT Vermeil</h3>
            <p className={styles.infoDesc}>
              Premium gold plating over sterling silver. Rich, lustrous finish that lasts.
              Hypoallergenic and perfect for sensitive skin.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <div className={styles.container}>
        {fineGoldProducts.length > 0 ? (
          <div className={styles.productsGrid}>
            {fineGoldProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <p>No fine gold pieces available at the moment.</p>
          </div>
        )}
      </div>

      {/* Care Section */}
      <section className={styles.careSection}>
        <h2 className={styles.careTitle}>Gold Care Guide</h2>
        <div className={styles.careGrid}>
          <div className={styles.careTip}>
            <div className={styles.careTipNumber}>1</div>
            <h4>Clean Regularly</h4>
            <p>Use a soft cloth and lukewarm water with mild soap. Pat dry gently.</p>
          </div>
          <div className={styles.careTip}>
            <div className={styles.careTipNumber}>2</div>
            <h4>Store Properly</h4>
            <p>Keep in a jewelry box away from sunlight and moisture.</p>
          </div>
          <div className={styles.careTip}>
            <div className={styles.careTipNumber}>3</div>
            <h4>Avoid Chemicals</h4>
            <p>Remove before swimming, bathing, or using harsh chemicals.</p>
          </div>
          <div className={styles.careTip}>
            <div className={styles.careTipNumber}>4</div>
            <h4>Polish Annually</h4>
            <p>Professional polishing keeps the shine. We offer free polishing service.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FineGoldPage;
