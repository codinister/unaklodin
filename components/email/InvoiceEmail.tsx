import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Img,
  Row,
  Column,
} from '@react-email/components';

type OrderItem = {
  title: string;
  qty: number;
  price: number;
  total: number;
  colour: string;
  size: string;
};

type InvoiceProps = {
  customerName: string;
  orderId: string;
  items: OrderItem[];
  total: number;
  companyName: string;
  companyLogo: string;
  phone: string;
  city: string;
  address: string;
  country: string;
  companyLocation: string;
  companyPhone: string;
  date: string;
  currency: string;
};

export default function InvoiceEmail({
  customerName,
  orderId,
  items,
  total,
  companyName,
  companyLogo,
  phone,
  city,
  address,
  country,
  companyLocation,
  companyPhone,
  date,
  currency,
}: InvoiceProps) {
  return (
    <Html>
      <Head />
      <Body
        style={{ backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' }}
      >
        <Container
          style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          {/* Header */}
          <Section style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Img src={companyLogo} style={{margin: 'auto'}} width="120" />
            <Heading style={{ lineHeight: '10px' }}>{companyName}</Heading>

            <Text style={{ lineHeight: '2px' }}>{companyLocation}</Text>
            <Text style={{ lineHeight: '2px' }}>{companyPhone}</Text>
            <Text style={{ lineHeight: '4px', fontWeight: 'bold' }}>
              Order Invoice
            </Text>
          </Section>

          {/* Customer Info */}
          <Section>
            <Text>
              <strong> {customerName},</strong>
            </Text>
            <Text style={{ lineHeight: '2px' }}>
              <strong>Order ID:</strong> {orderId}
            </Text>
            <Text style={{ lineHeight: '2px' }}>
              <strong>Order Date:</strong> {date}
            </Text>
            <Text style={{ lineHeight: '2px' }}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={{ lineHeight: '2px' }}>
              <strong>Country:</strong> {country}
            </Text>
            <Text style={{ lineHeight: '2px' }}>
              <strong>City:</strong> {city}
            </Text>
            <Text style={{ lineHeight: '2px' }}>
              <strong>Address:</strong> {address}
            </Text>

            <Text style={{ marginTop: '10px' }}>
              Thank you for your purchase! Here are your order details:
            </Text>
          </Section>

          {/* Items */}
          <Section style={{ marginTop: '20px' }}>
            <Heading as="h3">Order Summary</Heading>

            <Row style={{fontSize: '12px'}}>
              <Column style={{ width: '186px' }}>
                <Text>
                  <strong>Description</strong>
                </Text>
              </Column>
              <Column  style={{ width: '50px' }}>
                <strong>Qty</strong>
              </Column>
              <Column style={{ width: '50px' }}>
                <strong>Size</strong>
              </Column>
              <Column style={{ width: '150px' }}>
                <Text>
                  <strong>Colour</strong>
                </Text>
              </Column>
              <Column style={{ width: '100px' }}>
                <strong>Price</strong>
              </Column>
              <Column style={{ width: '100px' }}>
                <strong>Amount</strong>
              </Column>
            </Row>
            {items.map((item, index) => (
              <Row key={index} style={{fontSize: '12px'}}>
                <Column style={{ width: '200px' }}>
                  <Text
                    style={{
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      lineHeight: '1.4',
                    }}
                  >
                    {item.title}
                  </Text>
                </Column>
                <Column style={{ width: '50px' }}>{item.qty}</Column>
                <Column style={{ width: '50px' }}>{item.size}</Column>
                <Column style={{ width: '150px' }}>
                  <Text
                    style={{
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                          lineHeight: '1.4',
                    }}
                  >
                    {item.colour}
                  </Text>
                </Column>
                <Column style={{ width: '100px' }}>{item.price}</Column>
                <Column style={{ width: '100px' }}>
                  {item.total.toFixed(2)}
                </Column>
              </Row>
            ))}
          </Section>

          {/* Total */}
          <Section
            style={{
              marginTop: '20px',
              borderTop: '1px solid #eee',
              paddingTop: '10px',
            }}
          >
            <Row>
              <Column />
              <Column align="right" style={{width: '200px'}}>
                <Text>
                  <strong>
                    Total: {currency}
                    {total.toFixed(2)}
                  </strong>

                </Text>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={{ marginTop: '30px', textAlign: 'center' }}>
            <Text>Thank you for shopping with us!</Text>
            <Text>{companyName}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
