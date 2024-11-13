/*import React from 'react'
import Layout from '../components/Layout/Layout';
import { Link } from "react-router-dom";
import Back from '../images/foba.jpg';
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <div>
        <Layout>
         <div className="home" style={{backgroundImage:`url(${Back})`}}>
          <div className="headerContainer">
            <h1>Food Website</h1>
            <p>Best Food</p>
            <Link to="/menu">

            <button>ORDER NOW</button>
            </Link>
          </div>
         </div>
         </Layout>
    </div>
  );
};

export default Home;*/
import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from "react-router-dom";
import Back from '../images/foba.jpg';

const Home = () => {
  const homeStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${Back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  };

  const headerContainerStyle = {
    position: 'relative',
    zIndex: 2,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const h1Style = {
    fontSize: '4rem',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
    marginBottom: '0.5rem',
  };

  const pStyle = {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    color: '#fff',
    background: 'linear-gradient(135deg, #f76c6c, #ff7e5f)',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    background: 'linear-gradient(135deg, #ff7e5f, #f76c6c)',
    transform: 'scale(1.05)',
  };

  const [buttonHover, setButtonHover] = React.useState(false);

  return (
    <div>
      <Layout>
        <div className="home" style={homeStyle}>
          <div style={overlayStyle}></div>
          <div className="headerContainer" style={headerContainerStyle}>
            <h1 style={h1Style}>Food Website</h1>
            <p style={pStyle}>Best Food</p>
            <Link to="/menu">
              <button
                style={buttonHover ? buttonHoverStyle : buttonStyle}
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
              >
                ORDER NOW
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
