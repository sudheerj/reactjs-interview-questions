import React from 'react';

function NavigationButton({ onClick, children, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        zIndex: 1000,
        fontWeight: '500',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export default NavigationButton;
