// frontend/src/components/Dashboard.js

import React from 'react';
import GoogleOAuthButton from './GoogleOAuthButton';
import UsageDetails from './UsageDetails';
import BillingInformation from './BillingInformation';
import InvoiceGenerationButton from './InvoiceGenerationButton';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <GoogleOAuthButton />
      <UsageDetails />
      <BillingInformation />
      <InvoiceGenerationButton />
    </div>
  );
};

export default Dashboard;
