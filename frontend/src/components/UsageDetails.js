// frontend/src/components/UsageDetails.js

import React, { useState, useEffect } from 'react';

const UsageDetails = () => {
  const [usageData, setUsageData] = useState(null);

  useEffect(() => {
    fetch('/api/usage/details')
      .then(response => response.json())
      .then(data => setUsageData(data))
      .catch(error => console.error('Error fetching usage details:', error));
  }, []);

  return (
    <div>
      <h2>Usage Details</h2>
      {usageData && (
        <ul>
          <li>Metric 1: {usageData.metric1}</li>
          <li>Metric 2: {usageData.metric2}</li>
        </ul>
      )}
    </div>
  );
};

export default UsageDetails;
