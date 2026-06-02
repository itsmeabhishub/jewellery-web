import React from 'react';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../../components/product/ProductCard/ProductCard';
import styles from './BestSellersPage.module.css';

const BestSellersPage = () => {
  // Filter products with "Best Seller" tag
  const bestSellers = PRODUCTS.filter((p) => p.tag === 'Best Seller');

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Best Sellers</h1>
          <p className={styles.subtitle}>
            Our most-loved pieces. Tried and tested by thousands of Lumoria customers.
            Join the fans of timeless, everyday luxury.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <div className={styles.container}>
        {bestSellers.length > 0 ? (
          <div className={styles.productsGrid}>
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <p>No best sellers available. Check back soon!</p>
          </div>
        )}
      </div>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <h2 className={styles.trustTitle}>Why Customers Love These</h2>
        <div className={styles.trustGrid}>
          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>⭐</div>
            <h3 className={styles.trustCardTitle}>Highest Rated</h3>
            <p className={styles.trustCardText}>Average 4.8/5 stars from verified buyers</p>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>🛍️</div>
            <h3 className={styles.trustCardTitle}>Most Purchased</h3>
            <p className={styles.trustCardText}>Trusted by thousands of happy customers</p>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>💎</div>
            <h3 className={styles.trustCardTitle}>Premium Quality</h3>
            <p className={styles.trustCardText}>Durable, waterproof, hypoallergenic materials</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSellersPage;
