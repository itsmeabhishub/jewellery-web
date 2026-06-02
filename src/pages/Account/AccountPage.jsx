import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks';
import styles from './AccountPage.module.css';

const AccountPage = () => {
  const { user, isAuthenticated, isLoading, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading || !user) {
    return null;
  }

  const fullName = user.name || 'Alexandra V. Beaumont';
  const email = user.email || 'a.beaumont@etereal.com';
  const phone = user.phone || '+44 7700 900123';
  const memberSince = user.loginTime
    ? new Date(user.loginTime).toLocaleDateString('en-GB', {
        month: 'long',
        year: 'numeric',
      })
    : 'September 2022';
  const address = user.addresses?.[0] || {
    line1: '12 Kensington Gardens Mews',
    city: 'London',
    postcode: 'W8 4QH',
    country: 'United Kingdom',
  };

  return (
    <div className={styles.accountPage}>
      <header className={styles.pageHeader}>
        <h1>My Account</h1>
        <p>Welcome back, {user.name ? fullName : 'Alexandra'}. Manage your preferences and orders.</p>
      </header>

      <div className={styles.pageGrid}>
        <aside className={styles.sidebar}>
          <nav className={styles.navList}>
            <a className={styles.navLinkActive} href="#profile">
              <span className={styles.navIcon}>👤</span>
              Profile Details
            </a>
            <a className={styles.navLink} href="#orders">
              <span className={styles.navIcon}>📦</span>
              Order History
            </a>
            <a className={styles.navLink} href="#wishlist">
              <span className={styles.navIcon}>❤️</span>
              Wishlist
            </a>
            <a className={styles.navLink} href="#addresses">
              <span className={styles.navIcon}>📍</span>
              Addresses
            </a>
          </nav>

          <button className={styles.logoutButton} onClick={() => {
            logout();
            navigate('/login');
          }}>
            Sign Out
          </button>
        </aside>

        <div className={styles.contentArea}>
          <section className={styles.card} id="profile">
            <div className={styles.sectionHeader}>
              <div>
                <h2>Personal Information</h2>
                <p>Update your details and keep your account secure.</p>
              </div>
              <button className={styles.editButton}>Edit Details</button>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoBlock}>
                <span>Full Name</span>
                <p>{fullName}</p>
              </div>
              <div className={styles.infoBlock}>
                <span>Email Address</span>
                <p>{email}</p>
              </div>
              <div className={styles.infoBlock}>
                <span>Phone Number</span>
                <p>{phone}</p>
              </div>
              <div className={styles.infoBlock}>
                <span>Member Since</span>
                <p>{memberSince}</p>
              </div>
            </div>
          </section>

          <section className={styles.section} id="orders">
            <div className={styles.sectionHeaderTop}>
              <div>
                <h2>Recent Orders</h2>
                <p>Track recent purchases and view order details.</p>
              </div>
              <button className={styles.secondaryLink} type="button">
                View All
              </button>
            </div>

            <div className={styles.orderList}>
              <article className={styles.orderCard}>
                <div className={styles.orderImage}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD670fMheehpPxD68xmbF38FfWfDXhV_FuRKAi_BnM8pvX4PqvDNrYiXIOAOMh0W3UiQYsLCbT8Vuu8lbEqBg0RH1jPBNMQKKSB6F-MCwk6OPvBaPX0PHvLIrJneADj1v9VGzegp3A5a8T11F2AuB4W63K6j2k-F2CDnBLKyWmkO4abyMWKzzv9-NzA0NfSxO5oQM0IVKsxxELViRV666LXBA6aVH94cwfHIoj6uKrf_iM13GcvOgU2D0qOw2ANxOcSkRsbED_6gXf_"
                    alt="Diamond Pendant"
                  />
                </div>
                <div className={styles.orderMeta}>
                  <span className={styles.statusPill}>Delivered Oct 12</span>
                  <h3>Aurelia Solitaire Diamond Necklace</h3>
                  <p>Order #AUR-98231 • 1 Item</p>
                </div>
                <div className={styles.orderActions}>
                  <p className={styles.orderPrice}>£1,250.00</p>
                  <button className={styles.orderButton}>Track Order</button>
                </div>
              </article>

              <article className={styles.orderCard}>
                <div className={styles.orderImage}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1A6q_oGYsW8Ergss-QuMbQxm-ARdwLVrnSx2Od5GU-qgV0FUmc6rqVLYFG4gw3i8BCX3rCfKaJ4MMPP3S1JF7vSeUEtZyiYisEKA4I0rvW25ENdVhG2SHDd7o8VaTGv6xj8Gt32EGkj6a6uaifAPgduBUAgOmJ9x6q_RiihIM8O-EYkd404ySINl9VbfJuwJ8T-VIFUducMR4M5rVHvd1WqWMH1hahtx7-w1VdkrvHvmjHzPCYOLDtQt0mFbEpzb3F0VpobVh8uEL"
                    alt="Sapphire Earrings"
                  />
                </div>
                <div className={styles.orderMeta}>
                  <span className={styles.statusPillSecondary}>Processing</span>
                  <h3>Heritage Gold & Sapphire Studs</h3>
                  <p>Order #AUR-99540 • 2 Items</p>
                </div>
                <div className={styles.orderActions}>
                  <p className={styles.orderPrice}>£840.00</p>
                  <button className={styles.orderButton}>View Details</button>
                </div>
              </article>
            </div>
          </section>

          <section className={styles.addressGrid} id="addresses">
            <div className={styles.addressCard}>
              <div className={styles.addressHeader}>
                <span>🏠</span>
                <div>
                  <h3>Primary Shipping</h3>
                </div>
              </div>
              <p>
                {fullName}
                <br />
                {address.line1}
                <br />
                {address.city}, {address.postcode}
                <br />
                {address.country}
              </p>
            </div>
            <button className={styles.addAddressCard} type="button">
              <span>＋</span>
              <div>
                <h3>Add New Address</h3>
              </div>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
