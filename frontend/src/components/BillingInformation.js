// frontend/src/components/BillingInformation.js

import React, { useState, useEffect } from 'react';

const BillingInformation = () => {
  const [billingData, setBillingData] = useState(null);

  useEffect(() => {
    fetch('/api/billing/details')
      .then(response => response.json())
      .then(data => setBillingData(data))
      .catch(error => console.error('Error fetching billing details:', error));
  }, []);

  return (
    <div>
      <h2>Billing Information</h2>
      {billingData && (
        <ul>
          <li>Current Billing Cycle: {billingData.currentCycle}</li>
          <li>Cumulative Usage: {billingData.cumulativeUsage}</li>
        </ul>
      )}
    </div>
  );
};

export default BillingInformation;
