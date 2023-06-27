import React from 'react';

const Home = () => {
  const styles = {
    container: {
      backgroundColor: 'transparent',
      padding: '13rem',
      borderRadius: '8px',
      color: '#FDD545',
      textAlign: 'center',
      fontSize: '2rem',
      fontFamily: 'Faster One',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    },
  };

  return (
    <div style={styles.container}>
      <h1> The Star Wars Codex</h1>
    </div>
  );
};

export default Home;
