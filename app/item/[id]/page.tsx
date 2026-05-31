import getProductById from '@/lib/getProductById';
import ItemClientComponent from '../ItemClientComponent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const slug = (await params)?.id;
  const data = await getProductById(slug);
  if (!data) return { title: 'No data found!' };

  return {
    title: data[0]?.title,
    description: data[0]?.excerpt,
    openGraph: {
      title: data[0]?.title,
      description: data[0]?.excerpt,
      images: [
        {
          url: data[0].thumbnail + '?w=1200&h=630&fit=crop',
          width: 1200,
          height: 630,
        },
      ],

      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: data[0]?.title,
      description: data[0]?.excerpt,
      images: [data[0]?.thumbnail],
    },
  };
}

const Item = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const slug = (await params)?.id;
  const data = await getProductById(slug);
  return <ItemClientComponent data={data} />;
};

export default Item;
