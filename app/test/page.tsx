'use client';

import { useEffect, useState } from 'react';

export default function ShippingRates() {
  useEffect(() => {
    const fn = async () => {
      const res = await fetch('/api/dhl/rates', {
        method: 'POST',
        body: JSON.stringify({
          originCountryCode: 'GH',
          originPostalCode: '00233',
          originCityName: 'Accra',
          destinationCountryCode: 'US',
          destinationPostalCode: '10001',
          destinationCityName: 'New York',
          weight: 2,
        }),
      });

      const data = await res.json();
      console.log(data);
    };

    fn();
  }, []);

  return <div>TEST PAGE</div>;
}
