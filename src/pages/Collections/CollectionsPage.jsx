import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { COLLECTIONS } from '../../data/collectionsData';
import ProductCard from '../../components/product/ProductCard/ProductCard';
import styles from './CollectionsPage.module.css';

const CollectionsPage = () => {
  const { collectionId } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [ratingFilter, setRatingFilter] = useState(0);

  const collection = COLLECTIONS[collectionId];

  const filteredProducts = useMemo(() => {
    if (!collection || !collection.products) return [];
    
    let filtered = collection.products.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (ratingFilter > 0) {
      filtered = filtered.filter((product) => product.rating >= ratingFilter);
    }

    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      // Keep original order (newest first)
    }

    return filtered;
  }, [collection, sortBy, priceRange, ratingFilter]);

  if (!collection) {
    return (
      <div className={styles.notFound}>
        <h1>Collection not found</h1>
        <p>Sorry, we couldn't find the collection you're looking for.</p>
      </div>
    );
  }

  return (
    <div className={styles.collectionsPage}>
      {/* Hero Section */}
      <div 
        className={styles.hero}
        style={{ backgroundImage: `url(${collection.hero})` }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{collection.title}</h1>
          <p className={styles.heroSubtitle}>{collection.subtitle}</p>
        </div>
      </div>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <p className={styles.storyText}>{collection.story}</p>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          {/* Sidebar Filters */}
          <div className={styles.sidebar}>
            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Sort By</h3>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.select}
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Price Range</h3>
              <div className={styles.priceRange}>
                <input 
                  type="number" 
                  min="0" 
                  max="50000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className={styles.priceInput}
                  placeholder="Min"
                />
                <span>-</span>
                <input 
                  type="number" 
                  min="0" 
                  max="50000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className={styles.priceInput}
                  placeholder="Max"
                />
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Rating</h3>
              <div className={styles.ratingFilter}>
                {[0, 4.5, 4.6, 4.7, 4.8, 4.9].map((rating) => (
                  <label key={rating} className={styles.ratingLabel}>
                    <input 
                      type="radio" 
                      name="rating" 
                      value={rating}
                      checked={ratingFilter === rating}
                      onChange={(e) => setRatingFilter(parseFloat(e.target.value))}
                    />
                    {rating === 0 ? 'All Ratings' : `${rating}★ & Up`}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={styles.productsGrid}>
            <div className={styles.gridHeader}>
              <h2>
                {collection.title}
                <span className={styles.count}>({filteredProducts.length})</span>
              </h2>
            </div>

            <div className={styles.grid}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className={styles.noResults}>
                <p>No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className={styles.recommendedSection}>
        <div className={styles.container}>
          <h2 className={styles.recommendedTitle}>You Might Also Like</h2>
          <div className={styles.recommendedGrid}>
            {collection.products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;
