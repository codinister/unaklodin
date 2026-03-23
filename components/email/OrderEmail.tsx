import InvoiceEmail from './InvoiceEmail';

const OrderEmail = () => {
  const items = [
    {
      title: 'UMASI Native Summer Casual',
      qty: 2,
      price: 15.99,
      colour: 'Red',
      size: 'L',
      total: 100,
    },
    {
      title: 'tive Summer Casual Wear',
      qty: 1,
      price: 89.99,
      colour: 'Red',
      size: 'L',
      total: 100,
    },
    {
      title: 'Vintage Heritage',
      qty: 1,
      price: 25.5,
      colour: 'Red',
      size: 'L',
      total: 100,
    },
  ];

  return (
    <InvoiceEmail
      customerName="Evelyn Botchwey"
      orderId="11222"
      items={items}
      total={2000}
      companyName="UNA Klodin"
      companyLogo="logo.jpg"
      city="Accra"
      country="Ghana"
      address="Kokokomle Accra road"
      phone="0203444555"
      companyLocation="Kumasi Santasi"
      companyPhone="0302 444333"
      date="2026 Mar 23"
      currency="GHS"
    />
  );
};

export default OrderEmail;
