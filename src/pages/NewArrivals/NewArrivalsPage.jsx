import React from 'react';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../../components/product/ProductCard/ProductCard';
import Button from '../../components/common/Button/Button';
import Hero from '../../components/common/Hero/Hero';
import styles from './NewArrivalsPage.module.css';

const NewArrivalsPage = () => {
  // Filter products with "New Arrival" tag
  const newArrivals = PRODUCTS.filter((p) => p.tag === 'New Arrival');

  return (
    <div className={styles.page}>
      <Hero
        title="New Arrivals"
        subtitle="Discover the latest additions to our Demi-Fine collection. Crafted with precision, designed for everyday elegance."
      />

      {/* Products Grid */}
      <div className={styles.container}>
        {newArrivals.length > 0 ? (
          <div className={styles.productsGrid}>
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <p>No new arrivals at the moment. Check back soon!</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Don't Miss Out</h2>
        <p className={styles.ctaText}>Subscribe to our newsletter to get notified about new arrivals</p>
        <div className={styles.newsletter}>
          <input
            type="email"
            className={styles.emailInput}
            placeholder="Enter your email"
            aria-label="Email for newsletter"
          />
          <Button variant="primary" size="md">
            Subscribe
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NewArrivalsPage;
