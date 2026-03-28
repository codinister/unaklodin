
import serverConfig from '@/state/sanity/server.config';
import { ItemTypes } from '@/types/types';
import { groq } from 'next-sanity';
import getDollarRate from './getDollarRate';

const getProductById = async (id: string) => {
  const date = new Date().toISOString();
  const rate = await getDollarRate();

  const sett = await serverConfig.fetch(groq`*[_type == 'settings'].currency`);

  const data = await serverConfig.fetch(
    groq`
        *[_id == $id]{
          'type': _type, 
          'createdAt' : _create5dAt, 
          'updatedAt' : _updatedAt,
          'id': _id,
          title,
          "cat" : category->title, 
          "colour": colour[]->{
          title,
          hex
          },
          "size": sizes[]->title,
          "description": items.description,
          "excerpt": array::join(string::split((pt::text(items.description)), "")[0..200], "")+"...",
          "features": items.features[].title,
          "gallery": items.gallery.images[].img.asset->url,
          "price": items.price,
          "product": items.product,
          "stock": items.stock,
          "sub_title": items.sub_title ,
          "thumbnail": items.thumbnail.img.asset->url
        }
    `,
    { id },
  );

  return data.map((v: ItemTypes) => {
    const cedi = Number(v.price);
    const usd = Number(rate * v.price);
    return {
      ...v,
      date,
      cediPrice: cedi,
      dollarPrice: Math.floor(usd),
      price: sett[0] === '$' ? Math.floor(usd) : Number(cedi),
    };
  });
};

export default getProductById
