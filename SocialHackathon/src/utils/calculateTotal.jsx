// src/utils/calculateTotal.jsx
import React from 'react';

const CalculateTotal = ({ numbers }) => {
  if (!Array.isArray(numbers)) return null;

  const total = numbers.reduce((sum, num) => sum + num, 0);

  return (
    <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '5px' }}>
      <h4>Total Calculator</h4>
      <p>Numbers: {numbers.join(', ')}</p>
      <p><strong>Total:</strong> {total}</p>
    </div>
  );
};

export default CalculateTotal;
