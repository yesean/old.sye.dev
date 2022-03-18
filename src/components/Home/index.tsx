import * as React from 'react';
import './styles/style.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="name-description-container">
        <h1 className="name">sean ye</h1>
        <h2 className="description">software engineer | ucsd '23</h2>
      </div>
    </div>
  );
};

export default Home;
