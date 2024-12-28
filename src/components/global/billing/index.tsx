import React from 'react';
import PaymentCard from './PaymentCard';

const Billing = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-5 lg:w-10/12 xl:w-8/12 container">
      {/* Add content to confirm it's rendering */}
      <PaymentCard label='FREE' current='FREE'/>
    </div>
  );
};

export default Billing;