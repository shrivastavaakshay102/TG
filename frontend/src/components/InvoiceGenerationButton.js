// frontend/src/components/InvoiceGenerationButton.js

import React from 'react';

const InvoiceGenerationButton = () => {
  const handleGenerateInvoice = () => {
    fetch('/api/billing/generate-invoice', { method: 'POST' })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error generating invoice:', error));
  };

  return (
    <div>
      <h2>Invoice Generation</h2>
      <button onClick={handleGenerateInvoice}>Generate Invoice</button>
    </div>
  );
};

export default InvoiceGenerationButton;
