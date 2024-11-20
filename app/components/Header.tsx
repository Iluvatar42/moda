// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1></h1>
    </header>
  );
};

const styles = {
  header: {
    height: '60px',
    background: '#333',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
  },
};

export default Header;
